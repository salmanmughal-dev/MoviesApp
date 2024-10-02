import Cards from './components/Cards'
import EmployeesTable from './components/EmployeesTable'

const DashboardLayout = (): JSX.Element => {
  return (
    <div className="container mx-auto p-4 overflow-hidden">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <Cards />
      <div className="hidden xl:w-1/2 xl:block m-3">
        <EmployeesTable />
      </div>
    </div>
  )
}

export default DashboardLayout
