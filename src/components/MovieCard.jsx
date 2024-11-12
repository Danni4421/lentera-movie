import { Star } from "lucide-react";

export const MovieCard = ({ movie }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-lg">
    <div className="relative pb-2/3">
      <img
        src="/api/placeholder/300/450"
        alt={movie.title}
        className="absolute h-full w-full object-cover"
      />
    </div>
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{movie.title}</h3>
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium">{movie.rating}</span>
        </div>
      </div>
      <span className="inline-block px-2 py-1 mt-2 text-xs font-medium bg-gray-100 rounded-full text-gray-600">
        {movie.genre}
      </span>
      <p className="mt-2 text-sm text-gray-600">{movie.description}</p>
    </div>
  </div>
);
