import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = ({backgroundColor, height, customStyle, children}) => {
  return (
    <View
      style={[
        {backgroundColor: backgroundColor, height: height},
        styles.card,
        customStyle,
      ]}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 330,
    borderRadius: 20,
    marginVertical: 15,
    marginHorizontal: 14.5,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 5,
    padding: 8,
  },
});
