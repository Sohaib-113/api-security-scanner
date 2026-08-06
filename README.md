# API Security Scanner

A full-stack tool that scans REST APIs against the OWASP API Security Top 10 vulnerability categories, with a live scan dashboard and detailed per-endpoint reports.

**Live demo:** [api-security-scanner-jkjc.vercel.app](https://api-security-scanner-jkjc.vercel.app)

Built as the final project for the SecuredXWave Cybersecurity Internship Program (Web Pentest track).

## What it does

- Scans a target API URL for common vulnerabilities across four categories: rate limiting, authentication, SQL injection, and IDOR/BOLA
- Accepts an optional auth token to test authenticated endpoints
- Returns severity-rated findings (High/Medium/Low) with details and fix recommendations
- Stores scan history per user account
- JWT-based authentication with secure password hashing

## Stack

**Frontend:** React, TypeScript, Vite
**Backend:** FastAPI, SQLAlchemy, PostgreSQL, Python 3.13
**Deployment:** Vercel (frontend), Render (backend + database)

## How it works

1. User signs up / logs in — backend issues a JWT token
2. User submits a target API URL and selects which vulnerability categories to test
3. Backend scanner modules send crafted requests to the target and analyze responses
4. Results are saved to the database and displayed with severity ratings and remediation advice

## Running locally

Backend:
```bash
cd backend
pip install -e .
uvicorn main:app --reload
```

Frontend:
```bash
cd frontend
pnpm install
pnpm dev
```

You'll need a PostgreSQL database and a `.env` file with `DATABASE_URL` and `SECRET_KEY` set — see `backend/config.py` for the full list of settings.

## Author

Built by Sohaib as part of the SecuredXWave Cybersecurity Internship Program 2026, based on an open-source project foundation.

## License

AGPL 3.0
