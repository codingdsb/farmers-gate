import React from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';

const CommodityCardButton = ({text}) => {
  return (
    <TouchableHighlight style={styles.btnClickContain} underlayColor="#042417">
      <View style={styles.btnContainer}>
        <Text style={styles.btnText}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default CommodityCardButton;

const styles = StyleSheet.create({
  btnClickContain: {
    justifyContent: 'center',
    backgroundColor: '#EDEFF0',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    marginTop: 40,
    marginHorizontal: 7,
    height: 40,
    width: 125,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnText: {
    fontSize: 18,
    color: '#355F43',
    fontFamily: 'DMSans-Regular',
  },
});
