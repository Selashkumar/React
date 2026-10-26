import SearchFilter from './SearchFilter';
import FoodItemsFilter from './FoodItemsFilter';
import Cards from './Cards';
import { FOOD_ITEMS, DISH_CARDS } from '../utils/mockdata';
import { useState } from 'react';

const foodItems = FOOD_ITEMS


const Body = () => {
    const [dishCards, setDishCards] = useState(DISH_CARDS)
    const handleTopRated = () => {
        // Implementation for top rated functionality
        setDishCards([...dishCards].sort((a, b) => b.rating - a.rating));
    }
  return (
    <div className="App-body">
      {/* search filter */}
      <SearchFilter  onSearch={handleTopRated}/>
      {/* food items filter */}
      <FoodItemsFilter foodItems={foodItems} />
      {/* cards */}
      <Cards dishCards={dishCards}/>
    </div>
  )
}

export default Body;