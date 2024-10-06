import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import 'tailwindcss/tailwind.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarChart: React.FC = () => {
  const [jsons, setJsons] = useState<Employee[]>([])
  const fetchData = async (): Promise<void> => {
    const departments = (await window.api.getDepartments()) as Employee[]
    setJsons(departments)
  }
  useEffect(() => {
    fetchData()
  }, [])

  interface Employee {
    employeeId: number
    employeeName: string
    position: string
    hireDate: string
    departmentid: number
    departmentName: string
    managerId: number | null
  }

  // Function to count employees in each department
  function countEmployeesByDepartment(employees: Employee[]): { [departmentName: string]: number } {
    return employees.reduce(
      (acc, employee) => {
        if (acc[employee.departmentName]) {
          acc[employee.departmentName]++
        } else {
          acc[employee.departmentName] = 1
        }
        return acc
      },
      {} as { [departmentName: string]: number }
    )
  }

  // Function to get unique department names
  function getUniqueDepartmentNames(employees: Employee[]): string[] {
    const departmentNames = employees.map((employee) => employee.departmentName)
    return Array.from(new Set(departmentNames))
  }

  // Usage
  const employeeCountByDepartment = countEmployeesByDepartment(jsons)
  const uniqueDepartmentNames = getUniqueDepartmentNames(jsons)

  console.log('Employee Count by Department:', employeeCountByDepartment)
  console.log('Unique Department Names:', uniqueDepartmentNames)
  const data = {
    labels: uniqueDepartmentNames,
    datasets: [
      {
        label: 'Employees by Department',
        data: Object.values(employeeCountByDepartment),
        backgroundColor: ['#FF784D', '#FFCE56', '#de286e', '#FF9F40']
      }
    ]
  }

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,

        text: 'Employees by Department'
      }
    }
  }
  console.log(jsons)
  return (
    <div className="bg-white w-[700px] h-[400px] rounded-lg shadow-md">
      <Bar data={data} options={options} />
    </div>
  )
}

export default BarChart
