const Cards = ({dishCards}: {dishCards: any[]}) => {
  return (
    <div className="App-cards">
      {dishCards.map((dish) => (
        <div className="dish-card" key={dish.id}>
          <img src={dish.image} alt={dish.name} className="dish-card-image" />
          <div className="dish-card-details">
            <div>
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
            </div>
            <div className="dish-card-info">
              <p>{dish.rating} ★</p>
              <p>${dish.price.toFixed(2)}</p>
              <p>{dish.deliveryTime} min</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;