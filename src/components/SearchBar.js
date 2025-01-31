import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        autoCapitalize='words'
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder='Search'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#DADDF0',
    height: 40,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginLeft: 12,
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Assistant-Light'
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
});

export default SearchBar;
