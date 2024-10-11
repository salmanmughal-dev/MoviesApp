import { Card } from 'antd'
import { UserOutlined, DollarOutlined, FileTextOutlined, ProfileOutlined } from '@ant-design/icons'
import 'tailwindcss/tailwind.css'

const cardData = [
  {
    title: 'Total Employees',
    icon: <UserOutlined className="text-4xl text-blue-500" />,
    value: '11'
  },
  {
    title: 'Tax',
    icon: <DollarOutlined className="text-4xl text-green-500" />,
    value: '50,000 PKR'
  },
  {
    title: 'Total Payouts',
    icon: <FileTextOutlined className="text-4xl text-red-500" />,
    value: '500,000 PKR'
  },
  {
    title: 'Applicants',
    icon: <ProfileOutlined className="text-4xl text-purple-500" />,
    value: '150'
  }
]

const Cards = (): JSX.Element => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 p-4">
      {cardData.map((data, index) => (
        <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center">
            <div className="mr-4">{data.icon}</div>

            <div>
              <h3 className="font-semibold">{data.title}</h3>
              <p className="text-xl font-bold">{data.value}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default Cards
