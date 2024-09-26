# Movie Rentals Online

A web application for renting movies online. This project includes a backend API built with ASP.NET Core and a frontend client application using React. Users can view available movies, check out rentals, and return movies.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- View movie details and availability
- List all available movies with their current stock
- Check out selected movies and view total rental cost
- Return checked-out movies and update stock accordingly
- CORS enabled for cross-origin requests between frontend and backend

## Technologies

- **Backend**: ASP.NET Core, C#
- **Frontend**: React.js
- **Data**: JSON file for movie data
- **Development Tools**: Visual Studio, Visual Studio Code, npm, Postman
- **Database**: N/A (uses a JSON file)

## Getting Started

### Prerequisites

- [.NET SDK](https://dotnet.microsoft.com/download) (version 6.0 or later)
- [Node.js](https://nodejs.org/en/download/) (version 14 or later)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

### Backend Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd server

2. Open the backend project in Visual Studio.

3. Restore dependencies:
dotnet restore
4. Run the application:
dotnet run

5. The API will be running at https://localhost:7021.


### Frontend Setup

To set up the frontend application, follow these steps:

1. **Navigate to the Frontend Directory**:
   Open your terminal and run the following command:

   ```bash
   cd client
Install Dependencies: Use npm to install the required packages by running:


npm install
Start the React Application: Launch the application with the following command:


npm start
Once the application is running, it will be accessible at http://localhost:3000.

Usage
After starting the React application, you can use it as follows:

Access the Application: Open your web browser and navigate to http://localhost:3000 to view the movie rental application.

Browse Movies: Explore the list of available movies displayed on the homepage. Each movie will show its title, genre, and availability.

Check Out Movies: Select any combination of movies you wish to rent and proceed to check out. The total rental cost will be displayed based on your selections.

Return Movies: If you have checked out movies, you can return them using the interface provided. Simply select the movies you wish to return.

Debugging and Errors: For any errors or debugging information, utilize the developer console in your browser. You can access this by right-clicking on the page and selecting "Inspect" or by pressing F12.

API Endpoints
The following API endpoints are available for interacting with the movie rental system:

GET /api/Movies: Retrieve a list of all movies along with their details.

POST /api/Movies/checkout: Check out movies. Send a JSON array of movie titles in the request body.
Example Request:

["Inception", "Parasite"]
POST /api/Movies/return: Return movies. Send a JSON array of movie titles in the request body.
Example Request:
["Inception"]

Instructions for Use
Modify the <repository-url>: Replace this placeholder with the actual URL of your project repository.
Update License Information: If you choose a specific license, ensure to include or link to it.
