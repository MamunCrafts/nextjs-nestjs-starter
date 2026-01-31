# Next.js & NestJS Starter

A powerful full-stack starter template combining the flexibility of **Next.js 16** with the robustness of **NestJS 11**. Designed for modern web development with a focus on developer experience, type safety, and scalability.

## 🚀 Tech Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

### Backend
- **Framework**: [NestJS 11](https://nestjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Runtime**: Node.js

### Infrastructure
- **Containerization**: Docker & Docker Compose
- **Package Manager**: npm / pnpm

## 📁 Project Structure

```bash
.
├── backend/            # NestJS API application
├── frontend/           # Next.js frontend application
├── docker-compose.yml  # Docker orchestration
└── README.md           # Project documentation
```

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- npm or pnpm

## ⚡ Installation & Running

### Option 1: Docker (Recommended)

Run the entire stack with a single command.

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd nextjs-nestjs-starter
   ```

2. **Start the services**:
   ```bash
   docker-compose up --build
   ```

   - **Frontend**: Accessible at [http://localhost:3001](http://localhost:3001)
   - **Backend**: API accessible at [http://localhost:3000](http://localhost:3000)

### Option 2: Manual Setup

If you prefer running services locally without Docker.

#### Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run start:dev
   ```
   The server will start on port 3000.

#### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   The application will be available at [http://localhost:3001](http://localhost:3001).

## 👤 Author

**Md. Al Mamun Mim** <br>
**Sr. Software Developer** <br>
**Fanfare Bangladesh Ltd**
