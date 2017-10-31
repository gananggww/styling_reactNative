import Lists from '../components/list.js'
import Card from '../components/card.js'
import { TabNavigator } from 'react-navigation';

const Navigator = TabNavigator({
  Card: {
    screen: Card
  },
  List: {
    screen: Lists
  }
});
console.log(Navigator);

export default Navigator
