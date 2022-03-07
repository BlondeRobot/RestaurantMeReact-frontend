import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/api.service';
import config from '../config/config';

function AddRestaurant() {
  const [form, setForm] = useState({
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
        navigate('/restaurants');
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
        <select name='priority' value={form.priority} onChange={handleForm}>
          {config.priority.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <label>Cuisine</label>
        <select name='cuisine' value={form.cuisine} onChange={handleForm}>
          {config.cuisine.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <label>Neighborhood</label>
        <select name='neighborhood' value={form.neighborhood} onChange={handleForm}>
          {config.neighborhood.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <label>Budget</label>
        <select name='budget' value={form.budget} onChange={handleForm}>
          {config.budget.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <label>Ambience</label>
        <select name='ambience' value={form.ambience} onChange={handleForm}>
          {config.ambience.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <label>Vegan Menu</label>
        <select name='veganMenu' value={form.veganMenu} onChange={handleForm}>
          {config.veganMenu.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <label>Gluten Free</label>
        <select name='glutenFree' value={form.glutenFree} onChange={handleForm}>
          {config.glutenFree.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <label>Notes</label>
        <input type="text" name="notes" value={form.notes} onChange={handleForm} />
        <button type="submit">Add New Restaurant</button>
      </form>
    </div>
  );
}

export default AddRestaurant;
