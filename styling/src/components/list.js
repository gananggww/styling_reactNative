import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
} from 'react-native';
import { TabNavigator } from 'react-navigation';


export default class App extends Component<{}> {
  constructor () {
    super()
    this.state = {
      dataList: [
        {
          title: 'Shingeki No Kyojin',
          img: 'http://animecalendar.net/uploads/covers/Shingeki%20no%20Kyojin.jpg'
        }, {
          title: 'Boruto',
          img: 'http://animefanatika.co.za/afwp/wp-content/uploads/2017/02/Bento-Boruto-Cover-510x287.jpg'
        }, {
          title: 'Black Clover',
          img: 'http://img1.ak.crunchyroll.com/i/spire2/7ea147f793ae6e0c622e9ba84cacc8aa1500077968_full.jpg'
        }, {
          title: 'Kuroko No Basuke',
          img: 'https://vignette2.wikia.nocookie.net/kurokonobasuke/images/c/c9/Bonds_Towards_the_Future_cover.png/revision/latest?cb=20141020141317'
        },
      ]
    }
  }
  static navigationOptions = {
    title: 'List',
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.dataList}
          renderItem={({ item }) => {
            return (
              <View style={styles.list}>
                <View style={styles.column}>
                  <View style={ styles.imageLayer }>
                    <Image style={ styles.image } source={{ uri: `${item.img}` }} />
                  </View>
                  <View style={ styles.content }>
                    <Text style={ styles.title }>{item.title}</Text>
                    <Text style={ styles.subtitle }>{item.title}</Text>
                  </View>
                </View>
              </View>
            )
          }}
        />
      </View>
    );
  }
}

console.log(App.navigationOptions);
const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5F5F5',
    borderRadius: 0,
    borderWidth: 0.3,
    borderColor: '#E0E0E0'
  },
  column: {
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
    width: 360,
    height: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitle: {
    fontSize: 12,
  },
  image: {
    height:35,
    width: 35,
    borderRadius: 12,
  },
  imageLayer: {
    padding: 10,
  },
  content: {
    paddingLeft: 5
  }
});
