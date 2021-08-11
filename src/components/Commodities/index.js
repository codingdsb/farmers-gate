import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import CommodityListItem from './CommodityListItem';

// icons
import Feather from 'react-native-vector-icons/Feather';

const Commodities = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.manageBtn}>
        <View style={styles.manageView}>
          <Text style={styles.manageText}>Manage </Text>
          <Feather name="edit-2" color="#355F43" size={18} />
        </View>
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: 'DMSans-Bold',
          color: '#355F43',
          fontSize: 20,
        }}>
        Your Commdities
      </Text>

      <View>
        <CommodityListItem
          imageSrc={require('../../../assets/images/potato.jpeg')}
          title="Potatoes"
        />
      </View>
    </View>
  );
};

export default Commodities;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  manageBtn: {
    alignSelf: 'flex-end',
  },

  manageView: {
    display: 'flex',
    flexDirection: 'row',
  },

  manageText: {
    fontSize: 15,
    color: '#355F43',
    fontFamily: 'DMSans-Medium',
  },
});
