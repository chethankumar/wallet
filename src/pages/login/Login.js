import React from 'react';
import { Text, FormInput, FormLabel } from 'react-native-elements';
import { RkButton } from 'react-native-ui-kitten';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-ionicons';
import RNFetchBlob from 'react-native-fetch-blob';
import LinearGradient from 'react-native-linear-gradient';
import styles from './LoginStyle';

const backgroundImage = require('../../../assets/images/login.png');

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.submitCreds = this.submitCreds.bind(this);
  }

  submitCreds() {
    console.log('submit cred');
    this.props.updateLoginStatus(true);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImg}
          source={backgroundImage}
        />
        <View>
          <Text style={styles.appName}>Wallet</Text>
          <Text style={styles.loginText}>Login</Text>
          <View style={styles.loginBox}>
            <View style={styles.usernameWrapper}>
              <FormLabel labelStyle={styles.label}>USERNAME</FormLabel>
              <FormInput inputStyle={styles.username} />
            </View>
            <View style={styles.passwordWrapper}>
              <FormLabel labelStyle={styles.label}>PASSWORD</FormLabel>
              <FormInput inputStyle={styles.password} />
            </View>
          </View>
        </View>

        <View style={styles.loginBtnWrapper}>
          <RkButton
            style={styles.loginBtn}
            contentStyle={styles.loginBtnText}
            onPress={this.submitCreds}
          >Login
          </RkButton>
        </View>
      </View>
    );
  }
}

Login.defaultProps = {
  updateLoginStatus: () => {},
};

Login.propTypes = {
  updateLoginStatus: PropTypes.func,
};

