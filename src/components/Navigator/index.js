import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// icons
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Navigator = ({
  variant = 'filled',
  iconType,
  iconName,
  headingText,
  subtitleText,
}) => {
  let displayIcon;

  switch (iconType) {
    case 'entypo':
      displayIcon = () => {
        return (
          <Entypo name={iconName} style={{fontSize: 30, color: 'white'}} />
        );
      };
      break;

    case 'antdesign':
      displayIcon = () => {
        return (
          <AntDesign name={iconName} style={{fontSize: 30, color: 'white'}} />
        );
      };
      break;

    case 'fontawesome':
      displayIcon = () => {
        return (
          <FontAwesome name={iconName} style={{fontSize: 30, color: 'white'}} />
        );
      };
      break;

    case 'feather':
      displayIcon = () => {
        return (
          <Feather name={iconName} style={{fontSize: 30, color: 'white'}} />
        );
      };
      break;

    case 'ionicons':
      displayIcon = () => {
        return (
          <Ionicons name={iconName} style={{fontSize: 30, color: 'white'}} />
        );
      };
      break;

    case 'materialcommunityicons':
      displayIcon = () => {
        return (
          <MaterialCommunityIcons
            name={iconName}
            style={{fontSize: 30, color: 'white'}}
          />
        );
      };
      break;

    case 'materialicons':
      displayIcon = () => {
        return (
          <MaterialIcons
            name={iconName}
            style={{fontSize: 30, color: 'white'}}
          />
        );
      };
      break;
  }

  if (variant === 'outlined') {
    return (
      <TouchableOpacity style={outlined.container}>
        <View>{displayIcon()}</View>
        <View style={outlined.textView}>
          <Text style={outlined.headingTextStyle}>{headingText}</Text>
        </View>
        <View style={outlined.goIconView}>
          <AntDesign name="right" style={outlined.goIcon} />
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={filled.container}>
        <View style={filled.iconBg}>{displayIcon()}</View>
        <View style={filled.textView}>
          <Text style={filled.headingTextStyle}>{headingText}</Text>
          <Text style={filled.subtitleTextStyle}>{subtitleText}</Text>
        </View>
        <View style={filled.goIconView}>
          <AntDesign name="right" style={filled.goIcon} />
        </View>
      </TouchableOpacity>
    );
  }
};

export default Navigator;

const filled = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 325,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 12,
    marginVertical: 12,
    padding: 12,
  },

  iconBg: {
    backgroundColor: '#335F43',
    width: 50,
    height: 50,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },

  textView: {
    marginLeft: 20,
    marginRight: 30,
  },

  headingTextStyle: {
    fontSize: 20,
    color: '#355F43',
    fontFamily: 'DMSans-Medium',
    marginTop: -4,
  },

  subtitleTextStyle: {
    fontSize: 15,
    color: '#355F43',
    fontFamily: 'DMSans-Regular',
    marginTop: 8,
  },

  goIconView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  goIcon: {
    fontSize: 25,
    fontWeight: '100',
    color: '#355F43',
  },
});

const outlined = StyleSheet.create({
  container: {
    width: 325,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 12,
    marginVertical: 12,
    padding: 12,
  },

  textView: {
    marginLeft: 20,
    marginRight: 30,
  },

  headingTextStyle: {
    fontSize: 20,
    color: '#ffffff',
    fontFamily: 'DMSans-Medium',
    marginTop: 4,
  },

  goIconView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  goIcon: {
    fontSize: 25,
    fontWeight: '100',
    color: '#ffffff',
  },
});
