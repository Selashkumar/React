const FoodItemsFilter = ({foodItems}: {foodItems: any[]}) => {
  return (
    <div className="App-food-items-filter">
      {/* food items filter */}
      {foodItems.map((item: any) => (
        <div key={item.id} className="App-food-item">
          <img src={item.image} alt={item.name} className="App-food-item-image" />
          <div className="App-food-item-details">
            <h3 className="App-food-item-name">{item.name}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FoodItemsFilter;