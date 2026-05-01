function SearchBar({ city, setCity, getWeather }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Search</button>
    </div>
  );
}

export default SearchBar;