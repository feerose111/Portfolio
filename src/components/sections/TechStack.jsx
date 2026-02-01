export default function TechStack() {
  const technologies = [
    { name: 'Python', logo: '/svg/Python.svg', url: 'https://python.org', color: 'primary' },
    { name: 'JavaScript', logo: '/svg/JavaScript.svg', url: 'https://javascript.info', color: 'accent' },
    { name: 'FastAPI', logo: '/svg/FastAPI.svg', url: 'https://fastapi.tiangolo.com', color: 'light' },
    { name: 'Django', logo: '/svg/Django.svg', url: 'https://djangoproject.com', color: 'primary' },
    { name: 'TensorFlow', logo: '/svg/TensorFlow.svg', url: 'https://tensorflow.org', color: 'accent' },
    { name: 'PyTorch', logo: '/svg/PyTorch.svg', url: 'https://pytorch.org', color: 'light' },
    { name: 'Scikit-learn', logo: '/svg/scikit-learn.svg', url: 'https://scikit-learn.org', color: 'primary' },
    { name: 'LangChain', logo: '/svg/Langchain.svg', url: 'https://langchain.com', color: 'accent' },
    { name: 'Docker', logo: '/svg/Docker.svg', url: 'https://docker.com', color: 'light' },
    { name: 'MySQL', logo: '/svg/MySQL.svg', url: 'https://mysql.com', color: 'primary' },
    { name: 'PostgreSQL', logo: '/svg/PostgresSQL.svg', url: 'https://postgresql.org', color: 'accent' },
    { name: 'Git', logo: '/svg/Git.svg', url: 'https://git-scm.com', color: 'light' }
  ]

  const duplicatedTechs = [...technologies, ...technologies]

  const handleTechClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="py-16 px-6 bg-skills-band dark:bg-skills-band-dark">
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex items-center justify-center mb-4">
          <div className="w-1 h-5 bg-gradient-to-b from-primary dark:from-primary-dark to-accent dark:to-accent-dark rounded-full mr-4 transition-all duration-300 hover:h-7"></div>
          <h2 className="text-3xl font-bold text-headings dark:text-headings-dark text-center">
            Technologies I Work With
          </h2>
        </div>
        <p className="text-subtitle dark:text-subtitle-dark text-center">
          Building intelligent systems with modern tools
        </p>
      </div>

      {/* Scrolling Tech Carousel */}
      <div className="relative overflow-hidden py-8">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-skills-band dark:from-skills-band-dark to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-skills-band dark:from-skills-band-dark to-transparent z-10"></div>
        
        {/* Scrolling container */}
        <div className="flex space-x-8 animate-scroll">
          {duplicatedTechs.map((tech, index) => (
            <div
              key={index}
              onClick={() => handleTechClick(tech.url)}
              className={`flex-shrink-0 p-4 bg-tint dark:bg-tint-dark rounded-2xl hover:bg-accent dark:hover:bg-accent-dark hover:scale-110 hover:-translate-y-3 hover:-rotate-2 transition-all duration-200 cursor-pointer group`}
            >
              <img 
                src={tech.logo} 
                alt={tech.name}
                className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                <span className="text-2xl">⚡</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
