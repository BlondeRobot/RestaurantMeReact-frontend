import { useState, useEffect } from 'react';
import apiService from '../services/api.service';
import { useParams } from 'react-router-dom';

function RestaurantDetails() {

  const {id} = useParams();
  const [restaurant, setRestaurant] = useState([])

    useEffect(() => {
      const getRestaurantDetails = async () => {
        try {
          const response = await apiService.getRestaurantDetails(id);
          console.log('response.data', response.data);
          setRestaurant(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      getRestaurantDetails();
    }, []);

  return (
    <div>
      <h1>See Your Restaurants Details</h1>
      <img src={restaurant.image} />
      <h3>{restaurant.name}</h3>
      <p>Neighborhood: {restaurant.neighborhood}</p>
      <p>Cuisine: {restaurant.cuisine}</p>
      <p>Notes: {restaurant.notes}</p>
    </div>
  );
}

export default RestaurantDetails;
