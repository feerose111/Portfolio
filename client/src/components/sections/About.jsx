export default function About() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Me */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              About Me
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm an AI-focused developer who uses Python to build intelligent, data-driven, 
                production-ready systems. I work with machine learning, deep learning, and 
                AI-powered applications.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I specialize in integrating ML models into scalable backends, designing data 
                pipelines, and optimizing inference for real-time use cases. I love turning 
                research ideas into deployable AI products.
              </p>
            </div>

            {/* Key highlights */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">AI-focused developer from Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">BSc. CSIT, Ambition College (2021–2025)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">AI/ML Intern at eSewa Pvt. Ltd. (2025)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Turns research into real products</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Skills
            </h2>
            
            <div className="space-y-8">
              {/* AI & ML */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">AI & ML</h3>
                <div className="flex flex-wrap gap-2">
                  {['Scikit-Learn', 'TensorFlow', 'PyTorch', 'LangChain', 'Sentence-Transformers'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend & Web */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Backend & Web</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'FastAPI', 'Django', 'Streamlit', 'JavaScript', 'REST APIs'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases & Tools */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Databases & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['MySQL', 'PostgreSQL', 'Git', 'Docker', 'ChromaDB', 'Milvus'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['Problem Solving', 'Continuous Learning', 'Collaboration', 'Adaptability'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-full text-sm">
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
