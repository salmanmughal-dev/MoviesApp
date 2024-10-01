import { useNavigate } from 'react-router-dom'
import voyager from '../../assets/Voyager.png'
import './animation.css'

const SplashScreen = (): JSX.Element | null => {
  const navigate = useNavigate()
  const handleClick = (): void => {
    window.electron.store.set('user', {
      username: 'salman',
      password: '123'
    })
    navigate('/login')
  }
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="starry-background">
        {[...Array(100)].map((_, i) => (
          <>
            <div key={i} className="star left-3/4"></div>

            <div key={i + 100} className="star2 left-1/4"></div>
          </>
        ))}
      </div>

      <img
        src={voyager}
        alt="Logo"
        onClick={handleClick}
        className="animate-pulse rounded-full lg:w-96 w-60 h-auto"
      />
    </div>
  )
}

export default SplashScreen
