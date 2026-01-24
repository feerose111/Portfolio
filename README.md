<<<<<<< HEAD
# Portfolio
Portfolio website
=======
# Portfolio Website

A full-stack portfolio website built with React (Vite) frontend, Node.js/Express backend, and MongoDB database.

## Project Structure

```
portfolio/
├── client/                 # React frontend (Vite)
│   ├── public/
│   ├── src/
│   │   ├── assets/         # Images, icons
│   │   ├── components/     # Reusable UI (Header, ProjectCard, etc.)
│   │   ├── pages/          # Home, About, Projects, Contact
│   │   ├── hooks/          # Custom hooks (useScroll, useMouse)
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/                 # Node.js + Express API
│   ├── controllers/        # Route logic
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes
│   ├── middleware/         # Auth, error handling
│   ├── config/             # DB connection
│   ├── .env.example
│   └── server.js
│
├── docker-compose.yml      # Defines multi-container setup
├── Dockerfile.client       # For React app
├── Dockerfile.server       # For Node.js app
└── README.md
```

## Quick Start with Docker

1. **Make sure Docker and Docker Compose are installed**

2. **Create environment file for server**:
   ```bash
   cp server/.env.example server/.env
   ```

3. **Build and run all services**:
   ```bash
   docker-compose up --build
   ```

4. **Access the application**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - MongoDB: localhost:27017

## Services

- **Frontend**: React app with Vite running on port 3000
- **Backend**: Express API running on port 5000
- **Database**: MongoDB running on port 27017

## Development

### Running without Docker

#### Frontend:
```bash
cd client
npm install
npm run dev
```

#### Backend:
```bash
cd server
npm install
# Make sure MongoDB is running locally or update MONGODB_URI in .env
npm start
```

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a single project
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Contact
- `GET /api/contact` - Get all contact messages
- `POST /api/contact` - Create a new contact message
- `DELETE /api/contact/:id` - Delete a contact message

## Tech Stack

- **Frontend**: React, Vite, React Router
- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **Containerization**: Docker, Docker Compose

>>>>>>> 85503a7 (initial commit)
