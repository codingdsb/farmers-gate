import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

// components
import Card from '../components/Card';
import Accordion from '../components/Accordion';

// icons
import Evil from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OrderCard from './OrderScreens/OrderCard';
import PaymentCard from './OrderScreens/PaymentCard';

// swiper
import Swiper from 'react-native-screens-swiper/components/Swiper';

const Orders = () => {
  const style = {
    borderActive: {
      borderColor: '#355F43',
      borderWidth: 2,
    },
    pillLabel: {
      color: '#355F43',
      fontFamily: 'DMSans-Bold',
      fontSize: 16,
      marginBottom: 10,
      marginTop: -5,
    },
    activeLabel: {
      color: '#355F43',
    },
    pillContainer: {
      backgroundColor: '#f2f2f2',
    },
  };

  const data = [
    {
      tabLabel: 'Orders',
      component: OrderCard,
      props: {}, // (optional) additional props
    },
    {
      tabLabel: 'Payments',
      component: PaymentCard,
      props: {}, // (optional) additional props
    },
  ];

  return (
    <ScrollView>
      {/* Profile Card  */}
      <Card backgroundColor="#355F43" height={200} customStyle={profileCard}>
        <Image
          source={require('../../assets/images/profile.jpg')}
          style={styles.profilePic}
        />
        <View style={styles.infoView}>
          <Text style={styles.profileName}>Anup Prajapati</Text>
          <View style={styles.viewWithIcon}>
            <Evil
              name="location"
              size={25}
              color="#FFFFFF"
              style={{marginLeft: -6}}
            />
            <Text style={styles.infoText}>Ghaziabad, Uttar Pradesh</Text>
          </View>
          <View style={styles.viewWithIcon}>
            <Feather name="truck" size={20} color="#FFFFFF" />
            <Text style={[styles.infoText, {marginLeft: 4, marginTop: 2}]}>
              Prajapati Traders
            </Text>
          </View>
          <Text style={styles.infoText}>Commodity: Potato</Text>
        </View>
      </Card>

      {/* Profile Card  */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          marginTop: 10,
        }}>
        {/* Verified Buyer  */}

        <View style={{flex: 1, height: 3, backgroundColor: '#355F43'}} />
        <View style={{marginTop: -10}}>
          <FontAwesome5
            name="award"
            size={35}
            color="#355F43"
            style={{textAlign: 'center'}}
          />
          <Text
            style={{
              textAlign: 'center',
              color: '#355F43',
              fontFamily: 'DMSans-Bold',
            }}>
            Verified Buyer
          </Text>
        </View>
        <View style={{flex: 1, height: 3, backgroundColor: '#355F43'}} />
      </View>

      {/* Verified Buyer  */}

      {/* connect card */}
      <Card backgroundColor="white" height={150} customStyle={connectCard}>
        <TouchableOpacity style={styles.btn}>
          <View style={styles.connectCard__view}>
            <AntDesign name="filetext1" size={40} color="white" />
          </View>
          <Text style={styles.connectCard__text}>Add Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <View style={styles.connectCard__view}>
            <MaterialCommunityIcons
              name="phone-in-talk-outline"
              size={40}
              color="white"
            />
          </View>
          <Text style={styles.connectCard__text}>Call</Text>
        </TouchableOpacity>
      </Card>
      {/* connect card  */}

      {/* Pay card  */}

      <Card backgroundColor="#ffffff" height={150} customStyle={paycard}>
        <View style={styles.paycardDetails}>
          <Text style={styles.paycard__greytext}>Order Amount: ₹100000</Text>
          <Text style={[styles.paycard__greytext, {marginTop: 5}]}>
            Balance Amount Pending
          </Text>
          <Text style={styles.paycard__blacktext}>₹50000</Text>
        </View>
        <TouchableOpacity style={styles.paybtn}>
          <Text style={styles.paytext}>Pay</Text>
        </TouchableOpacity>
      </Card>

      {/* Pay card  */}

      {/* Address Details  */}
      <Accordion
        header="Address Details"
        bodyBackgroundColor="white"
        bodyCardHeight={150}
        bodyCustomStyle={{
          marginTop: -14,
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        children={
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'DMSans-Regular',
              textAlign: 'justify',
            }}>
            No. 167, 2nd floor, 3rd cross RK garden, behind gowri apartment,
            Mathikere, Ghazibadh, Uttar Pradesh 560054
          </Text>
        }
      />
      {/* Address Details  */}

      {/* Bank Details  */}
      <Accordion
        header="Bank Details"
        bodyBackgroundColor="#355F43"
        bodyCardHeight={200}
        headerCustomStyle={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          height: 80,
          alignItems: 'flex-start',
        }}
        bodyCustomStyle={{
          marginTop: -50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        children={
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <View style={{marginRight: 10}}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 20,
                  fontFamily: 'DMSans-Regular',
                  marginBottom: 20,
                }}>
                Bank Name
              </Text>
              <MaterialCommunityIcons name="bank" color="white" size={100} />
            </View>
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'DMSans-Regular',
                  color: '#D9D9D9',
                }}>
                Holder Name
              </Text>
              <Text
                style={{
                  fontSize: 19,
                  fontFamily: 'DMSans-Regular',
                  color: '#FFFFFF',
                }}>
                Anup Prajapati
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'DMSans-Regular',
                  color: '#D9D9D9',
                }}>
                Account Number
              </Text>
              <Text
                style={{
                  fontSize: 19,
                  fontFamily: 'DMSans-Regular',
                  color: '#FFFFFF',
                }}>
                5129 78xx xxxx 7654
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'DMSans-Regular',
                  color: '#D9D9D9',
                }}>
                IFSC code
              </Text>
              <Text
                style={{
                  fontSize: 19,
                  fontFamily: 'DMSans-Regular',
                  color: '#FFFFFF',
                }}>
                SBIN0040083
              </Text>
            </View>
          </View>
        }
      />
      {/* Bank Details  */}

      {/*<OrderNavigation />*/}
      <Swiper data={data} isStaticPills={true} style={style} />
    </ScrollView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  profilePic: {
    height: 120,
    width: 120,
    borderRadius: 12,
  },

  infoView: {
    marginLeft: 8,
    alignItems: 'stretch',
  },

  profileName: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'DMSans-Medium',
  },

  viewWithIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 3,
  },

  infoText: {
    color: 'white',
    marginLeft: 4,
    marginVertical: 3,
    fontFamily: 'DMSans-Regular',
  },

  connectCard__view: {
    height: 75,
    width: 75,
    backgroundColor: '#355F43',
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btn: {
    display: 'flex',
    alignItems: 'center',
  },

  connectCard__text: {
    marginTop: 10,
    color: '#9D9D9D',
    fontFamily: 'DMSans-Bold',
    fontSize: 17,
  },

  paycard__greytext: {
    textAlign: 'center',
    fontSize: 17,
    color: '#9D9D9D',
    fontFamily: 'DMSans-Medium',
  },

  paycard__blacktext: {
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'DMSans-Medium',
  },

  paybtn: {
    height: 50,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#355F43',
    borderRadius: 25,
  },

  paytext: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'DMSans-Bold',
  },
});

// profile card styles

const profileCard = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

// connect card styles

const connectCard = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
};

// paycard styles

const paycard = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
};
