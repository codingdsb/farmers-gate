import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// components
import BuyerCardButton from './BuyerCardButton';

const BuyerCard = ({
  buyerImgSrc,
  commodityImgSrc,
  businessName,
  commodity,
  price,
  dispatchDate,
  location,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={buyerImgSrc} style={styles.buyerImg} />
        <View style={styles.headerTextView}>
          <Text style={styles.buyerName}>Buyer Name</Text>
          <Text style={styles.duration}> · 2h ago</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Image source={commodityImgSrc} style={styles.itemImg} />
        <View style={styles.businessInfo}>
          <Text style={styles.businessNameStyle}>{businessName}</Text>
          <Text style={styles.businessMetaData}>Commodity- {commodity}</Text>
          <Text style={styles.businessMetaData}>Price- ₹{price}</Text>
          <Text style={styles.businessMetaData}>Commodity- {dispatchDate}</Text>
          <Text style={styles.businessMetaData}>Commodity- {location}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <BuyerCardButton text="Call" />
        <BuyerCardButton text="Response" />
      </View>
    </View>
  );
};

export default BuyerCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#D9D9D9',
    borderBottomWidth: 0,
    shadowColor: '#393e46',
    /* for ios */
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 0,
    /* for ios */
    elevation: 5,
    margin: 5,
    width: 330,
    height: 250,
    padding: 20,
  },

  header: {
    flex: 1,
    flexDirection: 'row',
  },

  headerTextView: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 15,
  },

  buyerName: {
    color: '#355F43',
    fontWeight: 'bold',
    fontFamily: 'DMSans-Regular',
  },

  duration: {
    color: '#355F43',
    fontWeight: '100',
    fontSize: 12,
    marginTop: 3,
    marginLeft: 5,
  },

  buyerImg: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },

  body: {
    flex: 1,
    flexDirection: 'row',
    marginTop: -20,
  },

  itemImg: {
    height: 50,
    width: 50,
    marginTop: 5,
  },

  businessInfo: {
    marginLeft: 15,
  },

  businessNameStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'DMSans-Regular',
  },

  businessMetaData: {
    fontSize: 13,
    fontWeight: '100',
    fontFamily: 'DMSans-Regular',
  },

  footer: {
    flex: 1,
    flexDirection: 'row',
  },
});
