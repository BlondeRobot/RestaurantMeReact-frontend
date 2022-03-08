import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/api.service';
import config from '../config/config';

function FindRestaurants() {

  const [search, setSearch] = useState({
    name: '',
    priority: '',
    cuisine: '',
    neighborhood: '',
    budget: '',
    ambience: '',
    veganMenu: '',
    glutenFree: '',
    notes: '',
  })

  const navigate = useNavigate();

  const handleSearch = e => {
    setSearch(previous => {
      return {
        ...previous,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    apiService
      .findRestaurants(search)
      .then(response => {
        console.log(response);
        navigate('/restaurants');
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Find Restaurants That Match Your Search Criteria</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={search.name} onChange={handleSearch} />
        <label>Priority</label>
        <select name="priority" value={search.priority} onChange={handleSearch}>
          {config.priority.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <label>Cuisine</label>
        <select name="cuisine" value={search.cuisine} onChange={handleSearch}>
          {config.cuisine.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <label>Neighborhood</label>
        <select name="neighborhood" value={search.neighborhood} onChange={handleSearch}>
          {config.neighborhood.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <label>Budget</label>
        <select name="budget" value={search.budget} onChange={handleSearch}>
          {config.budget.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <label>Ambience</label>
        <select name="ambience" value={search.ambience} onChange={handleSearch}>
          {config.ambience.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <label>Vegan Menu</label>
        <select name="veganMenu" value={search.veganMenu} onChange={handleSearch}>
          {config.veganMenu.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <label>Gluten Free</label>
        <select name="glutenFree" value={search.glutenFree} onChange={handleSearch}>
          {config.glutenFree.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <button type="submit">Find A Restaurant</button>
      </form>
    </div>
  );
}

export default FindRestaurants;
