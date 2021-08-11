import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// icons
import Evil from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const ProfileCardHeader = ({location, contact, role}) => {
  return (
    <View style={styles.container}>
      <View style={styles.locationView}>
        <Evil name="location" color="#355F43" size={25} />
        <Text style={styles.locationText}>{location}</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.rowChild}>
          <MaterialCommunityIcons
            name="phone-in-talk-outline"
            color="#355F43"
            size={30}
          />
          <Text style={styles.rowText}>{contact}</Text>
        </View>
        <View style={styles.rowChild}>
          <Feather name="truck" color="#355F43" size={30} />
          <Text style={styles.rowText}>{role}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileCardHeader;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  locationView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  locationText: {
    fontSize: 15,
    fontFamily: 'DMSans-Medium',
    color: '#355F43',
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  rowChild: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },

  rowText: {
    fontSize: 18,
    fontFamily: 'DMSans-Medium',
    color: '#355F43',
    marginHorizontal: 5,
  },
});
