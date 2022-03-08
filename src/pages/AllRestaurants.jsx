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
        return (
          <div key={restaurant._id}>
            <Link to={`/restaurants/${restaurant._id}`}>
              <h3>{restaurant.name}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default AllRestaurants;
