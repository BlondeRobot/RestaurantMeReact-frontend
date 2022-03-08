function FoundRestaurants ({foundRestaurants}) {

  return (
    <div>
      <h1>These restaurants match your search criteria</h1>
      {foundRestaurants.map(restaurant => {
        return (
          <div key={restaurant._id}>
            <h3>{restaurant.name}</h3>
            <p>Priority: {restaurant.priority}</p>
            <p>Neighborhood: {restaurant.neighborhood}</p>
            <p>Budget: {restaurant.budget}</p>
          </div>
        );
      })}
    </div>
  )

}

export default FoundRestaurants