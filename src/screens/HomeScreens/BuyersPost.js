import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

// components
import BuyerCard from '../../components/BuyerCard';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BuyersPost = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.btnClickContain}
        underlayColor="#042417">
        <View style={styles.btnContainer}>
          <MaterialIcons
            name="filter-alt"
            size={25}
            color="#355F43"
            style={styles.btnIcon}
          />
          <Text style={styles.btnText}>Filter</Text>
        </View>
      </TouchableHighlight>

      <ScrollView style={styles.buyersList}>
        <BuyerCard
          buyerImgSrc={require('../../../assets/images/buyer.jpg')}
          commodityImgSrc={require('../../../assets/images/potato.jpeg')}
          businessName="Business Name"
          commodity="Potato"
          price={5000}
          dispatchDate="16/7/2021"
          location="Bangalore, Karnataka"
        />

        <BuyerCard
          buyerImgSrc={require('../../../assets/images/buyer.jpg')}
          commodityImgSrc={require('../../../assets/images/potato.jpeg')}
          businessName="Business Name"
          commodity="Potato"
          price={5000}
          dispatchDate="16/7/2021"
          location="Bangalore, Karnataka"
        />
      </ScrollView>
    </View>
  );
};

export default BuyersPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },

  btnClickContain: {
    justifyContent: 'center',
    backgroundColor: '#EDEFF0',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnIcon: {
    height: 25,
    width: 25,
  },
  btnText: {
    fontSize: 18,
    color: '#355F43',
    marginLeft: 10,
    fontFamily: 'DMSans-Regular',
  },

  buyersList: {
    marginVertical: 10,
    marginHorizontal: 2,
  },
});
