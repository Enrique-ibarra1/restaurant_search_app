import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: process.env.REACT_APP_GOOGLE_API_KEY
    },
});