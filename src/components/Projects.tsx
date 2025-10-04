import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, BarChart3, Database, TrendingUp, Users, Calendar, Search, Target, Trophy, Activity, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  
  const projects = [
    {
      title: "Ancestry Grid for Carnegie Classification of Institutions of Higher Education",
      description: "A concise, interactive tool for exploring the historical lineage of U.S. higher education institutions using Carnegie Classification data from 1973–2021.",
      longDescription: "This comprehensive data visualization tool provides deep insights into the evolution of higher education institutions across five decades, with efficient data partitioning and incremental rendering.",
      features: [
        {
          icon: <Search className="w-4 h-4" />,
          title: "Dropdown Selection",
          description: "Choose institutions from an alphabetical, searchable dropdown"
        },
        {
          icon: <Calendar className="w-4 h-4" />,
          title: "Historical Names",
          description: "View current, past, and future names for each institution"
        },
        {
          icon: <TrendingUp className="w-4 h-4" />,
          title: "Timeline Visualization",
          description: "See institutional changes, mergers, absorptions, and degree status by year"
        },
        {
          icon: <Database className="w-4 h-4" />,
          title: "Efficient Loading",
          description: "Data partitioned into 10 institute name chunks (~60,000 rows) for fast, responsive UI"
        }
      ],
      dataStructure: [
        "Institution names (current and historical)",
        "Carnegie classification by year",
        "Merger/absorption events and years",
        "Successor/predecessor links",
        "Degree-granting status"
      ],
      classifications: [
        "Doctoral Universities (R1, R2, R3)",
        "Master's Colleges & Universities",
        "Baccalaureate Colleges",
        "Associate's Colleges",
        "Special Focus Institutions",
        "Tribal Colleges"
      ],
      technologies: ["Python", "Pandas", "Interactive Dashboards", "Data Visualization", "Carnegie Classification"],
      github: "https://github.com/1adityakadam",
      image: "/lovable-uploads/b7cc5e19-b229-483c-8f53-e52201f72fbb.png"
    },
    {
      title: "USDA Food Distribution Program Analysis",
      description: "Comprehensive analysis of USDA Food and Nutrition Service's food distribution programs, focusing on State of Origin data for USDA Foods products from FY11 to FY23.",
      longDescription: "This project provides insights into purchasing trends and highlights where products were processed and packaged, supporting local agricultural markets with strategic procurement optimization.",
      features: [
        {
          icon: <TrendingUp className="w-4 h-4" />,
          title: "Trend Analysis",
          description: "Identify top-selling USDA Foods and understand slow-moving goods over time"
        },
        {
          icon: <Database className="w-4 h-4" />,
          title: "Multi-dimensional Filtering",
          description: "Filter by year (FY11–FY23), region, and congregation size for detailed insights"
        },
        {
          icon: <BarChart3 className="w-4 h-4" />,
          title: "State-level Analytics",
          description: "Detailed state information including purchase volumes, values, and product variety"
        },
        {
          icon: <Users className="w-4 h-4" />,
          title: "Strategic Planning",
          description: "Support local agriculture markets and optimize procurement strategies"
        }
      ],
      filters: [
        "Year (FY11–FY23)",
        "Region (Central, East, West)",
        "Number of Congregations (0k–1k, 1k–3k, 3k–6k, 6k+)"
      ],
      insights: [
        "Top Seller: Most purchased product in pounds",
        "High Demand Goods: Products with consistently high purchase volume",
        "Slow Mover Goods: Products with low purchase frequency",
        "Percentage of Purchased Quantity and Value by state",
        "Total Variety of Goods Purchased per state"
      ],
      technologies: ["Python", "Tableau", "Pandas", "Data Visualization", "USDA APIs"],
      period: "FY11 - FY23",
      github: "https://github.com/1adityakadam",
      image: "/lovable-uploads/c5629d05-81cb-416b-b75d-50008bfac0b1.png"
    },
    {
      title: "Uber Data Analytics End-to-End Project",
      description: "Comprehensive data analytics project using TLC Trip Record Data from November 2024, implementing end-to-end pipeline with Google BigQuery and Looker Studio.",
      longDescription: "Real-time data pipeline and visualization system for NYC Yellow Taxi trip analysis, featuring structured fact and dimension tables with cloud-based processing and interactive dashboards.",
      features: [
        {
          icon: <Database className="w-4 h-4" />,
          title: "Data Modeling",
          description: "Transformed raw parquet data into structured fact and dimension tables"
        },
        {
          icon: <TrendingUp className="w-4 h-4" />,
          title: "Cloud Pipeline",
          description: "Implemented Mage-AI for ETL with Google Cloud Storage and BigQuery integration"
        },
        {
          icon: <BarChart3 className="w-4 h-4" />,
          title: "Interactive Dashboard",
          description: "Real-time visualization in Google Looker Studio with comprehensive trip analytics"
        },
        {
          icon: <Users className="w-4 h-4" />,
          title: "Performance Optimization",
          description: "Efficient querying and data partitioning for fast response times"
        }
      ],
      dataSource: [
        "TLC Trip Record Data (November 2024)",
        "NYC Taxi and Limousine Commission",
        "Yellow Taxi Trip Records via TPEP/LPEP programs"
      ],
      technologies: ["Python", "Mage-AI", "Google BigQuery", "Google Looker Studio", "Google Cloud Storage", "Pandas", "NumPy"],
      period: "Nov 2024",
      github: "https://github.com/1adityakadam",
      image: "/lovable-uploads/ef29be68-9fb4-4c32-aa90-34cad5f4e864.png"
    },
    {
      title: "IndyGo On-Time Performance Analysis",
      description: "Comprehensive Power BI dashboard analyzing IndyGo's on-time performance by measuring the percentage of trips operating within scheduled time thresholds.",
      longDescription: "Service reliability analysis dashboard providing insights into OTP trends across timeframes, route categories, and individual routes, serving transit system optimization goals.",
      features: [
        {
          icon: <BarChart3 className="w-4 h-4" />,
          title: "Performance Metrics",
          description: "Overall monthly on-time performance by day of service (Weekday, Saturday, Sunday)"
        },
        {
          icon: <TrendingUp className="w-4 h-4" />,
          title: "Route Analysis",
          description: "OTP variation across route categories, service frequency, and rapid transit"
        },
        {
          icon: <Calendar className="w-4 h-4" />,
          title: "Temporal Insights",
          description: "OTP trends over 12 months with peak vs non-peak hour comparisons"
        },
        {
          icon: <Database className="w-4 h-4" />,
          title: "Real-time Data",
          description: "GPS trackers and Automatic Passenger Counters (APCs) integration"
        }
      ],
      businessQuestions: [
        "Monthly on-time performance by day of service",
        "OTP variation across route categories and service frequency",
        "OTP trends for specific routes over 12 months",
        "OTP changes across different time frames",
        "Peak vs non-peak hour performance differences"
      ],
      technologies: ["Power BI", "Python", "GPS Data Integration", "APC Systems", "Data Analytics"],
      period: "12-month analysis",
      github: "https://github.com/1adityakadam",
      image: "/lovable-uploads/8fdc002a-18d3-4999-81b4-79369449b3b5.png"
    },
    {
      title: "Sports Analytics: Cricket Data Insights",
      description: "Comprehensive analysis of T20 Cricket World Cup 2022 focused on strategic team selection and player performance evaluation for England's championship victory against Pakistan.",
      longDescription: "This analysis aimed to build a balanced squad capable of scoring 180 runs regularly while defending targets of 150 runs, integrating practical strategy with data-driven evaluation through interactive Power BI dashboards.",
      features: [
        {
          icon: <Target className="w-4 h-4" />,
          title: "Strategic Team Selection",
          description: "Build balanced squad for scoring 180+ runs and defending 150+ targets"
        },
        {
          icon: <Database className="w-4 h-4" />,
          title: "Web Scraping Pipeline",
          description: "Data collection from ESPNcricinfo using BrightData, converted to structured JSON format"
        },
        {
          icon: <BarChart3 className="w-4 h-4" />,
          title: "Interactive Dashboard",
          description: "Power BI visualizations with hover-enabled player metrics and detailed insights"
        },
        {
          icon: <Users className="w-4 h-4" />,
          title: "Player Role Classification",
          description: "Defined positions using metrics like average, strike rate, and boundary-scoring ability"
        },
        {
          icon: <Activity className="w-4 h-4" />,
          title: "Performance Analytics",
          description: "Comprehensive batting and bowling statistics with match history analysis"
        },
        {
          icon: <Trophy className="w-4 h-4" />,
          title: "Final XI Selection",
          description: "Complete team selection summary with batting and bowling achievements"
        }
      ],
      dataSource: [
        "ESPNcricinfo T20 World Cup 2022 match data",
        "Player statistics and match histories",
        "Team performance metrics and outcomes"
      ],
      playerRoles: [
        "Openers: Focus on strike rate and boundary percentage",
        "Power Hitters: Emphasis on six-hitting ability and acceleration",
        "Middle Order: Consistency metrics and pressure situation performance",
        "Finishers: Death overs performance and match-winning capability",
        "All Rounders: Balanced batting and bowling contributions",
        "Fast Bowlers: Wicket-taking ability and economy rate analysis"
      ],
      dashboardFeatures: [
        "Interactive player row hover for detailed metrics",
        "Historical performance analysis by position",
        "Match outcome correlation with player selection",
        "Team composition optimization tools",
        "Player comparison and ranking systems"
      ],
      technologies: ["Power BI", "Python", "Pandas", "BrightData", "Web Scraping", "JSON Processing", "Power Query", "DAX"],
      period: "T20 World Cup 2022",
      github: "https://github.com/1adityakadam",
      image: "/lovable-uploads/c0b3cfa2-690d-4800-ac8a-0162be93af29.png"
    },
    {
      title: "Air Pollution Forecasting using LSTM",
      description: "An LSTM neural network model to predict PM2.5 pollution levels in the next hour using weather conditions and current pollution levels.",
      longDescription: "Time series forecasting project using univariate and multivariate LSTM models trained on 5 years of air quality data from Beijing, China.",
      features: [
        {
          icon: <TrendingUp className="w-4 h-4" />,
          title: "Time Series Prediction",
          description: "Forecast pollution levels using historical weather and PM2.5 data"
        },
        {
          icon: <Database className="w-4 h-4" />,
          title: "Multi-variate Analysis",
          description: "Consider temperature, pressure, wind speed, dew point, and precipitation"
        },
        {
          icon: <BarChart3 className="w-4 h-4" />,
          title: "Model Evaluation",
          description: "RMSE and MAPE metrics with actual vs predicted visualization"
        },
        {
          icon: <Activity className="w-4 h-4" />,
          title: "3-Layer LSTM",
          description: "50-neuron architecture with 20% dropout regularization"
        }
      ],
      technologies: ["Python", "LSTM", "TensorFlow", "Keras", "Pandas", "Time Series Analysis"],
      period: "5-year dataset",
      github: "https://github.com/jyoti0225/Air-Pollution-Forecasting",
      image: "/lovable-uploads/air-pollution.png"
    },
    {
      title: "Content-Based Movie Recommender System",
      description: "End-to-end movie recommendation system using content-based filtering with NLP techniques and live poster fetching via TMDb API.",
      longDescription: "Streamlit web app that recommends similar movies based on genres, keywords, cast, director, and overview using cosine similarity.",
      features: [
        {
          icon: <Search className="w-4 h-4" />,
          title: "Content-Based Filtering",
          description: "No user history required - pure content similarity matching"
        },
        {
          icon: <Database className="w-4 h-4" />,
          title: "NLP Pipeline",
          description: "Parse JSON, clean text, apply stemming, and vectorize with CountVectorizer"
        },
        {
          icon: <Activity className="w-4 h-4" />,
          title: "Live Posters",
          description: "Fetch movie posters in real-time via TMDb API"
        },
        {
          icon: <BarChart3 className="w-4 h-4" />,
          title: "Cosine Similarity",
          description: "Top-N recommendations using 5000 feature vectors"
        }
      ],
      technologies: ["Python", "Streamlit", "NLP", "scikit-learn", "NLTK", "TMDb API", "Heroku"],
      github: "https://github.com/1adityakadam/Content-Based-Movie-Recommender-System",
      image: "/lovable-uploads/movie-recommender.png"
    },
    {
      title: "Multi-Model Car Acceptability Classification",
      description: "Car acceptability classification using multiple machine learning models including Multinomial Linear Regression, SVM, Random Forest, and Ensemble methods.",
      longDescription: "Comparative analysis of classification algorithms on car evaluation dataset with comprehensive model performance metrics.",
      features: [
        {
          icon: <BarChart3 className="w-4 h-4" />,
          title: "Multiple Models",
          description: "Compare Linear Regression, SVM, Random Forest, and Ensemble techniques"
        },
        {
          icon: <Target className="w-4 h-4" />,
          title: "Classification Task",
          description: "Predict car acceptability based on multiple attributes"
        },
        {
          icon: <Activity className="w-4 h-4" />,
          title: "Model Evaluation",
          description: "Comprehensive accuracy and performance metrics comparison"
        },
        {
          icon: <Database className="w-4 h-4" />,
          title: "Feature Engineering",
          description: "Process and transform car attributes for optimal prediction"
        }
      ],
      technologies: ["Python", "scikit-learn", "Random Forest", "SVM", "Ensemble Methods", "Pandas"],
      github: "https://github.com/1adityakadam/Multi-Model-Car-Acceptability-Classification",
      image: "/lovable-uploads/car-classification.png"
    },
    {
      title: "Netflix Data Analysis with DBT & Snowflake",
      description: "End-to-end ELT pipeline using Amazon S3, Snowflake, and dbt for MovieLens dataset analytics with BI dashboard integration.",
      longDescription: "Modern data stack implementation with layered architecture covering raw, staging, and serving layers for analytics-ready data models.",
      features: [
        {
          icon: <Database className="w-4 h-4" />,
          title: "ELT Pipeline",
          description: "Extract from S3, load into Snowflake, transform with dbt"
        },
        {
          icon: <TrendingUp className="w-4 h-4" />,
          title: "Layered Architecture",
          description: "Raw, staging, and serving layers with data quality tests"
        },
        {
          icon: <BarChart3 className="w-4 h-4" />,
          title: "Analytics Ready",
          description: "Connect to Looker Studio, Power BI, and Tableau"
        },
        {
          icon: <Activity className="w-4 h-4" />,
          title: "Data Modeling",
          description: "dbt models, snapshots, seeds, macros, and orchestration"
        }
      ],
      technologies: ["dbt", "Snowflake", "Amazon S3", "SQL", "Looker Studio", "Power BI", "Tableau"],
      github: "https://github.com/1adityakadam/Netflix_data_analysis",
      image: "/lovable-uploads/netflix-analysis.png"
    },
    {
      title: "Air Quality Index Prediction using LSTM",
      description: "Univariate LSTM model for predicting PM2.5 levels as AQI proxy using 4 years of hourly air quality data from China.",
      longDescription: "Time series forecasting with exploratory data analysis, visualization, and LSTM neural network for pollution trend prediction.",
      features: [
        {
          icon: <TrendingUp className="w-4 h-4" />,
          title: "Univariate LSTM",
          description: "Predict PM2.5 concentration using historical hourly values"
        },
        {
          icon: <BarChart3 className="w-4 h-4" />,
          title: "EDA & Visualization",
          description: "Comprehensive exploratory analysis of pollutant trends"
        },
        {
          icon: <Database className="w-4 h-4" />,
          title: "4-Year Dataset",
          description: "January 2013 to February 2017 hourly measurements"
        },
        {
          icon: <Activity className="w-4 h-4" />,
          title: "Model Evaluation",
          description: "Mean Squared Error metrics with test predictions"
        }
      ],
      technologies: ["Python", "LSTM", "TensorFlow", "Keras", "Pandas", "Matplotlib", "Seaborn"],
      period: "2013-2017",
      github: "https://github.com/1adityakadam/Predicting-Air-quality-index-using-LSTM",
      image: "/lovable-uploads/air-quality.png"
    },
    {
      title: "Twitter Sentiment Analysis with NLP",
      description: "NLP pipeline for classifying tweet sentiment as toxic or non-toxic using text cleaning, feature engineering, and supervised learning models.",
      longDescription: "Hate speech detection system with comprehensive preprocessing, exploratory analysis, and multiple classification algorithms evaluated on F1-score.",
      features: [
        {
          icon: <Search className="w-4 h-4" />,
          title: "NLP Pipeline",
          description: "Lowercasing, tokenization, stopword removal, and Porter stemming"
        },
        {
          icon: <BarChart3 className="w-4 h-4" />,
          title: "Feature Engineering",
          description: "Bag-of-Words with 2500 features and optional Word2Vec"
        },
        {
          icon: <Target className="w-4 h-4" />,
          title: "Multiple Models",
          description: "RandomForest, LogisticRegression, SVM, DecisionTree, XGBoost"
        },
        {
          icon: <Activity className="w-4 h-4" />,
          title: "Text Analysis",
          description: "Word clouds, frequency analysis, and hashtag extraction"
        }
      ],
      technologies: ["Python", "NLTK", "scikit-learn", "XGBoost", "Word2Vec", "CountVectorizer"],
      github: "https://github.com/1adityakadam/Tweet-Classification-using-NLP-Techniques",
      image: "/lovable-uploads/twitter-sentiment.png"
    }
  ]

  return (
    <section 
      id="projects" 
      className="py-20"
      style={{
        background: 'hsl(var(--section-projects))'
      }}
    >
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Jupyter Notebook Cell - Projects Header */}
          <div className="notebook-cell">
            <div className="notebook-cell-header">
              <div className="notebook-cell-number">7</div>
              <div className="notebook-cell-execution-time">✓ 0s</div>
            </div>
            <div className="notebook-cell-content">
              <div className="space-y-4">
                <div>
                  <span className="notebook-code-comment"># Featured Projects</span>
                </div>
                <div>
                  <span className="notebook-code-keyword">print</span>
                  <span className="notebook-code-string">("Showcasing data science projects that solve real-world problems through analytics and visualization")</span>
                </div>
              </div>
              <div className="notebook-output mt-4">
                Showcasing data science projects that solve real-world problems through analytics and visualization
              </div>
            </div>
          </div>

          {/* Project Cells - Show first 6 projects as notebook cells */}
          {projects.slice(0, 6).map((project, index) => (
            <div key={index} className="notebook-cell">
              <div className="notebook-cell-header">
                <div className="notebook-cell-number">{index + 8}</div>
                <div className="notebook-cell-execution-time">✓ 0s</div>
              </div>
              <div className="notebook-cell-content">
                <div className="space-y-4">
                  <div>
                    <span className="notebook-code-comment"># {project.title}</span>
                  </div>
                  <div>
                    <span className="notebook-code-keyword">project_name</span> = <span className="notebook-code-string">"{project.title}"</span>
                  </div>
                  <div>
                    <span className="notebook-code-keyword">description</span> = <span className="notebook-code-string">"{project.description}"</span>
                  </div>
                  <div>
                    <span className="notebook-code-keyword">technologies</span> = {JSON.stringify(project.technologies.slice(0, 6))}
                  </div>
                  {project.period && (
                    <div>
                      <span className="notebook-code-keyword">period</span> = <span className="notebook-code-string">"{project.period}"</span>
                    </div>
                  )}
                  <div>
                    <span className="notebook-code-keyword">github_url</span> = <span className="notebook-code-string">"{project.github}"</span>
                  </div>
                </div>
                <div className="notebook-output mt-4">
                  <div className="font-bold text-lg mb-2">{project.title}</div>
                  <div className="text-sm text-muted-foreground mb-4">{project.period || ''}</div>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 6).map((tech, idx) => (
                      <span key={idx} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Show more projects button */}
          <div className="notebook-cell">
            <div className="notebook-cell-header">
              <div className="notebook-cell-number">14</div>
              <div className="notebook-cell-execution-time">✓ 0s</div>
            </div>
            <div className="notebook-cell-content">
              <div className="space-y-4">
                <div>
                  <span className="notebook-code-comment"># View All Projects</span>
                </div>
                <div>
                  <span className="notebook-code-keyword">total_projects</span> = <span className="notebook-code-function">len</span>(<span className="notebook-code-string">"projects"</span>)
                </div>
                <div>
                  <span className="notebook-code-keyword">print</span>(<span className="notebook-code-string">f"Total projects: {projects.length}"</span>)
                </div>
              </div>
              <div className="notebook-output mt-4">
                <div className="text-center">
                  <p className="mb-4">Total projects: {projects.length}</p>
                  <Button 
                    onClick={() => setShowAll(!showAll)}
                    variant="outline"
                    className="gap-2"
                  >
                    {showAll ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        Hide All Projects
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        View All Projects
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Expanded Static Grid for all projects */}
          {showAll && (
            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <Card key={`static-${index}`} className="group glass hover:bg-accent/10 transition-all duration-300 hover:scale-[1.02] overflow-hidden flex flex-col h-full">
                    {project.image && (
                      <div className="aspect-video overflow-hidden bg-muted">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          {project.period && (
                            <p className="text-sm text-muted-foreground mt-1">{project.period}</p>
                          )}
                        </div>
                        {project.github && (
                          <Button variant="ghost" size="sm" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                      <CardDescription className="text-sm line-clamp-3">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 5).map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
      </div>
    </section>
  )
}