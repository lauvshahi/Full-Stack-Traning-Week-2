function SearchBar({ search, setSearch, searchMovies }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={searchMovies}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;