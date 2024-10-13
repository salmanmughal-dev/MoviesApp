import React from 'react'
import { Card, Progress, Tag, Statistic, Row, Col, Typography } from 'antd'
import {
  TrophyOutlined,
  CheckCircleOutlined,
  LoadingOutlined,
  BookOutlined
} from '@ant-design/icons'
const { Title, Text } = Typography

const trainings = [
  {
    title: 'Quantum Computing Basics',
    description: 'An introduction to quantum computing concepts and algorithms.',
    category: 'Quantum Computing',
    level: 'Advanced',
    progress: 40
  },
  {
    title: 'Advanced Electron.js',
    description: 'Deep dive into Electron.js for building desktop applications.',
    category: 'Web Development',
    level: 'Advanced',
    progress: 70
  },
  {
    title: 'Machine Learning with TensorFlow',
    description: 'Advanced machine learning techniques using TensorFlow.',
    category: 'Machine Learning',
    level: 'Advanced',
    progress: 55
  },
  {
    title: 'Microservices',
    description: 'Learn how to develop highly scalable apps.',
    category: 'ASP.NET',
    level: 'Advanced',
    progress: 33
  },
  {
    title: 'Advanced Golang',
    description: 'Learn how to use Golang to write more maintainable, scalable, and bug-free code.',
    category: 'Web Development',
    level: 'Advanced',
    progress: 40
  },
  {
    title: 'Advanced Next.js',
    description:
      'Learn how to use Next.js to build high-performance, server-side rendered React applications.',
    category: 'Web Development',
    level: 'Advanced',
    progress: 10
  }

  // Add more trainings here...
]

const TrainingCard = ({ training }) => (
  <Card className="m-4 shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <Title level={3}>{training.title}</Title>
    <Text>{training.description}</Text>
    <div className="mt-2">
      <Tag color="purple">{training.category}</Tag>
      <Tag color="magenta">{training.level}</Tag>
    </div>
    <div className="mt-4">
      <Progress strokeColor={'#FF784D'} percent={training.progress} />
    </div>
  </Card>
)

const Analytics = (): JSX.Element => (
  <Row gutter={16} className="m-4">
    <Col span={8}>
      <Card className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg">
        <div>
          <TrophyOutlined className="text-4xl ml-6 mb-2 text-green-500" />
          <Statistic className="text-center" title="Total Trainings" value={trainings.length} />
        </div>
      </Card>
    </Col>
    <Col span={8}>
      <Card className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg">
        <CheckCircleOutlined className="text-4xl  ml-10 mb-2 text-blue-500" />
        <Statistic
          className="text-center"
          title="Completed Trainings"
          value={trainings.filter((t) => t.progress === 100).length}
        />
      </Card>
    </Col>
    <Col span={8}>
      <Card className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg">
        <BookOutlined className="text-4xl  ml-10 mb-2 text-primary" />
        <Statistic className="text-center" title="Ongoing Trainings" value={6} />
      </Card>
    </Col>
  </Row>
)

const TrainingList = (): JSX.Element => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {trainings.map((training, index) => (
      <TrainingCard key={index} training={training} />
    ))}
  </div>
)

/**
 * A dashboard that displays all the ongoing advanced trainings.
 *
 * It displays statistics on the total number of trainings, completed trainings and ongoing trainings.
 *
 * It also displays a list of all the trainings with their description, category, level and progress.
 *
 * @returns {React.ReactElement} The rendered React component.
 */
const TrainingDashboard = () => (
  <div className="p-8 bg-gray-100 min-h-screen">
    <div className="mb-8 text-purple-400 text-3xl font-bold mx-6">Ongoing Advanced Trainings</div>
    <Analytics />
    <TrainingList />
  </div>
)

export default TrainingDashboard
