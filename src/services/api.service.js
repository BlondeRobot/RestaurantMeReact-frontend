import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || 'http://localhost:5005',
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use(config => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem('authToken');

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  login = requestBody => {
    return this.api.post('/auth/login', requestBody);
    // same as
    // return axios.post("http://localhost:5005/auth/login");
  };

  signup = requestBody => {
    return this.api.post('/auth/signup', requestBody);
    // same as
    // return axios.post("http://localhost:5005/auth/singup");
  };

  verify = () => {
    return this.api.get('/auth/verify');
    // same as
    // return axios.post("http://localhost:5005/auth/verify");
  };

  getRestaurants = () => {
    return this.api.get('/api/restaurants');
  };

  findRestaurants = search => {
    return this.api.post('/api/restaurants/find', search);
  };

  getRestaurantDetails = id => {
    return this.api.get(`/api/restaurants/${id}`);
  };

  updateRestaurant(id, body) {
    return this.api.put(`/api/restaurants/${id}`, body);
  }

  addRestaurant = form => {
    return this.api.post('/api/restaurants', form);
  };

  deleteRestaurant = id => {
    return this.api.delete(`/api/restaurants/${id}`);
  };
}

// Create one instance (object) of the service
const apiService = new ApiService();

export default apiService;
