import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">AK</span>
            </div>
            <span className="font-bold text-xl">Aditya Kadam</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
