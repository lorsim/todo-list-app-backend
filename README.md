# Todo List App Backend

This repository contains the backend for a Todo List application. It is built using Node.js, Express, and Prisma ORM to manage tasks in a database.

## Table of Contents
- [Technologies](#technologies)
- [Setup Instructions](#setup-instructions)
- [Prisma Client Setup](#prisma-client-setup)
- [API Endpoints](#api-endpoints)

## Technologies

- Node.js
- Express.js
- Prisma ORM
- MySQL

## Setup Instructions

### Prerequisites

Ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) (or [Yarn](https://yarnpkg.com/) if preferred)
- [MySQL](https://www.mysql.com/) 
- [Prisma CLI](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch) (for Prisma setup)

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/todo-list-app-backend.git
cd todo-list-backend
```


### 2. Install Dependencies
Run the following command to install the required dependencies:

```bash
npm install
```

or if you are using yarn

```bash
yarn install
```
### 3. Set Up Environment Variables
Create a .env file in the root of the project directory and configure the following variables:

DATABASE_URL: Set the connection string for your MySQL database. For MySQL, it will look something like:
```bash
DATABASE_URL="mysql://username:password@localhost:3306/todo_db"
```

## Prisma Client Setup
### 1.1 Install Prisma
Run the following command to install Prisma:

```bash
npm install @prisma/client
npm install prisma --save-dev
```

### 1.2 Initialize Prisma
Initialize Prisma in your project by running:

``` bash
npx prisma init
```

### 1.3 Migrate the Database
Run the following command to apply the Prisma migrations to your database:

```bash
npx prisma db push
```
This will create the Task table in your database.

### 1.4 Generate Prisma Client
After applying the migrations, generate the Prisma Client:

```bash
npx prisma generate
```

### 1.5. Run the Application
Now, you can run the backend server:

To build the application for production, run:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

or for development:
```bash
npm run dev
```
The application should now be running on http://localhost:3000.

## API Endpoints
GET /tasks
Fetch all tasks.

```bash
GET /tasks
```

GET /tasks/:id
Fetch a task by its ID.

```bash
GET /tasks/:id
```

POST /tasks
Create a new task.

```bash
POST /tasks
```

PUT /tasks/:id
Update a task by its ID.

```bash
PUT /tasks/1
```

DELETE /tasks/:id
Delete a task by its ID.

```bash
DELETE /tasks/1
```
