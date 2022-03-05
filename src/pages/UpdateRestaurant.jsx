import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiService from '../services/api.service';

function UpdateRestaurant() {
   const { id } = useParams();
   const [restaurant, setRestaurant] = useState({
     name: '',
     priority: 'TBE',
     cuisine: 'TBE',
     neighborhood: 'TBE',
     budget: 'TBE',
     ambience: 'TBE',
     veganMenu: 'TBE',
     glutenFree: 'TBE',
     notes: 'TBE',
   });
   const navigate = useNavigate(); 

  const getRestaurantById = async () => {
    const response = await apiService.getRestaurantDetails(id)
    setRestaurant(response.data)
  }

  useEffect(() => {
    getRestaurantById();
  }, []);

  const handleOnChange = e => {
    setRestaurant(previous => {
      return {
        ...previous,
        [e.target.name]: e.target.value,
      };
    });
  }; 

  const handleSubmit = e => {
    e.preventDefault();
    apiService
      .updateRestaurant(restaurant._id, {
        name: restaurant.name,
        priority: restaurant.priority,
        cuisine: restaurant.cuisine,
        neighborhood: restaurant.neighborhood,
        budget: restaurant.budget,
        ambience: restaurant.ambience,
        veganMenu: restaurant.veganMenu,
        glutenFree: restaurant.glutenFree,
        notes: restaurant.notes
      })
      .then(response => {
        console.log(response);
        navigate('/restaurants');
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Update Your Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={restaurant.name} onChange={handleOnChange} />
        <label>Priority</label>
        <input type="text" name="priority" value={restaurant.priority} onChange={handleOnChange} />
        <label>Cuisine</label>
        <input type="text" name="cuisine" value={restaurant.cuisine} onChange={handleOnChange} />
        <label>Neighborhood</label>
        <input type="text" name="neighborhood" value={restaurant.neighborhood} onChange={handleOnChange} />
        <label>Budget</label>
        <input type="text" name="budget" value={restaurant.budget} onChange={handleOnChange} />
        <label>Ambience</label>
        <input type="text" name="ambience" value={restaurant.ambience} onChange={handleOnChange} />
        <label>Vegan Menu</label>
        <input type="text" name="veganMenu" value={restaurant.veganMenu} onChange={handleOnChange} />
        <label>Gluten Free</label>
        <input type="text" name="glutenFree" value={restaurant.glutenFree} onChange={handleOnChange} />
        <label>Notes</label>
        <input type="text" name="notes" value={restaurant.notes} onChange={handleOnChange} />
        <button type="submit">Update Your Restaurant</button>
      </form>
    </div>
  );
}

export default UpdateRestaurant;
