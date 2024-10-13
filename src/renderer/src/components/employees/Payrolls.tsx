import React from 'react'
import { Table, Button, Avatar } from 'antd'
import { DownloadOutlined, FilePdfFilled } from '@ant-design/icons'

interface Employee {
  employeeId: number
  employeeName: string
  position: string
  hireDate: string
}

const employees: Employee[] = [
  {
    employeeId: 1,
    employeeName: 'John Doe',
    position: 'Software Engineer',
    hireDate: '2022-01-15'
  },
  {
    employeeId: 2,
    employeeName: 'Jane Smith',
    position: 'Product Manager',
    hireDate: '2021-07-23'
  },
  {
    employeeId: 3,
    employeeName: 'Micheal Johnson',
    position: 'Data Scientist',
    hireDate: '2020-12-15'
  },
  {
    employeeId: 4,
    employeeName: 'Hannah Brown',
    position: 'UX Designer',
    hireDate: '2019-09-23'
  },
  {
    employeeId: 5,
    employeeName: 'David Lee',
    position: 'DevOps Engineer',
    hireDate: '2018-04-11'
  },
  {
    employeeId: 6,
    employeeName: 'Emily Chen',
    position: 'Marketing Manager',
    hireDate: '2020-03-15'
  },
  {
    employeeId: 7,
    employeeName: 'Kevin White',
    position: 'Sales Manager',
    hireDate: '2019-01-15'
  },
  {
    employeeId: 8,
    employeeName: 'Sarah Taylor',
    position: 'HR Manager',
    hireDate: '2018-07-23'
  },
  {
    employeeId: 9,
    employeeName: 'Tom Brown',
    position: 'Finance Manager',
    hireDate: '2017-04-11'
  }
  // Add more employees as needed
]

const EmployeeTable: React.FC = () => {
  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (_: any, record: Employee) => (
        <Avatar className="bg-primary">{record.employeeName.charAt(0)}</Avatar>
      )
    },
    {
      title: 'Employee Name',
      dataIndex: 'employeeName',
      key: 'employeeName'
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position'
    },
    {
      title: 'Hire Date',
      dataIndex: 'hireDate',
      key: 'hireDate'
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Employee) => (
        <>
          <Button
            type="primary"
            icon={<FilePdfFilled />}
            className="bg-red-600 text-white hover:!bg-red-700"
            onClick={() => handleGeneratePayroll(record.employeeId)}
          >
            Generate
          </Button>
        </>
      )
    }
  ]

  const handleGeneratePayroll = async (employeeId: number) => {
    console.log(`Generating payroll for employee ID: ${employeeId}`)
    await window.api.generatePayroll()
    // Add logic to generate payroll PDF
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold m-8">Available payrolls</h1>
      <Table
        columns={columns}
        dataSource={employees}
        rowKey="employeeId"
        pagination={false}
        className="shadow-lg rounded-lg"
      />
    </div>
  )
}

export default EmployeeTable
