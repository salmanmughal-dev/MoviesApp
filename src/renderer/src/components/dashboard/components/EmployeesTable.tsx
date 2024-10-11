import React, { useEffect } from 'react'
import { ConfigProvider, Space, Table } from 'antd'
import type { TableProps } from 'antd'
import { CloseSquareFilled, EditFilled } from '@ant-design/icons'

type ColumnsType<T extends object> = TableProps<T>['columns']

interface DataType {
  employeeId: number
  employeeName: string
  position: string
  hireDate: string
  departmentName: string
  managerId: number
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Employee ID',
    dataIndex: 'employeeId',
    key: 'employeeId'
  },
  {
    title: 'Name',
    dataIndex: 'employeeName',
    key: 'employeeName',
    render: (text) => <a>{text}</a>
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
    title: 'Department',
    dataIndex: 'departmentName',
    key: 'departmentName'
  },
  {
    title: 'Manager ID',
    dataIndex: 'managerId',
    key: 'managerId',
    render: (_, record) => (
      <Space size="middle">
        <h1>{record.managerId ? record.managerId : 'N/A'}</h1>
      </Space>
    )
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <div className="flex gap-1">
        <button
          onClick={async () => await window.api.editEmployee(record)}
          className="px-3 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300"
        >
          <EditFilled className="text-white" />
        </button>
        <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">
          <CloseSquareFilled className="text-white" />
        </button>
      </div>
    )
  }
]

const EmployeesTable: React.FC = () => {
  const [data, setData] = React.useState<DataType[]>([])
  const fetchData = async (): Promise<void> => {
    const departments = await window.api.getDepartments()
    // @ts-expect-error there is an exception for typescript type.
    setData(departments)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: '#FF784D',
            headerColor: 'white'
          }
        }
      }}
    >
      <div className="p-4">
        <Table<DataType> columns={columns} pagination={{ pageSize: 5 }} dataSource={data} />
      </div>
    </ConfigProvider>
  )
}

export default EmployeesTable
