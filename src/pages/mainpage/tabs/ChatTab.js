import React from 'react';
import { Button, Text, Card, Avatar, FormInput, FormLabel } from 'react-native-elements';
import { RkButton, RkTabView, RkText } from 'react-native-ui-kitten';
import { View, ScrollView, Platform, Image, FlatList, TouchableOpacity, CameraRoll } from 'react-native';
import Icon from 'react-native-ionicons';
import RNFetchBlob from 'react-native-fetch-blob';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../MainPageStyle';

export default class ChatTab extends React.Component {
  render() {
    return (
      <View style={styles.tabContainer}>
        <Text style={styles.tabHeader}>Chat</Text>
      </View>
    );
  }
}
