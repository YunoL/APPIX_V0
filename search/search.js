import React from 'react'
import FilmItem from './filmItem.js'
import ListItem from './listitem.js'
import { View , Button , TextInput,StyleSheet,Text,FlatList , ActivityIndicator, ScrollView , Image} from 'react-native'
import {getFilmsFromApiWithSearchedText} from './API.js'
import exemple_post from './exemple_post.js'

class Search extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
         posts: exemple_post,
         refreshing: false,
      }
  }

  _loadInfo = () => {
      this.setState({posts: [] }, () => this.setState({posts: exemple_post}));
  }

  _navigate_vue = (text) => {
    this.props.navigation.navigate(text);
  }

  render(){
    return(
      <View style = {{alignItems : 'center', justifyContent : 'center'}}>
      <Image style = {{height : 1100 , width : 600 }} source = {{uri : 'https://i.pinimg.com/originals/c0/2a/30/c02a30ae72b02c4839683ff85ab510c5.jpg'}}/>
      <View style = {{height : 680 ,marginTop : -1100 }}>
      <ScrollView >
      <View style = {{height : 260 , marginTop : 50 }}>
        <View style = {styles.selection}>
         <Text style = {{color : 'white'}}>Team Selection</Text>
        </View>
        <View styles = {styles.listcontainer}>
          <FlatList
            style = {styles.list , {marginLeft : 10 , marginTop : 5}}
            refreshing = {this.state.refreshing}
            onRefresh = {() => this._loadInfo()}
            data={this.state.posts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <FilmItem film={item} navigate_vue={this._navigate_vue}/>}
            horizontal = {true}
          />
        </View>
      </View>
      <FlatList
        style = {{marginLeft : -5}}
        refreshing = {this.state.refreshing}
        onRefresh = {() => this._loadInfo()}
        data={this.state.posts}
        listKey={(item, index) => index.toString()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item , index}) => <ListItem film={item} index = {index} navigate_vue={this._navigate_vue} load_info={this._loadInfo}/>}
        horizontal = {false}
      />
      </ScrollView>
      </View>
      <Image style = {{ marginTop : -50 , height : 130 , width : 130}} source = {{uri:'https://png.pngtree.com/element_our/md/20180620/md_5b29c1599467a.png'}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  selection : {
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : 30,
    marginLeft : 18,
    marginRight : 200,
    backgroundColor :'#192f6a',
    borderTopRightRadius : 30,
    borderTopLeftRadius : 30,
    borderWidth : 2,
    flex : 1.5,
    borderColor : 'white'
  },
  textinput: {
    marginLeft : 50,
    borderColor : '#000000',
    borderWidth : 1,
    marginRight : 50,
    paddingLeft : 30,
    backgroundColor : 'white'
  },
  listcontainer: {
    borderWidth : 1,
    borderLeftWidth : 1,
    borderRightWidth : 1,
    borderColor : 'black'
  }
})

export default Search
