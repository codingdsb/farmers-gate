import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// components
import ProfileCardHeader from './ProfileCardHeader';
import Commdoities from '../Commodities';

const ProfileCard = () => {
  return (
    <View style={styles.card}>
      <ProfileCardHeader
        location="Ghaziabad, Uttar Pradesh"
        contact="9964123456"
        role="Farmer"
      />

      {/* Horizontal Rule  */}
      <View
        style={{
          borderBottomColor: '#355F43',
          borderBottomWidth: 1,
        }}
      />

      <Commdoities />
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    width: 300,
    backgroundColor: '#FFFFFF',
    marginVertical: 20,
    borderRadius: 12,
    paddingVertical: 12,
  },
});
