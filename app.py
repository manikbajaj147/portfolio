from flask import Flask, render_template, jsonify

app = Flask(__name__)

PORTFOLIO_DATA = {
    "profile": {
        "name": "Manik Bajaj",
        "title": "Software Developer",
        "email": "manikbajaj1407@gmail.com",
        "phone": "+91-8288057621",
        "linkedin": "https://linkedin.com/in/manik-bajaj-105646384",
        "github": "https://github.com/manikbajaj147"
    },
    "skills": {
        "languages": ["Python", "C", "C++"],
        "frameworks": ["HTML", "CSS", "Flask", "Git"],
        "tools": ["MySQL", "SQLite3", "GitHub"],
        "soft_skills": ["Problem-Solving", "Team Player", "Time Management", "Adaptability"]
    },
    "experience": [
        {
            "role": "Open-Source Contributor (Intern)",
            "organization": "GirlScript Summer of Code (GSSoC 2026)",
            "date": "July 2026",
            "highlights": [
                "Contributed to open-source software by solving real-world issues and submitting production-ready code.",
                "Mastered Git and GitHub version-control workflows while collaborating effectively with a global developer community."
            ]
        }
    ],
    "projects": [
        {
            "name": "AQI Visualization Tool",
            "date": "March 2026",
            "tech": ["Python", "Flask", "Chart.js", "Open-Meteo API"],
            "desc": "Built an AQI visualization web service exposing REST endpoints for current, historical, forecast, trend, map, and multi-city comparisons with stale-data fallback caching."
        },
        {
            "name": "AI Chatbot for Instant Booking",
            "date": "April 2026",
            "tech": ["Python", "NLP", "Flask"],
            "desc": "Created an AI-powered chatbot that analyzes user input to detect service type, urgency level, and location, automatically converting conversations into structured booking requests."
        },
        {
            "name": "AI-Based Email Forensics & Intelligence Platform",
            "date": "September 2026",
            "tech": ["Go", "Google Gemini API", "HTML", "CSS", "JavaScript", "REST APIs", "SPF/DKIM/DMARC", "Threat Intelligence APIs"],
            "desc": "Integrated Google Gemini API into an AI-powered email forensics system to analyze threats, extract security insights, and generate risk-based reports."
        }
    ],
    "certifications": [
        {"title": "Certification in Cybersecurity", "issuer": "Infosys Springboard", "date": "June 2026"},
        {"title": "Certification in Python", "issuer": "Infosys Springboard", "date": "March 2026"},
        {"title": "Certification in Time Management", "issuer": "Tech Vida", "date": "November 2025"}
    ],
    "education": [
        {
            "institution": "Lovely Professional University",
            "location": "Phagwara, Punjab",
            "degree": "Bachelor of Technology — Computer Science and Engineering",
            "score": "CGPA: 8.84",
            "period": "Aug 2025 – Present"
        },
        {
            "institution": "MGN Public School",
            "location": "Jalandhar, Punjab",
            "degree": "Intermediate (Class XII)",
            "score": "Percentage: 90.8%",
            "period": "Apr 2023 – Mar 2025"
        },
        {
            "institution": "MGN Public School",
            "location": "Jalandhar, Punjab",
            "degree": "Matriculation (Class X)",
            "score": "Percentage: 91.2",
            "period": "Apr 2021 – Mar 2023"
        }
    ]
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/data')
def get_data():
    return jsonify(PORTFOLIO_DATA)

if __name__ == '__main__':
    app.run(debug=True)
