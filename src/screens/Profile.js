import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';

// components
import ProfileCard from '../components/ProfileCard';
import Navigator from '../components/Navigator';

// icons
import Entypo from 'react-native-vector-icons/Entypo';

const Profile = ({name}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flexGrow: 1, marginVertical: 5}}>
        <Text style={styles.editText}>Edit</Text>
        <View style={styles.main}>
          <Image
            source={require('../../assets/images/profile.jpg')}
            style={styles.profilePic}
          />
          <View style={styles.profileContainer}>
            <Text style={styles.nameStyles}>{name}</Text>
            <ProfileCard />
            <View style={{marginVertical: 8}}>
              <Text style={styles.sectionHeading}>Your Options</Text>
              <Navigator
                headingText="Language"
                subtitleText="Select Your Language"
                iconType="entypo"
                iconName="language"
              />

              <Navigator
                headingText="KYC"
                subtitleText="Complete your KYC"
                iconType="antdesign"
                iconName="scan1"
              />

              <Navigator
                headingText="Bank Account"
                subtitleText="Add bank account details"
                iconType="fontawesome"
                iconName="bank"
              />
            </View>

            <View style={{marginVertical: 8}}>
              <Text style={styles.sectionHeading}>Support</Text>
              <Navigator
                headingText="Frequently Asked Questions"
                subtitleText="Dummy Text"
                iconType="feather"
                iconName="trello"
              />

              <Navigator
                headingText="KYC"
                subtitleText="Complete your KYC"
                iconType="ionicons"
                iconName="chatbox-outline"
              />

              <Navigator
                headingText="Bank Account"
                subtitleText="Add bank account details"
                iconType="materialcommunityicons"
                iconName="phone-in-talk-outline"
              />
            </View>

            <View style={{marginVertical: 8}}>
              <Navigator
                headingText="Privacy Policy"
                iconType="materialicons"
                iconName="verified-user"
                variant="outlined"
              />

              <Navigator
                headingText="Terms & Conditions"
                iconType="antdesign"
                iconName="filetext1"
                variant="outlined"
              />

              <Navigator
                headingText="Logout"
                iconType="feather"
                iconName="lock"
                variant="outlined"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  editText: {
    color: '#355F43',
    textAlign: 'right',
    fontSize: 18,
    fontFamily: 'DMSans-Medium',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  main: {
    marginTop: 50,
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    zIndex: 1,
  },

  profileContainer: {
    flex: 1,
    backgroundColor: '#355F43',
    width: 340,
    marginTop: -70,
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 100,
  },

  nameStyles: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'DMSans-Medium',
  },

  sectionHeading: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'DMSans-Medium',
  },
});
