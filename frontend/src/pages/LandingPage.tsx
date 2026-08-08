// ===========================
// LandingPage.tsx
// ===========================
import { Link } from 'react-router-dom'
import './LandingPage.css'

const CHECKS = [
  {
    category: 'authentication',
    title: 'Broken authentication',
    desc: 'Weak or bypassable login checks that let attackers in without valid credentials.',
  },
  {
    category: 'authorization',
    title: 'IDOR / BOLA',
    desc: "Access another user's data just by changing an ID in the request — one of the most common real-world API flaws.",
  },
  {
    category: 'injection',
    title: 'SQL injection',
    desc: 'Malicious input that manipulates database queries through unsanitized fields.',
  },
  {
    category: 'abuse',
    title: 'Rate limiting gaps',
    desc: 'Missing throttles that let attackers hammer an endpoint with unlimited requests.',
  },
]

export const LandingPage = (): React.ReactElement => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__badge">
  <img src="/logo.png" alt="Logo" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginRight: '8px' }} />
  API Security Scanner
</div>

        <h1 className="landing__title" style={{ textTransform: 'uppercase' }}>
  Every API you ship has a paper trail of weaknesses.
</h1>
        <p className="landing__subtitle">
          Broken auth, exposed records, missing rate limits — most APIs leak
          something. Point ShieldAPI at an endpoint and see exactly what an
          attacker would find first.
        </p>

        <div className="landing__actions">
          <Link to="/register" className="landing__btn landing__btn--primary">
            Get started
          </Link>
          <Link to="/login" className="landing__btn landing__btn--secondary">
            Sign in
          </Link>
        </div>

        <div className="landing__checks">
          <h2 className="landing__checks-title">What gets checked</h2>
          <div className="landing__checks-grid">
            {CHECKS.map((c) => (
              <div key={c.category} className="landing__check-card">
                <span className="landing__check-category">{c.category}</span>
                <h3 className="landing__check-title">{c.title}</h3>
                <p className="landing__check-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="landing__footnote">
          Free account required · results saved to your dashboard
        </p>
      </div>
    </div>
  )
}
