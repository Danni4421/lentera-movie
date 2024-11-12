import { Search } from "lucide-react";

export const SearchBar = ({ searchQuery, onSearchChange }) => (
  <div className="relative">
    <Search
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black"
      size={20}
    />
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="Search movies..."
      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white shadow-sm"
    />
  </div>
);
