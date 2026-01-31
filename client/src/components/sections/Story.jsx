export default function Story() {
  const milestones = [
    {
      title: "Started BSc. CSIT",
      description: "Began my journey in Computer Science & Information Technology",
      period: "2021"
    },
    {
      title: "AI/ML Focus",
      description: "Specialized in artificial intelligence and machine learning technologies",
      period: "2022"
    },
    {
      title: "eSewa Internship",
      description: "Gained practical experience in fintech and software development",
      period: "2023"
    },
    {
      title: "Advanced Projects",
      description: "Built AI-powered applications and semantic search systems",
      period: "2024"
    }
  ]

  return (
    <section id="story" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          My Journey
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-indigo-600 transform md:-translate-x-0.5"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1.5 md:-translate-x-1.5 z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {milestone.period}
                      </span>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
