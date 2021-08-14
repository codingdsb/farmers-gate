import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Card from '../../components/Card';

const OrderCard = () => {
  return (
    <>
      <Card
        backgroundColor="white"
        height={250}
        customStyle={{
          paddingHorizontal: 0,
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <View style={styles.subview}>
          <Text style={styles.headerNewOrder}>New Order</Text>
          <Text style={styles.headerDate}>15/6/2021</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: 1,
            marginVertical: 2,
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}
        />
        <View style={[styles.subview, {justifyContent: 'space-around'}]}>
          <View style={styles.commodityView}>
            <Image
              source={require('../../../assets/images/potato.jpeg')}
              style={styles.commodityImage}
            />
            <Text style={styles.commodityName}>Potatoes</Text>
          </View>
          <View style={styles.aboutCommodityView}>
            <Text style={styles.aboutCommodityText}>Quantity: 20 Packets</Text>
            <Text style={styles.aboutCommodityText}>
              Dispatch Date: 16/6/2021
            </Text>
            <TouchableOpacity
              style={{
                height: 40,
                width: 200,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: 'rgba(0,0,0,0.3)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 6,
                backgroundColor: 'rgba(0,0,0,0.2)',
              }}>
              <Text
                style={{
                  color: '#355F43',
                  fontSize: 16,
                  fontFamily: 'DMSans-Medium',
                }}>
                Update Status
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: 1,
            marginVertical: 2,
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}
        />
        <View style={styles.subview}>
          <Text style={styles.footerText}>Order Amount</Text>
          <Text style={styles.footerText}>₹100000</Text>
        </View>
      </Card>
    </>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  subview: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 6,
  },
  headerNewOrder: {
    fontFamily: 'DMSans-Bold',
    fontSize: 18,
  },
  headerDate: {
    fontFamily: 'DMSans-Regular',
    fontSize: 18,
  },

  footerText: {
    fontFamily: 'DMSans-Regular',
    fontSize: 16,
  },

  commodityView: {
    display: 'flex',
    alignItems: 'center',
  },

  aboutCommodityView: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },

  aboutCommodityText: {
    fontFamily: 'DMSans-Regular',
    fontSize: 16,
  },

  commodityImage: {
    height: 75,
    width: 75,
    borderRadius: 100,
  },

  commodityName: {
    fontFamily: 'DMSans-Regular',
    fontSize: 15,
    color: '#355F43',
    marginTop: 10,
  },
});
