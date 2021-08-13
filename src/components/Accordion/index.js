import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Card from '../Card';

// icons
import Ant from 'react-native-vector-icons/AntDesign';

const Accordion = ({
  header,
  children,
  headerCustomStyle,
  bodyCustomStyle,
  bodyBackgroundColor,
  bodyCardHeight,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleIsSet = () => setIsOpen(!isOpen);

  const Header = () => {
    return (
      <TouchableOpacity onPress={toggleIsSet}>
        <Card
          backgroundColor="white"
          height={50}
          customStyle={[
            {
              borderBottomLeftRadius: isOpen ? 0 : 20,
              borderBottomRightRadius: isOpen ? 0 : 20,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
            headerCustomStyle,
          ]}>
          <Text
            style={{
              fontSize: 20,
              color: '#355F43',
              fontFamily: 'DMSans-Medium',
            }}>
            {header}
          </Text>
          {isOpen ? (
            <Ant name="down" color="#355F43" size={25} />
          ) : (
            <Ant name="right" color="#355F43" size={25} />
          )}
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Header />
      {isOpen && (
        <Card
          backgroundColor={bodyBackgroundColor}
          height={bodyCardHeight}
          customStyle={bodyCustomStyle}>
          {children}
        </Card>
      )}
    </View>
  );
};

export default Accordion;

// header
