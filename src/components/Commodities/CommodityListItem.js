import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const CommodityListItem = ({imageSrc, title}) => {
  return (
    <View style={styles.container}>
      <Image source={imageSrc} style={styles.img} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CommodityListItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },

  img: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },

  title: {
    marginLeft: 10,
    fontFamily: 'DMSans-Regular',
    color: '#355F43',
  },
});
