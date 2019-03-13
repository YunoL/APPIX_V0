import React from 'react'
import { View , Button , TextInput,StyleSheet,Text,Image,ScrollView } from 'react-native'
import {getFilmsPoster} from './API.js'

class Details_Item extends React.Component {
  render() {
      return (
        <View style = {{alignItems : 'center' , backgroundColor : 'blue'}}>
          <Text>Hello Word</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex : 1,
    flexDirection: 'column',
    backgroundColor : 'white'
  },
  image: {
    width: 500,
    height: 300,
    backgroundColor: 'gray',
    justifyContent : 'center'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})

export default Details_Item
