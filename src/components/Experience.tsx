import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Data Scientist",
      company: "Project 990",
      location: "Bloomington, IN",
      period: "Aug 2025 – Present",
      description: [
        "Engineered an unsupervised Label2Vec embedding pipeline to cluster and semantically map 176K+ organization names, enabling scalable candidate labeling.",
        "Deployed a BERT-based label refinement model to normalize noisy organization strings and generate high-quality label suggestions."
      ],
      skills: ["Label2Vec", "BERT", "PyTorch", "NumPy", "Jupyter", "SQL"]
    },
    {
      title: "Analytics Engineer",
      company: "Indiana University School of Education",
      location: "Bloomington, IN",
      period: "Apr 2025 – Jul 2025",
      description: [
        "Analyzed 64,000+ higher-education records with pandas and SQL to reveal institutional ancestry and merger patterns.",
        "Collaborated with faculty to prototype and launch a web visualization that improved stakeholder comprehension of merger events ~15%.",
        "Optimized ingestion and query performance via partitioning and selective loading, reducing latency by ~30%.",
        "Hardened ETL reliability by implementing validation rules and cleansing routines, cutting downstream errors by ~15%."
      ],
      skills: ["Python", "Pandas", "ETL", "Data Partitioning", "Data Validation", "Render", "Dashboarding"]
    },
    {
      title: "Data Analyst",
      company: "Nice Consultancy",
      location: "Mumbai, India",
      period: "Jul 2022 – Jun 2024",
      description: [
        "Prepared and reconciled technical datasets for 1,000+ instrumentation components, increasing reporting accuracy by ~20%.",
        "Automated bid-evaluation workflows with Python and Excel macros, reducing manual processing time by ~30% and saving 40+ staff hours.",
        "Designed Tableau and Power BI dashboards to monitor procurement KPIs and accelerate decision-making.",
        "Led vendor-quality analysis and procurement recommendations that lowered data costs by ~10%."
      ],
      skills: ["Excel Macros", "Automation", "Data Cleaning", "Tableau", "Power BI", "Reporting", "Git"]
    }
  ]

  return (
    <section 
      id="experience" 
      className="py-20"
      style={{
        background: 'hsl(var(--section-experience))'
      }}
    >
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Jupyter Notebook Cell 3 - Experience Header */}
          <div className="notebook-cell">
            <div className="notebook-cell-header">
              <div className="notebook-cell-number">3</div>
              <div className="notebook-cell-execution-time">✓ 0s</div>
            </div>
            <div className="notebook-cell-content">
              <div className="space-y-4">
                <div>
                  <span className="notebook-code-comment"># Professional Experience</span>
                </div>
                <div>
                  <span className="notebook-code-keyword">print</span>
                  <span className="notebook-code-string">("Driving data-driven decisions across education, technology, and consulting sectors")</span>
                </div>
              </div>
              <div className="notebook-output mt-4">
                Driving data-driven decisions across education, technology, and consulting sectors
              </div>
            </div>
          </div>

          {/* Experience Cells */}
          {experiences.map((exp, index) => (
            <div key={index} className="notebook-cell">
              <div className="notebook-cell-header">
                <div className="notebook-cell-number">{index + 4}</div>
                <div className="notebook-cell-execution-time">✓ 0s</div>
              </div>
              <div className="notebook-cell-content">
                <div className="space-y-4">
                  <div>
                    <span className="notebook-code-comment"># {exp.title} at {exp.company}</span>
                  </div>
                  <div>
                    <span className="notebook-code-keyword">position</span> = <span className="notebook-code-string">"{exp.title}"</span>
                  </div>
                  <div>
                    <span className="notebook-code-keyword">company</span> = <span className="notebook-code-string">"{exp.company}"</span>
                  </div>
                  <div>
                    <span className="notebook-code-keyword">location</span> = <span className="notebook-code-string">"{exp.location}"</span>
                  </div>
                  <div>
                    <span className="notebook-code-keyword">period</span> = <span className="notebook-code-string">"{exp.period}"</span>
                  </div>
                  <div>
                    <span className="notebook-code-keyword">achievements</span> = [
                  </div>
                  {exp.description.map((item, idx) => (
                    <div key={idx} className="ml-4">
                      <span className="notebook-code-string">"{item}"</span>{idx < exp.description.length - 1 ? ',' : ''}
                    </div>
                  ))}
                  <div>]</div>
                  <div>
                    <span className="notebook-code-keyword">skills</span> = {JSON.stringify(exp.skills)}
                  </div>
                </div>
                <div className="notebook-output mt-4">
                  <div className="font-bold text-lg mb-2">{exp.title} at {exp.company}</div>
                  <div className="text-sm text-muted-foreground mb-4">{exp.location} • {exp.period}</div>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
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
