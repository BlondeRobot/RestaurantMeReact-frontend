import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/api.service';

function AddRestaurant() {

  const [form, setForm] = useState({
      name: '',
      priority: 'TBE',
      cuisine: 'TBE',
      neighbothood: 'TBE',
      budget: 'TBE',
      ambience: 'TBE',
      veganMenu: 'TBE',
      glutenFree: 'TBE',
      notes: 'TBE'
    });
  
  const navigate = useNavigate(); 
    
  const handleForm = e => {
      setForm(previous => {
        return {
          ...previous,
          [e.target.name]: e.target.value,
        };
      });
    };    
   

  const handleSubmit = e => {
    e.preventDefault();
    
    apiService
      .addRestaurant(form)
      .then(response => {
        console.log(response);
        navigate('/restaurants')
      })
      .catch(error => console.log(error));
  };


  return (
    <div>
      <h1>Add A Restaurant To Your Wishlist</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={form.name} onChange={handleForm} />
        <label>Priority</label>
        <input type="text" name="priority" value={form.priority} onChange={handleForm} />
        <label>Cuisine</label>
        <input type="text" name="cuisine" value={form.cuisine} onChange={handleForm} />
        <label>Neighbothood</label>
        <input type="text" name="neighbothood" value={form.neighbothood} onChange={handleForm} />
        <label>Budget</label>
        <input type="text" name="budget" value={form.budget} onChange={handleForm} />
        <label>Ambience</label>
        <input type="text" name="ambience" value={form.ambience} onChange={handleForm} />
        <label>Vegan Menu</label>
        <input type="text" name="veganMenu" value={form.veganMenu} onChange={handleForm} />
        <label>Gluten Free</label>
        <input type="text" name="glutenFree" value={form.glutenFree} onChange={handleForm} />
        <label>Notes</label>
        <input type="text" name="notes" value={form.notes} onChange={handleForm} />
        <button type="submit">Add New Restaurant</button>
      </form>
    </div>
  );
}

export default AddRestaurant;
