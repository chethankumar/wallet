import React from 'react';
import { Button, Text, Card, Avatar, FormInput, FormLabel } from 'react-native-elements';
import { RkButton, RkTabView, RkText } from 'react-native-ui-kitten';
import { View, ScrollView, Platform, Image, FlatList, TouchableOpacity, CameraRoll } from 'react-native';
import Icon from 'react-native-ionicons';
import RNFetchBlob from 'react-native-fetch-blob';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import styles from './MainPageStyle';
import CardTab from './tabs/CardTab';
import ChatTab from './tabs/ChatTab';
import SettingsTab from './tabs/SettingsTab';

const renderTab = (isSelected, title, icon) => {
  const color = (!isSelected) ? 'cornflowerblue' : 'white';
  return (
    <View
      style={{
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#8863fa',
      }}
    >
      <Icon name={icon} style={{ color, fontSize: 24, alignSelf: 'center' }} />
      <RkText style={{ color }}>{title}</RkText>
    </View>);
};

export default class MainPage extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <RkTabView style={{ borderWidth: 0 }} headerContainerStyle={{ backgroundColor: '#8863fa', borderColor: '#8863fa', padding: 4 }} tabsUnderContent>
          <RkTabView.Tab title={selected => renderTab(selected, 'Card', 'ios-card')}>
            <CardTab />
          </RkTabView.Tab>
          {/* <RkTabView.Tab title={selected => renderTab(selected, 'Chat', 'ios-chatbubbles')}>
            <ChatTab />
          </RkTabView.Tab> */}
          <RkTabView.Tab title={selected => renderTab(selected, 'Settings', 'ios-settings')}>
            <SettingsTab updateLoginStatus={this.props.updateLoginStatus} />
          </RkTabView.Tab>

        </RkTabView>
      </View>
    );
  }
}


MainPage.defaultProps = {
  updateLoginStatus: () => {},
};

MainPage.propTypes = {
  updateLoginStatus: PropTypes.func,
};
