import { Mail, MapPin, Github, Linkedin, Download } from 'lucide-react'
import Footer from '../components/layout/Footer'
import NeuralGrid from '../components/ui/NeuralGrid'

export default function Contact() {
  return (
    <div className="pt-16 min-h-screen bg-page-bg dark:bg-page-bg-dark">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center py-20 px-4 overflow-hidden bg-page-bg dark:bg-page-bg-dark">
        {/* Neural Grid Background */}
        <NeuralGrid />
        
        {/* Clean gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-page-bg/80 via-card-bg/60 to-tint/80 dark:from-page-bg-dark/80 dark:via-card-bg-dark/60 dark:to-tint-dark/80" style={{ zIndex: 2 }}></div>
        
        {/* Subtle floating elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto text-center z-10" style={{ zIndex: 10 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-headings dark:text-headings-dark mb-6 leading-tight tracking-tight">
            Let's <span className="bg-gradient-to-r from-primary dark:from-primary-dark to-accent dark:to-accent-dark bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-xl text-subtitle dark:text-subtitle-dark max-w-2xl mx-auto leading-relaxed">
            Always interested in discussing new opportunities, innovative projects, or connecting with fellow creators
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* CTA Buttons */}
          <div className="text-center mb-16">
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a
                href="mailto:firojraut094@gmail.com"
                className="bg-gradient-to-r from-primary dark:from-primary-dark to-accent dark:to-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-accent dark:hover:from-accent-dark hover:to-light dark:hover:to-light-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
              <a
                href="/resume.pdf"
                download
                className="bg-card-bg dark:bg-card-bg-dark text-headings dark:text-headings-dark px-8 py-4 rounded-lg font-semibold text-lg border-2 border-primary dark:border-primary-dark hover:border-accent dark:hover:border-accent-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Email</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>
              <a
                href="mailto:firoj.raut@example.com"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                firoj.raut@example.com
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Location</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Based in Nepal, available for remote work worldwide.
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Sanothimi, Bhaktapur, Nepal
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Connect with me
            </h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/firoj-raut"
                className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
                aria-label="GitHub"
              >
                <Github className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" />
              </a>
              
              <a
                href="https://linkedin.com/in/firoj-raut"
                className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-300 hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
              </a>
              
              <a
                href="mailto:firoj.raut@example.com"
                className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all duration-300 hover:scale-110 group"
                aria-label="Email"
              >
                <Mail className="w-8 h-8 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
