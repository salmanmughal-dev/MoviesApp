import React from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import Sidebar from '../common/Sidebar'
import profile from '@renderer/assets/profile.png'
import {
  SettingFilled,
  QuestionCircleOutlined,
  HomeFilled,
  HistoryOutlined
} from '@ant-design/icons'

const BaseLayout: React.FC = () => {
  return (
    <Layout className="h-screen">
      <LeftSection />

      <Layout className="content-layout bg-slate-300">
        <Outlet />
      </Layout>
      <Sidebar />
    </Layout>
  )
}

const LeftSection = (): JSX.Element => {
  return (
    <div className="flex">
      <div className="sidebar bg-[#FF784D] w-64 h-screen text-white overflow-hidden">
        <div className="flex items-center justify-end gap-4 p-4">
          <SettingFilled className="text-white text-2xl" />
          <QuestionCircleOutlined className="text-white text-2xl" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={profile}
            className="profile-image w-36 h-36 rounded-full m-8 ml-14"
            alt="Profile"
          />
          <div className="profile-info font-bold flex flex-col items-center justify-center gap-2">
            <div>Salman Mughal</div>
            <div>IT Aspirant</div>
            <div>
              <HomeFilled /> Sialkot Punjab
            </div>
          </div>
        </div>
        <div className="history-section bg-white bg-opacity-20 h-1/2 mt-4">
          <div className="flex text-2xl p-6 items-center justify-between">
            <h1 className="text-white">History</h1>
            <HistoryOutlined className="text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BaseLayout
