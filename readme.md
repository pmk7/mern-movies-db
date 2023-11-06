# Full Stack MERN Web Application

## Description

MoviesDB is a full stack web app built using the MERN stack which allows users to browse and search a database of movies to create and edit lists of movies they want to watch

## Netlify

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

1. Clone the repository: `git clone pmk7/mern-movies-db`
2. Install dependencies (backend & frontend): 
`npm install` 
`cd frontend` 
`npm install`
3. Start the application (frontend: 3000 & backend: 9000): `npm run dev` 
4. Backend only `npm run server`

## Env file
- Rename env.example file to .env file and add your personal MongoDB URI

## Seed Database
1. Import data: `node backend/seeder.js`
2. Destroy Data: `node backend/seeder.js -d`

## Sample Login
- Username: `fry@gmail.com`
- Password: `123456`


