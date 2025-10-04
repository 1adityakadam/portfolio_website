export function Education() {
  return (
    <section 
      id="education" 
      className="py-20"
      style={{
        background: 'hsl(var(--section-education))'
      }}
    >
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Jupyter Notebook Cell - Education Header */}
          <div className="notebook-cell">
            <div className="notebook-cell-header">
              <div className="notebook-cell-number">22</div>
              <div className="notebook-cell-execution-time">✓ 0s</div>
            </div>
            <div className="notebook-cell-content">
              <div className="space-y-4">
                <div>
                  <span className="notebook-code-comment"># Education</span>
                </div>
                <div>
                  <span className="notebook-code-keyword">print</span>
                  <span className="notebook-code-string">("Academic journey in data science and analytics")</span>
                </div>
              </div>
              <div className="notebook-output mt-4">
                Academic journey in data science and analytics
              </div>
            </div>
          </div>

          {/* Education Details as Notebook Cell */}
          <div className="notebook-cell">
            <div className="notebook-cell-header">
              <div className="notebook-cell-number">23</div>
              <div className="notebook-cell-execution-time">✓ 0s</div>
            </div>
            <div className="notebook-cell-content">
              <div className="space-y-4">
                <div>
                  <span className="notebook-code-comment"># Master of Science in Data Science</span>
                </div>
                <div>
                  <span className="notebook-code-keyword">degree</span> = <span className="notebook-code-string">"Master of Science in Data Science"</span>
                </div>
                <div>
                  <span className="notebook-code-keyword">university</span> = <span className="notebook-code-string">"Indiana University Bloomington"</span>
                </div>
                <div>
                  <span className="notebook-code-keyword">duration</span> = <span className="notebook-code-string">"2024 - 2026 (Expected)"</span>
                </div>
                <div>
                  <span className="notebook-code-keyword">focus_areas</span> = [
                </div>
                <div className="ml-4">
                  <span className="notebook-code-string">"Machine Learning"</span>,
                </div>
                <div className="ml-4">
                  <span className="notebook-code-string">"Statistical Analysis"</span>,
                </div>
                <div className="ml-4">
                  <span className="notebook-code-string">"Data Visualization"</span>,
                </div>
                <div className="ml-4">
                  <span className="notebook-code-string">"Big Data Technologies"</span>
                </div>
                <div>]</div>
                <div>
                  <span className="notebook-code-keyword">print</span>(<span className="notebook-code-string">f"Degree: {degree} at {university}"</span>)
                </div>
              </div>
              <div className="notebook-output mt-4">
                <div className="font-bold text-2xl mb-2">Master of Science in Data Science</div>
                <div className="text-xl text-primary font-semibold mb-2">Indiana University Bloomington</div>
                <div className="text-muted-foreground mb-4">2024 - 2026 (Expected)</div>
                <p className="leading-relaxed">
                  Specialized coursework in machine learning, statistical analysis, data visualization, 
                  and big data technologies. Focus on applied data science methodologies and real-world 
                  project implementation.
                </p>
                <div className="mt-4">
                  <div className="font-semibold mb-2">Focus Areas:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded text-sm">Machine Learning</span>
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded text-sm">Statistical Analysis</span>
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded text-sm">Data Visualization</span>
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded text-sm">Big Data Technologies</span>
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
