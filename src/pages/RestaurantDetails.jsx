import { useState, useEffect } from 'react';
import apiService from '../services/api.service';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
    <div className="mt-24">
      <h1 className="mb-4 font-bold">{restaurant.name}</h1>
      <img className="mb-4" src={restaurant.image} />
      <p>
        <span className="font-bold">Priority</span>: {restaurant.priority}
      </p>
      <p>
        <span className="font-bold">Cuisine</span>: {restaurant.cuisine}
      </p>
      <p>
        <span className="font-bold">Neighborhood</span>: {restaurant.neighborhood}
      </p>
      <p>
        <span className="font-bold">Budget</span>: {restaurant.budget}
      </p>
      <p>
        <span className="font-bold">Ambience</span>: {restaurant.ambience}
      </p>
      <p>
        <span className="font-bold">Vegan Menu</span>: {restaurant.veganMenu}
      </p>
      <p>
        <span className="font-bold">Gluten Free</span>: {restaurant.glutenFree}
      </p>
      <p className="mb-4">
        <span className="font-bold">Notes</span>: {restaurant.notes}
      </p>
      <div className="flex flex-row">
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold flex flex-col items-center py-2 px-4 w-1/2 border border-gray-400 rounded shadow"
          onClick={handleDelete}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          <span>Delete</span>
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold flex flex-col items-center py-2 px-4 w-1/2 border border-gray-400 rounded shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          <Link to={`/restaurants/${id}/update`}>Edit </Link>
        </button>
      </div>
    </div>
  );
}

export default RestaurantDetails;
