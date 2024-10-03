import Cards from './components/Cards'
import BarChart from './components/Chart'
import EmployeesTable from './components/EmployeesTable'

const DashboardLayout = (): JSX.Element => {
  return (
    <>
      <div className="container mx-auto p-4 overflow-hidden">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Cards />
        <div className="flex w-full flex-col xl:flex-row xl:items-center xl:justify-between mt-4 space-y-4 xl:space-y-0 xl:space-x-4">
          <div className="w-full xl:w-1/2">
            <EmployeesTable />
          </div>
          <div className="w-full xl:w-1/2 ">
            <BarChart />
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
