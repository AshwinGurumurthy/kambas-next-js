# Kambaz — Learning Management System

Kambaz is a full-stack Learning Management System (LMS) built with Next.js and Node.js/Express. It combines core course management features (inspired by Canvas/Blackboard) with an integrated discussion board (inspired by Piazza), supporting students, faculty, and administrators.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [MongoDB Setup](#mongodb-setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [API Overview](#api-overview)
- [User Roles](#user-roles)

---

## Features

### Kambaz (Core LMS)
- **Authentication** — Sign up, sign in, sign out, and profile management with session persistence
- **Dashboard** — View enrolled courses, enroll/unenroll, and (for faculty) create/edit/delete courses
- **Courses** — Full course management with modules, assignments, grades, and a people roster
- **Modules** — Structured course content units with create, reorder, update, and delete support
- **Assignments** — Create and manage assignments per course with due dates and point values
- **Grades** — Grade tracking per student per course
- **People** — Course roster with role-based filtering (students, faculty, TAs)
- **Role-based access** — Students, Faculty, and Admin have different permissions throughout the UI

### Pazza (Discussion Board)
- **Posts** — Create question or note posts within a course's discussion board
- **Folders** — Organize and filter posts by category folders
- **Answers** — Separate student and instructor answer threads per post
- **Follow-ups** — Threaded follow-up discussions with nested replies
- **Analytics** — Dashboard showing unread posts, unanswered questions, and engagement stats
- **Integrated** — Accessible directly within the Kambaz course navigation under the "Piazza" tab

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend framework | Next.js 16, React 19, TypeScript |
| State management | Redux Toolkit, React-Redux |
| UI | React-Bootstrap, Bootstrap 5, Sass |
| HTTP client | Axios (with credentials) |
| Rich text | react-simple-wysiwyg |
| Icons | react-icons |
| Backend framework | Express 5 |
| Database | MongoDB with Mongoose 9 |
| Sessions | express-session |
| Dev tooling | ESLint, Turbopack, dotenv |

---

## Project Structure

This repository is the **frontend**. The backend lives in a companion repository (`kambaz-node-server-app`).

```
kambas-next-js/               # Frontend (this repo)
├── app/
│   ├── (Kambaz)/             # Core LMS module
│   │   ├── Account/          # Auth: sign in, sign up, profile
│   │   ├── Dashboard/        # Course listings and enrollment management
│   │   ├── Courses/
│   │   │   └── [cid]/        # Per-course pages
│   │   │       ├── Home/
│   │   │       ├── Modules/
│   │   │       ├── Assignments/
│   │   │       ├── Grades/
│   │   │       ├── People/
│   │   │       └── Piazza/   # Entry point into Pazza module
│   │   └── store.ts          # Kambaz Redux store
│   ├── Pazza/                # Discussion board module
│   │   ├── Class/[cid]/      # Per-class discussion space
│   │   │   ├── Posts/[pid]/  # Individual post view with answers/followups
│   │   │   ├── Folders/      # Folder filter sidebar
│   │   │   └── Create/       # New post form
│   │   ├── ConfigureClasses/ # Class configuration (folders, enrollment, settings)
│   │   └── store.ts          # Pazza Redux store
│   └── Labs/                 # Lab exercises (Lab1–Lab5)
│
kambaz-node-server-app/       # Backend (companion repo)
├── Kambaz/
│   ├── Users/                # User routes, DAO, Mongoose schema/model
│   ├── Courses/              # Course + enrollment routes
│   ├── Modules/              # Module routes
│   ├── Assignments/          # Assignment routes
│   └── Enrollments/          # Enrollment routes
├── Pazza/
│   ├── Posts/
│   ├── Answers/
│   ├── Folders/
│   ├── Followup/
│   └── Replies/
└── index.js                  # Express server entry point
```

---

## Prerequisites

- **Node.js** v18 or higher
- **MongoDB** v6 or higher running locally
- The backend companion repo cloned and configured

---

## Getting Started

### MongoDB Setup

Make sure MongoDB is installed and running on your machine before starting the backend.

**macOS (Homebrew):**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Verify it's running:**
```bash
mongosh
# Should connect to mongodb://127.0.0.1:27017
```

The app uses the `kambaz` database. Mongoose will create it automatically on first write — no manual setup needed.

---

### Backend Setup

```bash
# In the backend repo directory
cd kambaz-node-server-app

# Install dependencies
npm install

# Create a .env file (see Environment Variables section)

# Start the server
npm start
```

The backend runs on **http://localhost:4000** by default.

---

### Frontend Setup

```bash
# In this repo
cd kambas-next-js

# Install dependencies
npm install

# Create a .env.development file (see Environment Variables section)

# Start the development server
npm run dev
```

The frontend runs on **http://localhost:3000**.

---

## Environment Variables

### Frontend — `.env.development`

```env
NEXT_PUBLIC_HTTP_SERVER=http://localhost:4000
```

### Backend — `.env`

```env
SERVER_ENV=development
CLIENT_URL=http://localhost:3000
SERVER_URL=http://localhost:4000
SESSION_SECRET=your-secret-phrase-here
DATABASE_CONNECTION_STRING=mongodb://127.0.0.1:27017/kambaz
```

> For production, update `DATABASE_CONNECTION_STRING` to your MongoDB Atlas connection string and set `SERVER_ENV=production`.

---

## API Overview

All API requests go to the backend at `NEXT_PUBLIC_HTTP_SERVER`. Authenticated routes use session cookies (`withCredentials: true`).

| Resource | Base Path |
|---|---|
| Users / Auth | `/api/users` |
| Courses | `/api/courses` |
| Modules | `/api/modules` |
| Assignments | `/api/assignments` |
| Enrollments | `/api/users/:uid/courses/:cid` |
| Pazza Posts | `/api/pazza/posts` |
| Pazza Folders | `/api/pazza/folders` |

Key auth endpoints:
- `POST /api/users/signup` — Register a new user
- `POST /api/users/signin` — Log in
- `POST /api/users/signout` — Log out
- `POST /api/users/profile` — Get current session user

### MongoDB Collections

The backend uses the following Mongoose collections in the `kambaz` database:

| Collection | Description |
|---|---|
| `users` | Registered users with role, credentials, and profile info |
| `courses` | Course records (name, number, dates, description) |
| `modules` | Course content modules linked to a course |
| `assignments` | Assignments linked to a course |
| `enrollments` | Join records linking users to courses (`userId-courseId` composite key) |
| `posts` | Pazza discussion posts |
| `answers` | Student and instructor answers to posts |
| `followups` | Follow-up threads on posts |
| `replies` | Replies within follow-up threads |
| `folders` | Folder categories for organizing Pazza posts |

---

## User Roles

| Role | Capabilities |
|---|---|
| `STUDENT` | Enroll in courses, view content, post on Pazza |
| `FACULTY` | Create/edit/delete courses and content, instructor answers on Pazza |
| `ADMIN` | Full access including user management |
