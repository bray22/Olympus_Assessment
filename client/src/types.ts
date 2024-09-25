export interface Movie {
  title: string;
  director: string;
  genre: string;
  price: number;
  language: string;
  availableCopies: number;
  year_of_release: number; // You can keep this if you still want to use it somewhere else
}