import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultsDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.restaurantImage} source={{uri: result.image_url}} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} reviews.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        
    },
    restaurantImage: {
        width: 250,
        borderRadius: 5,
        height: 150,
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',
    }
});

export default ResultsDetail;