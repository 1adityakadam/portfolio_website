export function Hero() {
  return (
    <section 
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
      style={{
        background: 'hsl(var(--section-hero))'
      }}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Jupyter Notebook Cell 1 - Title as Comment */}
        <div className="notebook-cell">
          <div className="notebook-cell-header">
            <div className="notebook-cell-number">1</div>
            <div className="notebook-cell-execution-time">✓ 0s</div>
          </div>
          <div className="notebook-cell-content">
            <div className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-8">
              <span className="notebook-code-comment"># </span>
              <span className="notebook-code-string">ADITYA KADAM</span>
              <span className="text-2xl md:text-3xl lg:text-4xl ml-4 text-muted-foreground">.ipynb</span>
            </div>
          </div>
        </div>

        {/* Jupyter Notebook Cell 2 - About Section */}
        <div className="notebook-cell">
          <div className="notebook-cell-header">
            <div className="notebook-cell-number">2</div>
            <div className="notebook-cell-execution-time">✓ 0s</div>
          </div>
          <div className="notebook-cell-content">
            <div className="space-y-4 text-lg md:text-xl leading-relaxed">
              <div>
                <span className="notebook-code-comment"># About Me</span>
              </div>
              <div>
                <span className="notebook-code-keyword">print</span>
                <span className="notebook-code-string">("I'm a Data Scientist and MS Data Science candidate at Indiana University Bloomington, with 2+ years of experience driving data-driven insights across supply chain, operations, and analytics engineering.")</span>
              </div>
              <div>
                <span className="notebook-code-keyword">print</span>
                <span className="notebook-code-string">("I've successfully completed 5+ major projects spanning machine learning, NLP, and data visualization, specializing in transforming raw data into actionable business intelligence through advanced analytics and interactive dashboards.")</span>
              </div>
            </div>
            <div className="notebook-output mt-4">
              I'm a Data Scientist and MS Data Science candidate at Indiana University Bloomington, with 2+ years of experience driving data-driven insights across supply chain, operations, and analytics engineering.
              <br/><br/>
              I've successfully completed 5+ major projects spanning machine learning, NLP, and data visualization, specializing in transforming raw data into actionable business intelligence through advanced analytics and interactive dashboards.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
