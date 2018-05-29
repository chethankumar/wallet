import React from 'react';
import { Button, Text, Card, Avatar, FormInput, FormLabel, List, ListItem } from 'react-native-elements';
import { RkButton, RkTabView, RkText } from 'react-native-ui-kitten';
import { View, ScrollView, Platform, Image, FlatList, TouchableOpacity, CameraRoll, Dimensions } from 'react-native';
import Icon from 'react-native-ionicons';
import RNFetchBlob from 'react-native-fetch-blob';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import styles from '../MainPageStyle';

const visaCard = require('../../../../assets/images/visacard2.png');
const masterCard = require('../../../../assets/images/mastercard.png');

export const ENTRIES1 = [
  {
    cardNumber: '4000 0210 4688 8484',
    valid: '06/99',
    name: 'Some Name',
    type: 'visa',
    balance: '$46000000',
    transactions: [
      {
        name: 'Transfer from',
        type: 'Visa 6600 8800 0066 0088',
        date: 'May 1',
        amount: '$200',
      },
    ],
  },
  {
    cardNumber: '4000 0210 4688 8484',
    valid: '06/99',
    name: 'Some Name',
    type: 'mastercard',
    balance: '$86000000',
    transactions: [
      {
        name: 'Transfer from',
        type: 'Visa 6600 8800 0066 0088',
        date: 'May 4',
        amount: '$200',
      },
      {
        name: 'Apple',
        type: 'Purchase',
        date: 'May 6',
        amount: '$400',
      },
    ],
  },
  {
    cardNumber: '4000 0210 4688 8484',
    valid: '06/99',
    name: 'Some Name',
    type: 'mastercard',
    balance: '$76000000',
    transactions: [
      {
        name: 'Transfer from',
        type: 'Visa 6600 8800 0066 0088',
        date: 'May 8',
        amount: '$200',
      },
    ],
  },
  {
    cardNumber: '4000 0210 4688 8484',
    valid: '06/99',
    name: 'Some Name',
    type: 'visa',
    balance: '$66000000',
    transactions: [
      {
        name: 'Transfer from',
        type: 'Visa 6600 8800 0066 0088',
        date: 'May 10',
        amount: '$200',
      },
    ],
  },
];

export default class CardTab extends React.Component {
  constructor(props) {
    super(props);
    this.renderCard = this.renderCard.bind(this);
    this.setSelectedCard = this.setSelectedCard.bind(this);
    this.renderTransactionList = this.renderTransactionList.bind(this);
    this.state = {
      selectedCard: {},
    };
  }

  setSelectedCard(card) {
    this.setState({
      selectedCard: card || {},
    });
  }

  renderTransactionList(transaction) {
    return (
      <View style={{ width: '100%', height: 40 }}>
        <Text >{transaction.item.name}</Text>
      </View>
    );
  }

  renderCard({ item, index }) {
    const viewWidth = Dimensions.get('window').width;

    return (
      <View style={{ width: viewWidth, padding: 10 }}>
        <Image
          style={{ width: '100%', resizeMode: 'cover' }}
          source={item.type === 'visa' ? visaCard : masterCard}
        />

        <Text style={styles.cardNumberLabel}>{item.cardNumber}</Text>
        <Text style={styles.cardNameLabel}>{item.name}</Text>
        <Text style={styles.cardValidLabel}>VALID THRU</Text>
        <Text style={styles.cardValid}>{item.valid}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.tabContainer}>
        <Text style={styles.tabHeader}>Your Cards</Text>
        <Carousel
          data={ENTRIES1}
          renderItem={this.renderCard}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width}
          layout="stack"
          layoutCardOffset={18}
          onSnapToItem={(slideIndex) => { this.setSelectedCard(ENTRIES1[slideIndex]); }}
        />
        <Text style={styles.balanceLabel}>BALANCE</Text>
        <Text style={styles.balance}>{this.state.selectedCard.balance}</Text>
        <List>
          <FlatList
            data={this.state.selectedCard.transactions}
            style={{ width: '100%' }}
            renderItem={transaction => (
              <View style={styles.transactionItemWrapper}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View>
                    <Text style={{ fontFamily: 'CircularStd-Bold' }}>{`${transaction.item.name}`}</Text>
                    <Text style={{ fontFamily: 'CircularStd-Book', paddingTop: 4 }}>{transaction.item.type}</Text>
                  </View>
                  <View style={{ alignItems: 'center' }} >
                    <Text style={{ fontFamily: 'CircularStd-Bold', fontSize: 20 }}>{transaction.item.amount}</Text>
                    <Text style={{ fontFamily: 'CircularStd-Book', fontSize: 10 }}>{transaction.item.date}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </List>
      </View>
    );
  }
}
