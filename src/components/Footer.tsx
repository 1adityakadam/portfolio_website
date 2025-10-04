import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Aditya Kadam</h3>
            <p className="text-muted-foreground text-sm">
              Data Scientist & Software Engineer passionate about solving real-world problems 
              through data analytics and machine learning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a 
                href="#experience" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Skills
              </a>
              <a 
                href="#education" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Education
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/1adityakadam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/adityakadam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:aditya.kadam@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              Let's build something amazing together!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Aditya Kadam. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-muted-foreground text-sm">
                Built with React, TypeScript & Tailwind CSS
              </p>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
