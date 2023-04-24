# NextJS App to connect MongoDB

Create account and save user in MongoDB

Show productList from MongoDB for logged in users

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## MongoDB

Create an account on mongodb.com
https://mongodb.com/atlas/database

Click "Build a Database"
Select "Free" option

Create user
Add Username and password
Choose your region for AWS

Click "Connect your application" and copy credentials from application code

### Add your MongoDB credentials for development

Create a new file in your root directory: .env.local 

Copy the credentials from your database to .env.local to define DB_URI 
```
DB_URI=mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.ve9hms1.mongodb.net/?retryWrites=true&w=majority
```
