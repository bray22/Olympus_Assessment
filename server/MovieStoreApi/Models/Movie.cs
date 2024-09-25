// Models/Movie.cs
namespace MovieRentalApi.Models
{
    public class Movie
    {
        public string Title { get; set; }
        public string Genre { get; set; }
        public string Language { get; set; }
        public string Director { get; set; }
        public int YearOfRelease { get; set; }
        public decimal Price { get; set; }
        public int AvailableCopies { get; set; } = 10; // Default stock is 10 copies
    }
}
