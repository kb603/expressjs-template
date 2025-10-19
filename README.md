# Express + TypeScript Boilerplate

An Express + TypeScript boilerplate

## Features

- TypeScript
- Express 5 with CORS and cookie parsing
- Pino logging with pretty printing
- Global error handling
- MongoDB (Mongoose) integration
- Environment-based configuration
- Nodemon

## Requirements

- MongoDB connection string (optional)

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Setup environment**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your values. **Note:** Mock values in `src/config/app.config.ts` should be removed before use.

3. **Start development**

   ```bash
   npm run dev
   ```

   Server runs at `http://localhost:8000`

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Environment Variables

| Variable                 | Description               | Default       |
| ------------------------ | ------------------------- | ------------- |
| `NODE_ENV`               | Environment mode          | `development` |
| `PORT`                   | Server port               | `8000`        |
| `BASE_PATH`              | API base path             | `/api/v1`     |
| `APP_ORIGIN`             | CORS origin               | `localhost`   |
| `MONGO_URI`              | MongoDB connection string | -             |
| `JWT_SECRET`             | Access token secret       | -             |
| `JWT_EXPIRES_IN`         | Access token lifetime     | `15m`         |
| `JWT_REFRESH_SECRET`     | Refresh token secret      | -             |
| `JWT_REFRESH_EXPIRES_IN` | Refresh token lifetime    | `7d`          |

## Scripts

- `npm run dev` — Development with hot reload
- `npm run build` — Compile TypeScript
- `npm start` — Run production build
- `npm run lint` — Lint code

## Default Endpoints

- `GET /` — Root information
- `GET /health` — Health check
- `GET /api/docs` — API documentation

## Project Structure

```
src/
├── index.ts              # Entry point
├── config/               # Configuration
├── controllers/          # Route controllers
├── database/             # MongoDB setup
├── middleware/           # Express middleware
├── models/               # Mongoose models
├── routes/               # Route definitions
└── utils/                # Helper functions
```

## Next Steps

1. Remove mock environment variables from `src/config/app.config.ts`
2. Add your routes in `src/routes/`
3. Create controllers in `src/controllers/`
4. Define models in `src/models/`
5. Update `docsController.ts` with your actual endpoints
