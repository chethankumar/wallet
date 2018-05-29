import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 0,
  },
  text: {
    color: 'red',
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FCFAF2',
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  backgroundImg: {
    flex: 1,
    resizeMode: 'stretch',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  loginText: {
    fontFamily: 'CircularStd-Medium',
    fontSize: 40,
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
    color: '#444860',
  },
  appName: {
    width: '100%',
    paddingTop: 0,
    color: '#444860',
    fontFamily: 'Cookie-Regular',
    fontSize: 40,
    textAlign: 'center',
  },
  loginBox: {
    margin: 20,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#AFB7C6',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6,
    shadowOpacity: 10,
  },
  label: {
    fontFamily: 'CircularStd-Medium',
  },
  usernameWrapper: {
    marginTop: 40,
    marginBottom: 40,
  },
  passwordWrapper: {
    marginBottom: 60,
  },
  username: {
    fontFamily: 'CircularStd-Book',
  },
  password: {
    fontFamily: 'CircularStd-Book',
  },
  loginBtnWrapper: {
    alignItems: 'center',
    shadowColor: '#A8ABAF',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6,
    shadowOpacity: 60,
  },
  loginBtn: {
    backgroundColor: '#8863fa',
    borderRadius: 40,
    fontSize: 20,
    shadowColor: '#7D8491',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 6,
    shadowOpacity: 60,
  },
  loginBtnText: {
    fontFamily: 'CircularStd-Bold',
    fontWeight: 'bold',
  },

});

export default styles;
