import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import { Sun, Moon, Menu } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/story', label: 'Story' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-xl bg-page-bg/10 dark:bg-page-bg-dark/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16 w-full">
          <Link
            to="/"
            className="text-xl font-bold text-headings dark:text-primary-dark hover:text-accent dark:hover:text-accent-dark transition-colors duration-200"
          >
            Firoj Raut
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-all duration-200 relative group ${
                  location.pathname === item.path
                    ? 'text-primary dark:text-primary-dark'
                    : 'text-body-primary dark:text-body-primary-dark hover:text-accent dark:hover:text-accent-dark'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary dark:from-primary-dark to-accent dark:to-accent-dark rounded-full"></div>
                )}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="px-3 py-1.5 rounded-full bg-tint dark:bg-tint-dark border border-card-border dark:border-card-border-dark hover:scale-105 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-accent" />
              ) : (
                <Moon className="w-4 h-4 text-accent" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="px-3 py-1.5 rounded-full bg-tint dark:bg-tint-dark border border-card-border dark:border-card-border-dark hover:scale-105 transition-all duration-200"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-accent" />
              ) : (
                <Moon className="w-4 h-4 text-accent" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              <Menu className="w-6 h-6 text-body-primary dark:text-body-primary-dark" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-card-border dark:border-card-border-dark">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary dark:text-primary-dark bg-tint dark:bg-tint-dark'
                    : 'text-body-primary dark:text-body-primary-dark hover:text-headings dark:hover:text-headings-dark hover:bg-tint/50 dark:hover:bg-tint-dark/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
