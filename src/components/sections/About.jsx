export default function About() {
  return (
    <section className="py-24 px-6 bg-page-bg dark:bg-page-bg-dark">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Me */}
          <div className="space-y-8">
            <div className="flex items-center mb-8">
              <div className="w-1 h-5 bg-gradient-to-b from-primary dark:from-primary-dark to-accent dark:to-accent-dark rounded-full mr-4 transition-all duration-300 hover:h-7"></div>
              <h2 className="text-4xl font-bold text-headings dark:text-headings-dark">
                About Me
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-body-primary dark:text-body-primary-dark leading-relaxed">
                I'm an AI-focused developer who uses Python to build intelligent, data-driven, 
                production-ready systems. I work with machine learning, deep learning, and 
                AI-powered applications.
              </p>
              
              <p className="text-lg text-body-primary dark:text-body-primary-dark leading-relaxed">
                I specialize in integrating ML models into scalable backends, designing data 
                pipelines, and optimizing inference for real-time use cases. I love turning 
                research ideas into deployable AI products.
              </p>
            </div>

            {/* Key highlights */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary dark:bg-primary-dark rounded-full"></div>
                <span className="text-body-primary dark:text-body-primary-dark">AI-focused developer from Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary dark:bg-primary-dark rounded-full"></div>
                <span className="text-body-primary dark:text-body-primary-dark">BSc. CSIT, Ambition College (2021–2025)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary dark:bg-primary-dark rounded-full"></div>
                <span className="text-body-primary dark:text-body-primary-dark">AI/ML Intern at eSewa Pvt. Ltd. (2025)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary dark:bg-primary-dark rounded-full"></div>
                <span className="text-body-primary dark:text-body-primary-dark">Turns research into real products</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <div className="flex items-center mb-8">
              <div className="w-1 h-5 bg-gradient-to-b from-primary dark:from-primary-dark to-accent dark:to-accent-dark rounded-full mr-4 transition-all duration-300 hover:h-7"></div>
              <h2 className="text-4xl font-bold text-headings dark:text-headings-dark">
                Skills
              </h2>
            </div>
            
            <div className="space-y-8">
              {/* AI & ML */}
              <div>
                <h3 className="text-xl font-semibold text-headings dark:text-headings-dark mb-4">AI & ML</h3>
                <div className="flex flex-wrap gap-2">
                  {['Scikit-Learn', 'TensorFlow', 'PyTorch', 'LangChain', 'Sentence-Transformers'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-tint dark:bg-tint-dark text-tint-text dark:text-tint-text-dark rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend & Web */}
              <div>
                <h3 className="text-xl font-semibold text-headings dark:text-headings-dark mb-4">Backend & Web</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'FastAPI', 'Django', 'Streamlit', 'JavaScript', 'REST APIs'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-tint dark:bg-tint-dark text-tint-text dark:text-tint-text-dark rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases & Tools */}
              <div>
                <h3 className="text-xl font-semibold text-headings dark:text-headings-dark mb-4">Databases & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['MySQL', 'PostgreSQL', 'Git', 'Docker', 'ChromaDB', 'Milvus'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-tint dark:bg-tint-dark text-tint-text dark:text-tint-text-dark rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h3 className="text-xl font-semibold text-headings dark:text-headings-dark mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['Problem Solving', 'Continuous Learning', 'Collaboration', 'Adaptability'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-tint dark:bg-tint-dark text-tint-text dark:text-tint-text-dark rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
