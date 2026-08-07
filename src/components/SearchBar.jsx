function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search users..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
    />
  );
}

export default SearchBar;