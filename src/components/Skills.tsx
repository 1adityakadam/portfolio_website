import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "R", "SQL", "JavaScript", "Java", "C++"]
    },
    {
      category: "Data Science & ML",
      skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "XGBoost", "LSTM", "NLP"]
    },
    {
      category: "Data Visualization",
      skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly", "D3.js", "Looker Studio"]
    },
    {
      category: "Cloud & Big Data",
      skills: ["AWS", "Google Cloud", "Snowflake", "BigQuery", "dbt", "Mage-AI", "Docker"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Jupyter", "VS Code", "Excel", "Power Query", "DAX", "Streamlit"]
    }
  ]

  return (
    <section 
      id="skills" 
      className="py-20"
      style={{
        background: 'hsl(var(--section-skills))'
      }}
    >
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Jupyter Notebook Cell - Skills Header */}
          <div className="notebook-cell">
            <div className="notebook-cell-header">
              <div className="notebook-cell-number">15</div>
              <div className="notebook-cell-execution-time">✓ 0s</div>
            </div>
            <div className="notebook-cell-content">
              <div className="space-y-4">
                <div>
                  <span className="notebook-code-comment"># Technical Skills</span>
                </div>
                <div>
                  <span className="notebook-code-keyword">print</span>
                  <span className="notebook-code-string">("Comprehensive toolkit for data science and analytics")</span>
                </div>
              </div>
              <div className="notebook-output mt-4">
                Comprehensive toolkit for data science and analytics
              </div>
            </div>
          </div>

          {/* Skills Categories as Notebook Cells */}
          {skillCategories.map((category, index) => (
            <div key={index} className="notebook-cell">
              <div className="notebook-cell-header">
                <div className="notebook-cell-number">{index + 16}</div>
                <div className="notebook-cell-execution-time">✓ 0s</div>
              </div>
              <div className="notebook-cell-content">
                <div className="space-y-4">
                  <div>
                    <span className="notebook-code-comment"># {category.category}</span>
                  </div>
                  <div>
                    <span className="notebook-code-keyword">skills</span> = {JSON.stringify(category.skills)}
                  </div>
                  <div>
                    <span className="notebook-code-keyword">print</span>(<span className="notebook-code-string">f"{category.category}: {category.skills.length} skills"</span>)
                  </div>
                </div>
                <div className="notebook-output mt-4">
                  <div className="font-bold text-lg mb-4">{category.category}</div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span key={idx} className="bg-secondary text-secondary-foreground px-3 py-1 rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
