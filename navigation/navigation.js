import { createStackNavigator ,createAppContainer} from 'react-navigation'
import Search from '../search/search.js'
import Details_Item from '../search/Details_Item.js'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'HOME',
      headerStyle: {
        backgroundColor: '#1034A6',
        marginTop : -90
      },
    }
  },
  Film_details : {
    screen : Details_Item,
    navigationOptions: {
      title: 'Description'
    }
  }
})
export default createAppContainer(SearchStackNavigator)
