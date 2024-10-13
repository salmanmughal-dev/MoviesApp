import { Card, Descriptions, Table } from 'antd'

const employee = {
  employeeId: 'E12345',
  name: 'John Doe',
  position: 'Software Engineer',
  department: 'Development',
  hireDate: '2020-01-15'
}

const PayrollDocument = (): JSX.Element => {
  const columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: string) => (
        <span
          className={`font-bold ${amount.startsWith('-') ? 'text-primary' : 'text-purple-500'}`}
        >
          {amount}
        </span>
      )
    }
  ]

  const data = [
    {
      key: '1',
      description: 'Basic Salary',
      amount: '$3000'
    },
    {
      key: '2',
      description: 'House Rent Allowance',
      amount: '$1000'
    },
    {
      key: '3',
      description: 'Medical Allowance',
      amount: '$300'
    },
    {
      key: '4',
      description: 'Travel Allowance',
      amount: '$200'
    },
    {
      key: '5',
      description: 'Other Allowances',
      amount: '$100'
    },
    {
      key: '6',
      description: 'Total Deductions',
      amount: '-$500'
    },
    {
      key: '7',
      description: 'Net Salary',
      amount: '$4100'
    }
  ]

  return (
    <Card className="max-w-4xl mx-auto my-8 p-6 shadow-xl rounded-lg border border-gray-200">
      <h2 className="text-3xl font-semibold text-center mb-4 text-primary">Payroll Document</h2>
      <Descriptions
        title={<span className="text-lg font-bold text-primary">Employee Details</span>}
        bordered
        column={1}
        className="mb-6"
      >
        <Descriptions.Item label="Employee ID" className="bg-gray-100">
          {employee.employeeId}
        </Descriptions.Item>
        <Descriptions.Item label="Name" className="bg-gray-50">
          {employee.name}
        </Descriptions.Item>
        <Descriptions.Item label="Position" className="bg-gray-100">
          {employee.position}
        </Descriptions.Item>
        <Descriptions.Item label="Department" className="bg-gray-50">
          {employee.department}
        </Descriptions.Item>
        <Descriptions.Item label="Hire Date" className="bg-gray-100">
          {employee.hireDate}
        </Descriptions.Item>
      </Descriptions>
      <div className="mt-8">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          summary={() => (
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} className="font-bold text-lg text-purple-500">
                Net Salary
              </Table.Summary.Cell>
              <Table.Summary.Cell index={1} className="font-bold text-lg text-purple-500">
                $4100
              </Table.Summary.Cell>
            </Table.Summary.Row>
          )}
          className="shadow-lg rounded-lg"
        />
      </div>
    </Card>
  )
}

export default PayrollDocument
