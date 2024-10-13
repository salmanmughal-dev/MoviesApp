import React, { useState } from 'react'
import { Table, Select, Avatar, Card, Badge, Calendar, Pagination } from 'antd'
import { UserOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import '../././../index.css'

const { Option } = Select

const initialData = [
  {
    employeeId: 1,
    employeeName: 'John Doe',
    position: 'Manager',
    hireDate: '2020-01-01',
    departmentName: 'Human Resources',
    managerId: 101,
    status: 'Present'
  },
  {
    employeeId: 2,
    employeeName: 'Jane Smith',
    position: 'Developer',
    hireDate: '2019-03-15',
    departmentName: 'Engineering',
    managerId: 102,
    status: 'Leave'
  },
  {
    employeeId: 3,
    employeeName: 'Micheal Johnson',
    position: 'Designer',
    hireDate: '2018-07-23',
    departmentName: 'Sales',
    managerId: 103,
    status: 'Present'
  }
]

const Attendance = () => {
  const [data, setData] = useState(initialData)

  const handleStatusChange = (employeeId, value) => {
    const newData = data.map((item) => {
      if (item.employeeId === employeeId) {
        return { ...item, status: value }
      }
      return item
    })
    setData(newData)
  }

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (_, record) => (
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
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
      title: 'Department',
      dataIndex: 'departmentName',
      key: 'departmentName'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text, record) => (
        <Select value={text} onChange={(value) => handleStatusChange(record.employeeId, value)}>
          <Option value="Present">Present</Option>
          <Option value="Leave">Leave</Option>
        </Select>
      )
    }
  ]

  const getAnalyticsData = () => {
    const total = data.length
    const present = data.filter((item) => item.status === 'Present').length
    const leave = data.filter((item) => item.status === 'Leave').length
    return { total, present, leave }
  }

  const { total, present, leave } = getAnalyticsData()

  const dateCellRender = (value) => {
    const formattedDate = value.format('YYYY-MM-DD')
    const dayData = data.filter((item) => item.hireDate === formattedDate)
    return (
      <ul className="events">
        {dayData.map((item) => (
          <li key={item.employeeId}>
            <Badge
              status={item.status === 'Present' ? 'success' : 'error'}
              text={item.employeeName}
            />
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className="p-6 overflow-hidden">
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card title="Total Employees" bordered={false}>
          {total}
        </Card>
        <Card title="Present" bordered={false}>
          {present}
        </Card>
        <Card title="On Leave" bordered={false} style={{ color: '#f5222d' }}>
          {leave}
        </Card>
      </div>
      <Pagination total={50} className="m-2 float-right" />
      <Table columns={columns} dataSource={data} pagination={false} rowKey="employeeId" />
      <div className="mt-6">
        <Calendar className="calendar h-96" dateCellRender={dateCellRender} />
      </div>
    </div>
  )
}

export default Attendance
