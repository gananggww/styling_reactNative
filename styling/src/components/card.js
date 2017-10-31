import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
} from 'react-native';
// <Image style={styles.img} source={{ uri: `${item.img}` }}/>
import { TabNavigator } from 'react-navigation'

export default class App extends Component<{}> {
  constructor () {
    super()
    this.state = {
      dataList: [
        {
          title: 'Shingeki No Kyojin',
          category: 'Anime',
          img: 'http://animecalendar.net/uploads/covers/Shingeki%20no%20Kyojin.jpg',
          desc: 'Beberapa ratus tahun yang lalu, umat manusia hampir punah akibat ulah para raksasa.',
          user: {
            username: 'gananggww',
            pic: 'http://soul-fi.ipn.pt/wp-content/uploads/2014/09/user-icon-silhouette-ae9ddcaf4a156a47931d5719ecee17b9.png'
          }
        }, {
          title: 'Boruto',
          category: 'Anime',
          img: 'http://animefanatika.co.za/afwp/wp-content/uploads/2017/02/Bento-Boruto-Cover-510x287.jpg',
          desc: 'Boruto adalah putra atau anak dari Uzumaki Naruto, sang Hokage Ketujuh yang begitu dihormati karena jasanya dalam menyelamatkan dunia',
          user: {
            username: 'gananggww',
            pic: 'http://soul-fi.ipn.pt/wp-content/uploads/2014/09/user-icon-silhouette-ae9ddcaf4a156a47931d5719ecee17b9.png'
          }
        }, {
          title: 'Black Clover',
          category: 'Anime',
          img: 'http://img1.ak.crunchyroll.com/i/spire2/7ea147f793ae6e0c622e9ba84cacc8aa1500077968_full.jpg',
          desc: 'Asta adalah seorang anak muda yang mempunyai mimpi menjadi seorang penyihir terhebat di kerajaan.',
          user: {
            username: 'gananggww',
            pic: 'http://soul-fi.ipn.pt/wp-content/uploads/2014/09/user-icon-silhouette-ae9ddcaf4a156a47931d5719ecee17b9.png'
          }
        }, {
          title: 'Kuroko No Basuke',
          category: 'Anime',
          desc: 'Basket dari Sekolah menengah Teikou terkenal dengan memenangkan semua kompetisi',
          img: 'https://vignette2.wikia.nocookie.net/kurokonobasuke/images/c/c9/Bonds_Towards_the_Future_cover.png/revision/latest?cb=20141020141317',
          user: {
            username: 'gananggww',
            pic: 'http://soul-fi.ipn.pt/wp-content/uploads/2014/09/user-icon-silhouette-ae9ddcaf4a156a47931d5719ecee17b9.png'
          }
        },
      ]
    }
  }
  static navigationOptions = {
    title: 'Card',
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.dataList}
          renderItem={({ item }) => {
            return (
              <View style={styles.list}>
                <View style={styles.card}>
                  <View style={styles.header}>
                    <View style={styles.avatarLayer}>
                      <Image style={styles.avatar} source={{ uri: `${item.user.pic}` }}/>
                    </View>
                    <View style={styles.usernameLayer}>
                      <Text style={styles.username}>{item.user.username}</Text>
                    </View>
                  </View>
                  <View style={styles.images}>
                    <Image style={styles.img} source={{ uri: `${item.img}` }}/>
                  </View>
                  <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subtitle}>{item.category}</Text>
                  </View>
                  <View style={styles.descLayout}>
                    <Text style={styles.desc}>{item.desc}</Text>
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

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#EEEEEE',
    padding: 12
  },
  card: {
    borderWidth:0,
    borderRadius: 10,
    height: 400,
    backgroundColor: 'white'
  },
  images: {
    width: 340,
    height: 200,
  },
  img: {
    resizeMode: 'cover',
    width: 335.5,
    height: 200
  },
  header: {
    flex: 2,
    flexDirection:'row',
    alignItems:'center',
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
  },
  usernameLayer: {
    paddingLeft: 9,
  },
  username: {
  },
  avatarLayer: {
    // backgroundColor: '#ABABAB',
    paddingRight: 9,
    width:40
  },
  avatar: {
    borderRadius:40,
    width: 40,
    height: 40,
  },
  content: {
    padding: 10,
    // backgroundColor: '#ABABAB',
    height:60,
    borderBottomWidth: 0.3,
    borderColor: '#d6d7da',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  descLayout: {
    padding: 10,
    // backgroundColor: '#ABABAB',
    height:100
  },
  desc: {
    fontStyle: 'italic',
    fontSize: 15
  }
});
