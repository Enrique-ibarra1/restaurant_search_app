import {useEffect, useState} from 'react';
import yelp from '../api/Yelp';

//this is a reusable hook that has its own code and logic, only relating to the yelp api
export default () => {
    const [restaurants, setRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async(searchTerm) => {
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'chicago'
                }
            });
            setRestaurants(response.data.businesses);
        } catch(err) {
            setErrorMessage('something went wrong');
        }
    };

    useEffect(() => {
        searchApi('pizza');
    }, []);
    //here we return our search function, our restaurant results, and our error message states to use back in search screen.
    return [searchApi, restaurants, errorMessage];
};