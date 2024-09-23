function App(): JSX.Element {
  const handleSubmit = (event): void => {
    event.preventDefault()
    const name = event.target.name.value
    const email = event.target.email.value
    const user = { name, email }
    window.electron.ipcRenderer.send('insert-user', user)
    window.electron.ipcRenderer.send('quit-app')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default App
