import { useState } from "react";
import { MovieFilter } from "./components/MovieFilter";
import { MovieList } from "./components/MovieList";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A mind-bending thriller about dreams within dreams",
      rating: 8.8,
      genre: "Sci-Fi",
      poster: "https://link_to_poster.com/inception.jpg",
    },
    {
      id: 2,
      title: "Titanic",
      description: "A tragic love story set aboard the ill-fated RMS Titanic",
      rating: 7.8,
      genre: "Romance",
      poster: "https://link_to_poster.com/titanic.jpg",
    },
    {
      id: 3,
      title: "The Dark Knight",
      description: "Batman faces his greatest challenge against the Joker",
      rating: 9.0,
      genre: "Action",
      poster: "https://link_to_poster.com/dark-knight.jpg",
    },
    {
      id: 4,
      title: "The Hangover",
      description: "A bachelor party goes hilariously wrong in Las Vegas",
      rating: 7.7,
      genre: "Comedy",
      poster: "https://link_to_poster.com/hangover.jpg",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const genres = ["Sci-Fi", "Romance", "Action", "Comedy"];

  const handleSearchChange = (query) => setSearchQuery(query);
  const handleFilterChange = (genre) => setSelectedGenre(genre);

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedGenre ? movie.genre === selectedGenre : true)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Movie Collection
        </h1>

        <div className="max-w-2xl mx-auto mb-8">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />
        </div>

        <div className="mb-8">
          <MovieFilter
            genres={genres}
            selectedGenre={selectedGenre}
            onFilterChange={handleFilterChange}
          />
        </div>

        {filteredMovies.length > 0 ? (
          <MovieList movies={filteredMovies} />
        ) : (
          <div className="min-w-[100vw] text-center py-12">
            <p className="text-gray-500 text-lg">
              No movies found matching your criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
