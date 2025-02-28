# Reas-test

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine.
- [Docker Compose](https://docs.docker.com/compose/install/) installed.
- Running docker on your machine.

# Getting Started

Follow these steps to run the application locally:

### 1. Clone the Repository

### 2. Set Up Environment Variables

Create a `.env` file in the root of your project with the following content:

MONGODB_URI=mongodb://mongo:27017/test
SERVER_PORT=3000
VITE_APP_API_URL=http://localhost:3000
REACT_APP_CLIENT_PORT=5173

Make sure to adjust the values as necessary for your setup.

### 3. Build and Start the Application

Run the following command in your terminal:

docker-compose up --build

This command will:

- Build the Docker images for the backend and client.
- Start the MongoDB service.
- Start the backend server and the client application.

### 4. Access the Application

- The backend will be running at `VITE_APP_API_URL` (default: `http://localhost:3000`)
- The client will be accessible at `http://localhost:${REACT_APP_CLIENT_PORT}` (default: `http://localhost:5173`)
