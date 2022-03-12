import { useState, useEffect } from 'react';
import apiService from '../services/api.service';
import { Link } from 'react-router-dom';

function AllRestaurants() {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getAllRestaurants = async () => {
      try {
        const response = await apiService.getRestaurants();
        setRestaurants(response.data);
      }
      catch(error) {
          console.log(error)
      }
    };
    getAllRestaurants();
  }, []);

  return (
    <div>
      <h1>See All Restaurants Here</h1>
      {restaurants.map(restaurant => {
        let images = [
          process.env.PUBLIC_URL + '/images/restaurant/restaurant1.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant2.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant3.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant4.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant5.png',
          process.env.PUBLIC_URL + '/images/restaurant/default-restaurant.png',
        ];
        let src = images[Math.floor(Math.random() * images.length)];
        return (
          <div key={restaurant._id}>
            <Link to={`/restaurants/${restaurant._id}`}>
              <img src={src} />
              <h3 className="font-bold text-slate-600">{restaurant.name}</h3>
              <p>Priority: {restaurant.priority}</p>
              <p>Cuisine: {restaurant.cuisine}</p>
              <p>Neighborhood: {restaurant.neighborhood}</p>
              <p>Budget: {restaurant.budget}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default AllRestaurants;
