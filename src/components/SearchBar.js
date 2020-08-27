import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return(
        <View style={styles.backgroundStyle}>
            <Feather style={styles.feather} name="search" />
            <TextInput placeholder="Search:" 
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.textInput} 
            Value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}/>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 15,
        marginBottom: 10,
    },
    textInput: {
        marginHorizontal: 15,
        flex: 1,
        fontSize: 18,
    },
    feather: {
        fontSize: 40,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
});

export default SearchBar;