import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
   <View style={styles.viewStyle}>
     <Text style={styles.textStyle}>Find My Breakfast</Text>
   </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  }
})

export default Header;