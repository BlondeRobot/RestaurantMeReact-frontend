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
      } catch (error) {
        console.log(error);
      }
    };
    getAllRestaurants();
  }, []);

  return (
    <div className="mb-20">
      <h1>See All Restaurants Here</h1>
      {restaurants.map(restaurant => {
        let images = [
          process.env.PUBLIC_URL + '/images/restaurant/restaurant1.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant2.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant3.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant4.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant5.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant6.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant7.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant8.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant9.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant10.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant11.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant12.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant13.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant14.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant15.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant16.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant17.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant18.png',
          process.env.PUBLIC_URL + '/images/restaurant/default-restaurant.png',
        ];
        let src = images[Math.floor(Math.random() * images.length)];
        return (
          <div className="border-b-solid border-b-2 border-b-slate-300" key={restaurant._id}>
            <Link to={`/restaurants/${restaurant._id}`}>
              <h3 className="font-bold text-slate-600">{restaurant.name}</h3>
              <img src={src} />
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
