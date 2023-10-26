import { useGlobalContext } from './context'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillSunFill style={{ color: '#f0f0f0' }} />
        ) : (
          <BsFillMoonFill />
        )}
      </button>
    </section>
  )
}

export default ThemeToggle
