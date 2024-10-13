import { ConfigProvider, Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import voyager from '@renderer/assets/hr.jpg'
import {
  PieChartOutlined,
  TeamOutlined,
  FileDoneOutlined,
  DotChartOutlined,
  AppstoreOutlined,
  FilePdfOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'
import React from 'react'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Dashboard', '1', <AppstoreOutlined />),
  getItem('Attendance', '2', <PieChartOutlined />),
  getItem('Documents', 'sub1', <FileDoneOutlined />),
  getItem('Analytics', 'sub2', <DotChartOutlined />),
  getItem('Training', '9', <TeamOutlined />),
  getItem('Payrolls', '10', <FilePdfOutlined />)
]

const Sidebar = (): JSX.Element => {
  const navigate = useNavigate()
  const [defaultKey, setDefaultKey] = React.useState('1')
  console.log(setDefaultKey)

  return (
    <Sider className="bg-[#FF784D] !overflow-hidden">
      <div className="text-3xl font-bold text-white text-center m-4">Voyager</div>
      <div className="demo-logo-vertical" />
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemColor: 'white',
              itemActiveBg: '#FF784D',
              itemHoverColor: 'white',
              itemSelectedBg: 'white',
              itemSelectedColor: '#FF784D'
            }
          }
        }}
      >
        <Menu
          className="bg-[#FF784D] mt-24"
          defaultSelectedKeys={[defaultKey]}
          mode="inline"
          onClick={(e) => {
            console.log(e.key)
            if (e.key === '2') navigate('/attendance')
            else if (e.key === '1') navigate('/dashboard')
            else if (e.key === '9') navigate('/training')
            else if (e.key === '10') navigate('/payrolls')
          }}
          items={items}
        />
      </ConfigProvider>
      <div
        onClick={() => navigate('/login')}
        className="text-white text-center xl:mt-52 mt-24 lg:mt-14 hover:underline cursor-pointer"
      >
        {' '}
        <LogoutOutlined /> Logout
      </div>
      <div className="hidden lg:block">
        <img src={voyager} alt="Logo" className="rounded-full w-32 h-auto m-auto mt-8" />
        <div className="text-[#FF784D] bg-white text-center m-5 rounded-lg p-3 font-bold cursor-pointer">
          Upgrade now
        </div>
      </div>
    </Sider>
  )
}

export default Sidebar
