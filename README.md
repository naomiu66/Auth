# About
### This is authentication system application for study how to implement sessions + cookie auth system.
### Backend stack: Express js, redis, mongodb, Docker
### Frontend stack: React, Vite, Typescript.

# Quick start
## Starting Backend
1) set the environment variables in .env

### define in .env SALT_ROUNDS, SESSION_SECRET, REDIS_URL, MONGO_URI, PORT

2) start docker daemon and start doocker compose from project root folder

```bash
docker compose up -d
```

## Starting frontend

1) open frontend folder from terminal
```bash
cd frontend
```

2) install dependencies
```bash
npm install
```

3) run project
```bash
npm run dev
```
