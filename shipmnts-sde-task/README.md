# shipmnts-sde-task

Generic Node.js + Express + MongoDB backend boilerplate for technical assessments.

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create environment configuration:
   ```bash
   cp .env.example .env
   ```
   *Update `MONGODB_URI` in `.env` with a valid connection string.*

3. Start server in production mode:
   ```bash
   npm start
   ```

4. Start server in development mode (with auto-reload):
   ```bash
   npm run dev
   ```
