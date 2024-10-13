interface User {
  username: string
  password: string
}

interface employee {
  employeeId: number
  employeeName: string
  position: string
  hireDate: string
  departmentid: number
  departmentName: string
  managerId: number | null

  getEmployees: () => Promise<employee[]>
  setEmployees: (employees: employee[]) => void
}

interface Department {
  departmentid: number
  name: string
  managerid: number | null
}

export default User
