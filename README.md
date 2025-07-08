# Blog App

A modern full-stack blog application built with **Next.js**, **Express**, and **MongoDB**. This project features a beautiful UI, user authentication, blog CRUD, image uploads, search, category filtering, and more.

## Features
- Responsive, modern UI with React and Tailwind CSS
- User authentication (register, login, JWT)
- Create, read, update, and delete (CRUD) blog posts
- Image upload for blog posts
- Search and filter blogs by category
- Animated stats and dynamic content
- Next.js API routes for frontend logic
- Express backend (optional, for advanced API needs)
- MongoDB Atlas integration

## Tech Stack
- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)
- [Express.js](https://expressjs.com/) (backend)
- [Mongoose](https://mongoosejs.com/)

## Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd blog-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the `backend/` directory:
```
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4. Run the backend server
```bash
cd backend
node index.js
```

### 5. Run the frontend (Next.js) app
```bash
cd ..
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Screenshots
_Add screenshots here if desired._

## License
MIT
