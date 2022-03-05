import { useState, useEffect } from 'react';
import apiService from '../services/api.service';
import { useParams, useNavigate } from 'react-router-dom';

function RestaurantDetails() {

  const {id} = useParams();
  const [restaurant, setRestaurant] = useState([])
  const navigate = useNavigate(); 

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

  const handleDelete = async () => {
    try {
      await apiService.deleteRestaurant(id);
      navigate('/restaurants');
    } catch (error) {
      console.log(error);
    }

  }  

  return (
    <div>
      <h1>See Your Restaurants Details</h1>
      <img src={restaurant.image} />
      <h3>{restaurant.name}</h3>
      <p>Neighborhood: {restaurant.neighborhood}</p>
      <p>Cuisine: {restaurant.cuisine}</p>
      <p>Notes: {restaurant.notes}</p>
      <button onClick={handleDelete}>Delete This Restaurant</button>
    </div>
  );
}

export default RestaurantDetails;
