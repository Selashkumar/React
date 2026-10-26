const SearchFilter = ({ onSearch }: { onSearch: () => void }) => {
  return (
    <div className="App-filter">
      {/* filter */}
      <div className="App-top-rating" onClick={onSearch}>
        <span>Top Rated</span>
      </div>
      <select className="App-filter-select">
        <option value="location">Location</option>
        <option value="dish">Dish</option>
        <option value="restaurant">Restaurant</option>
      </select>
    </div>
  )
}

export default SearchFilter;