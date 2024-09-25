// Controllers/MoviesController.cs
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
        private List<Movie> LoadMovies()
        {
            // Update the file path to point to the "Data" folder
            var jsonFilePath = Path.Combine(Directory.GetCurrentDirectory(), "Data", "movies.json");
            var jsonData = System.IO.File.ReadAllText(jsonFilePath);
            var movies = JsonConvert.DeserializeObject<List<Movie>>(jsonData);
            return movies;
        }

        [HttpGet]
        public ActionResult<List<Movie>> GetMovies()
        {
            var movies = LoadMovies();
            return Ok(movies);
        }

        [HttpPost("checkout")]
        public ActionResult<string> Checkout([FromBody] List<string> titles)
        {
            var movies = LoadMovies();
            decimal totalCost = 0;
            foreach (var title in titles)
            {
                var movie = movies.FirstOrDefault(m => m.Title.Equals(title, System.StringComparison.OrdinalIgnoreCase));
                if (movie != null && movie.AvailableCopies > 0)
                {
                    movie.AvailableCopies--;
                    totalCost += movie.Price;
                }
            }
            return Ok($"Total rental cost: ${totalCost}");
        }

        [HttpPost("return")]
        public ActionResult Return([FromBody] List<string> titles)
        {
            var movies = LoadMovies();
            foreach (var title in titles)
            {
                var movie = movies.FirstOrDefault(m => m.Title.Equals(title, System.StringComparison.OrdinalIgnoreCase));
                if (movie != null)
                {
                    movie.AvailableCopies++;
                }
            }
            return Ok("Movies returned successfully.");
        }
    }
}
