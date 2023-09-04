import React, { useState } from 'react';

export default function SearchBar({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Pesquisar por título..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-2 py-1 border rounded-md focus:outline-none"
      />
      <button onClick={handleSearch} className="px-3 py-1 bg-blue-500 text-white rounded-md">
        Pesquisar
      </button>
    </div>
  );
}
