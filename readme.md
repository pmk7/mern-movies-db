# Full Stack MERN Web Application

## Description

MoviesDB is a full stack web app built using the MERN stack which allows users to browse and search a database of movies to create and edit lists of movies they want to watch

## Features

- Register and login
- Search movies
- Display movie details (actors, director, IMDB rating etc)
- Add selected movies to user list

## Technologies Used

- Frontend: React, Redux, React-Bootstrap
- Backend: Express, Nodejs
- Database: MongoDB


## Installation

1. Clone the repository: `git clone https://github.com/pmk7/mern-movies-db`
2. Install dependencies (backend & frontend): 
Install backend dependencies, from root: `npm install` 
Frontend: `cd frontend` 
Install frontend dependencies: `npm install`
3. Start the application (frontend: localhost:3000 & backend: localhost:9000) from root: `npm run dev` 
4. Backend only `npm run server`


## Env file
- Rename env.example file to .env file and add your personal MongoDB URI. See here for more details about to get a connection string: `https://www.mongodb.com/docs/guides/atlas/connection-string/`

## Seed Database
From the root: 

1. Import data: `npm run data:import`
2. Destroy Data: `npm run data:destory`

- Once the data has been seeded to your database, from the root folder in your project, run `npm run dev`

## Sample Login
- Username: `fry@gmail.com`
- Password: `123456`


