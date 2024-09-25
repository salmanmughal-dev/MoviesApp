const Dashboard = (): JSX.Element => {
  const handleClick = (): void => {
    window.electron.store.set('foo', 'bar')
    // or
    console.log(window.electron.store.get('foo'))
  }
  return <div onClick={handleClick}>Dashboard</div>
}

export default Dashboard
