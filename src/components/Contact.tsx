export function Contact() {
  return (
    <section 
      id="contact" 
      className="py-20"
      style={{
        background: 'hsl(var(--section-contact))'
      }}
    >
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Jupyter Notebook Cell - Contact Header */}
          <div className="notebook-cell">
            <div className="notebook-cell-header">
              <div className="notebook-cell-number">24</div>
              <div className="notebook-cell-execution-time">✓ 0s</div>
            </div>
            <div className="notebook-cell-content">
              <div className="space-y-4">
                <div>
                  <span className="notebook-code-comment"># Get In Touch</span>
                </div>
                <div>
                  <span className="notebook-code-keyword">print</span>
                  <span className="notebook-code-string">("Let's connect and discuss data science opportunities")</span>
                </div>
              </div>
              <div className="notebook-output mt-4">
                Let's connect and discuss data science opportunities
              </div>
            </div>
          </div>

          {/* Contact Details as Notebook Cell */}
          <div className="notebook-cell">
            <div className="notebook-cell-header">
              <div className="notebook-cell-number">25</div>
              <div className="notebook-cell-execution-time">✓ 0s</div>
            </div>
            <div className="notebook-cell-content">
              <div className="space-y-4">
                <div>
                  <span className="notebook-code-comment"># Contact Information</span>
                </div>
                <div>
                  <span className="notebook-code-keyword">email</span> = <span className="notebook-code-string">"adityakadam@example.com"</span>
                </div>
                <div>
                  <span className="notebook-code-keyword">linkedin</span> = <span className="notebook-code-string">"https://linkedin.com/in/adityakadam"</span>
                </div>
                <div>
                  <span className="notebook-code-keyword">message</span> = <span className="notebook-code-string">"I'm always interested in new opportunities and collaborations in data science, machine learning, and analytics. Feel free to reach out!"</span>
                </div>
                <div>
                  <span className="notebook-code-keyword">print</span>(<span className="notebook-code-string">f"Contact: {email}"</span>)
                </div>
                <div>
                  <span className="notebook-code-keyword">print</span>(<span className="notebook-code-string">f"LinkedIn: {linkedin}"</span>)
                </div>
              </div>
              <div className="notebook-output mt-4">
                <div className="text-center">
                  <p className="text-xl mb-6">
                    I'm always interested in new opportunities and collaborations in data science, 
                    machine learning, and analytics. Feel free to reach out!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="mailto:adityakadam@example.com" 
                      className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors"
                    >
                      Send Email
                    </a>
                    <a 
                      href="https://linkedin.com/in/adityakadam" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
