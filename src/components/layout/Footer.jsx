import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card-bg dark:bg-card-bg-dark border-t border-card-border dark:border-card-border-dark py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-body-primary dark:text-body-primary-dark">
              © {currentYear} El PSY CONGROO. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-secondary dark:text-body-secondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-secondary dark:text-body-secondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-body-secondary dark:text-body-secondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
