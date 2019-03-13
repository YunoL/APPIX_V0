import React from 'react'
import { View , Button , TextInput,StyleSheet,Text,Image,ScrollView } from 'react-native'


class ComView extends React.Component {
  render() {
    const coms = this.props.coms;
      return (
        <View>
          <Text style = {{borderWidth : 2 , borderColor : 'white' , marginTop : 15 , borderRadius : 10 , marginLeft : 5 ,textAlign : 'center', color : 'white' , fontSize : 16}}>{coms.coms}</Text>
        </View>
      )
  }
}

export default ComView
