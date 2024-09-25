using Microsoft.AspNetCore.Mvc;
using MovieRentalApi.Models;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace MovieRentalApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        // Load movies from the Movies.json file
        private List<Movie> LoadMovies()
        {
            var jsonFilePath = Path.Combine(Directory.GetCurrentDirectory(), "Data", "Movies.json");
            var jsonData = System.IO.File.ReadAllText(jsonFilePath);
            var movies = JsonConvert.DeserializeObject<List<Movie>>(jsonData);
            return movies;
        }

        // Save the updated movie list to the Movies.json file
        private void SaveMovies(List<Movie> movies)
        {
            var jsonFilePath = Path.Combine(Directory.GetCurrentDirectory(), "Data", "Movies.json");
            var jsonData = JsonConvert.SerializeObject(movies, Formatting.Indented);
            System.IO.File.WriteAllText(jsonFilePath, jsonData);
        }

        // GET: api/movies
        [HttpGet]
        public ActionResult<List<Movie>> GetMovies()
        {
            var movies = LoadMovies();
            return Ok(movies);
        }

        // POST: api/movies/checkout
        [HttpPost("checkout")]
        public ActionResult<string> Checkout([FromBody] List<string> titles)
        {
            var movies = LoadMovies();
            decimal totalCost = 0;

            foreach (var title in titles)
            {
                var movie = movies.FirstOrDefault(m => m.Title.Equals(title, System.StringComparison.OrdinalIgnoreCase));

                // If the movie exists and has available copies
                if (movie != null && movie.AvailableCopies > 0)
                {
                    movie.AvailableCopies--;  // Decrement available copies
                    totalCost += movie.Price; // Add the movie price to the total cost
                }
                else
                {
                    return BadRequest($"Movie '{title}' is not available.");
                }
            }

            // Save the updated movies back to the file
            SaveMovies(movies);

            return Ok($"Total rental cost: ${totalCost}");
        }

        // POST: api/movies/return
        [HttpPost("return")]
        public ActionResult ReturnMovies([FromBody] List<string> titles)
        {
            var movies = LoadMovies();

            foreach (var title in titles)
            {
                var movie = movies.FirstOrDefault(m => m.Title.Equals(title, System.StringComparison.OrdinalIgnoreCase));

                // If the movie exists, increment available copies
                if (movie != null)
                {
                    movie.AvailableCopies++;
                }
            }

            // Save the updated movies back to the file
            SaveMovies(movies);

            return Ok("Movies returned successfully.");
        }
    }
}
