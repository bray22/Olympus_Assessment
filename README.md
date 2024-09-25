# Movie Rental API

## Overview

This is a simple Movie Rental API built using **ASP.NET Core**. It allows users to view available movies, check out selected movies, and return them. The movie information is stored in a `movies.json` file located in the `Data` folder of the project.

### Features

- **View All Movies**: Retrieve a list of all available movies along with their details.
- **Check Out Movies**: Rent any combination of movies, update their available stock, and get the total cost.
- **Return Movies**: Return rented movies, updating their stock.

## Technologies Used

- **Backend**: ASP.NET Core
- **JSON**: Used for storing the movie data in `movies.json`.
- **HTTP Methods**: RESTful API with GET and POST requests.
- **Newtonsoft.Json**: For reading and writing JSON data.
  
## Prerequisites

Make sure you have the following installed:

- [.NET SDK](https://dotnet.microsoft.com/download)
- [Visual Studio](https://visualstudio.microsoft.com/downloads/) or any other code editor like VS Code
- [Postman](https://www.postman.com/) or any REST client to test the API (Optional)

## Installation and Setup

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/movie-rental-api.git
