import React from 'react';
import { ButtonGroup, Text, Card, Avatar, FormInput, FormLabel, Button } from 'react-native-elements';
import { RkButton, RkTabView, RkText } from 'react-native-ui-kitten';
import { View, ScrollView, Platform, Image, FlatList, TouchableOpacity, CameraRoll } from 'react-native';
import Icon from 'react-native-ionicons';
import PropTypes from 'prop-types';
import RNFetchBlob from 'react-native-fetch-blob';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../MainPageStyle';

const buttons = ['100', '200', '300', '400', '500', '600', '700', '800'];

export default class SettingsTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(index) {
    this.setState({
      selectedIndex: index,
    });
  }

  render() {
    const { selectedIndex } = this.state;
    return (
      <View style={styles.tabContainer}>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}
        >
          <Text style={styles.tabHeader}>Settings</Text>
          <View style={styles.logoutBtnWrapper}>
            <RkButton
              style={styles.logoutBtn}
              contentStyle={styles.logoutBtnText}
              onPress={() => this.props.updateLoginStatus(false)}
            >Logout
            </RkButton>
          </View>
        </View>
        <View style={styles.settingsWrapper}>
          <Text style={styles.settingsLabel}>Change limit for single Card Transaction</Text>
          <Text style={{ fontFamily: 'CircularStd-Book', marginBottom: 40 }}>(In thousand dollars)</Text>

          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ height: 80 }}
          />

          <View style={styles.settingsChangeBtnWrapper}>
            <RkButton
              style={styles.settingsChangeBtn}
              contentStyle={{ fontFamily: 'CircularStd-Bold' }}
            >Change
            </RkButton>
          </View>
        </View>
      </View>
    );
  }
}


SettingsTab.defaultProps = {
  updateLoginStatus: () => {},
};

SettingsTab.propTypes = {
  updateLoginStatus: PropTypes.func,
};
