import { Filter } from "lucide-react";

export const MovieFilter = ({ genres, selectedGenre, onFilterChange }) => (
  <div className="flex items-center space-x-2 overflow-x-auto pb-2">
    <Filter size={20} className="text-gray-500" />
    <button
      onClick={() => onFilterChange("")}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
        selectedGenre === ""
          ? "bg-blue-500 text-white"
          : "bg-white text-gray-600 hover:bg-gray-100"
      }`}
    >
      All
    </button>
    {genres.map((genre) => (
      <button
        key={genre}
        onClick={() => onFilterChange(genre)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          selectedGenre === genre
            ? "bg-blue-500 text-white"
            : "bg-white text-gray-600 hover:bg-gray-100"
        }`}
      >
        {genre}
      </button>
    ))}
  </div>
);
