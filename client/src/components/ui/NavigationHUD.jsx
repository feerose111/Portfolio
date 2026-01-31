const NavigationHUD = ({ currentSection }) => {
  const sections = ['Story', 'Projects', 'Connect']

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 bg-dark-800/80 backdrop-blur-md rounded-full px-6 py-3 border border-primary-500/20">
        {sections.map((section, index) => (
          <div key={section} className="flex items-center gap-2">
            <div 
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                currentSection === index 
                  ? 'bg-primary-500 scale-125' 
                  : 'bg-dark-100/40 hover:bg-primary-500/60'
              }`}
            />
            <span 
              className={`text-sm font-medium transition-all duration-500 ${
                currentSection === index 
                  ? 'text-primary-500' 
                  : 'text-dark-100/60'
              }`}
            >
              {section}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NavigationHUD
