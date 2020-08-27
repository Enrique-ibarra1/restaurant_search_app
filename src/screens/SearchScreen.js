import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultsList';

const SearchScreen = () => {
    //search term
    const [term, setTerm] = useState("");
    //array of objects from yelp api
    const [searchApi, restaurants, errorMessage] = useResults();
    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return restaurants.filter(restaurant => {
            return restaurant.price === price;
        })
    };
    
    return(
        <>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}/>

            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultList results={filterResultsByPrice('$')} category="Cost Effective"/>
                <ResultList results={filterResultsByPrice('$$')} category="Pricier"/>
                <ResultList results={filterResultsByPrice('$$$')}category="Big Spender"/>
                <ResultList results={filterResultsByPrice('$$$$')}category="Very costly"/>
            </ScrollView>
            
            
        </>
    )
};

const styles = StyleSheet.create({

});

export default SearchScreen;