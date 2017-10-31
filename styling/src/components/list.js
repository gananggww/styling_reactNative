import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  List,
  FlatList,
  Image
} from 'react-native';

export default class App extends Component<{}> {
  constructor () {
    super()
    this.state = {
      dataList: [
        {title: 'Shingeki No Kyojin'}, {title: 'Boruto'}, {title: 'Black Clover'}, {title: 'Kuroko No Basuke'},
      ]
    }
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
                    <Image style={ styles.image } source={{ uri: 'http://www.free-avatars.com/data/media/37/cat_avatar_0597.jpg' }} />
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
