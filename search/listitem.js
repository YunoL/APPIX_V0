import React from 'react'
import { View , Button , TextInput,StyleSheet,Text,Image,TouchableOpacity, FlatList,ListView,ActivityIndicator} from 'react-native'
import {getFilmsPoster} from './API.js'
import Swiper from 'react-native-swiper'
import ComView from './ComView.js';
import firebase from 'firebase';


class ListItem extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
         com_text : '',
         com : [],
         isLoading : true
      }
  }

    componentWillMount() {
        var config = {
          apiKey: "AIzaSyDPHztV_TFYvA6F51mboJSoRq_vY1ZNouQ",
          authDomain: "appsoin.firebaseapp.com",
          databaseURL: "https://appsoin.firebaseio.com",
          projectId: "appsoin",
          storageBucket: "appsoin.appspot.com",
          messagingSenderId: "1071641365760"
        };

        if (!firebase.apps.length) {
          firebase.initializeApp(config);
        }


        firebase.database().ref('coms' + '/' + this.props.index).on('value', (data) => {
            if (data.toJSON() != null){
              this.setState({com : Object.values(data.toJSON())} , () => this.setState({isLoading : false}));
            }
            else {
              this.setState({com : []} , () => this.setState({isLoading : false}));
            }
        })
      }

  _addcom(path , text) {
    console.log(text);
    firebase.database().ref(path).push(
    {
        coms : text
    }
    ).then(() => {
      console.log('INSERTED !');
    }).catch((error) => {
      console.log(error);
    });
  }
  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }
  _displayCom() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    if (!this.state.isLoading) {
      return(
      <View>
        <View style = {{height : 500}}>
        <ListView
          dataSource={ds.cloneWithRows(this.state.com)}
          enableEmptySections = {true}
          renderRow={(rowData) => <ComView coms={rowData}/>}/>
        </View>
        <View>
        <TextInput
          onChangeText={(text) => this.setState({com_text : text})}
          onSubmitEditing = {() => this._addcom('coms/' + this.props.index, this.state.com_text)}
          style = {styles.textinput}
          placeholder = 'Saivir votre comentaire'/>
        </View>
      </View>
      )
    }
  }

  render() {
      const navigate_vue = this.props.navigate_vue;
      const film = this.props.film;
      var a = 0;
      const load_info = this.props.load_Info;
      var refreshing = false;
      var love = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/WikiFont_uniE033_-_heart_-_red.svg/1024px-WikiFont_uniE033_-_heart_-_red.svg.png';
      return (
        <Swiper
        style = {{height : 650, marginTop : 10}}
        showsButtons = {false}
        index = {1}>
        <View style = {styles.slide1}>
          {this._displayLoading()}
          {this._displayCom()}
        </View>

        <View
          style={styles.main_container}>
          <View style ={{alignItems : 'center'}}>
            <Image
              style={styles.image}
              source={{uri:film.poster_path}}
              />
           </View>
           <TouchableOpacity activeOpacity = {0.7} style = {styles.city_container}>
             <Text style = {{justifyContent : 'center' , fontWeight: 'bold',
             fontSize: 26 , color : 'white'}}>{film.title}</Text>
           </TouchableOpacity>
          <View style={styles.content_container}>
            <View style={styles.button_container}>
              <TouchableOpacity style = {styles.button_container}
              onPress={() => navigate_vue('Film_details') }>
                <Image style = {{height : 100 , width : 100}} source={{uri:love}}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style = {styles.slide2}>
          <View style = {{flex : 1}}>
            <View style = {{flex : 1 , flexDirection : 'row'}}>
              <Image
                source = {{uri : 'https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-background-hd-3.png'}}
                style = {{height : 100 , width : 100}}/>
              <Text style = {{borderColor : 'white' , fontSize : 16 , color : 'white' , marginTop : 36 , marginLeft : 10}}>{film.insta}</Text>
            </View>
            <View style = {{flex : 1 , flexDirection : 'row' , left : 5}}>
              <Image
                source = {{uri : 'https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-background-hd-3.png'}}
                style = {{height : 100 , width : 100}}/>
              <Text style = {{borderColor : 'white' , fontSize : 16 , color : 'white' , marginTop : 36 , marginLeft : 10}}>{film.facebook}</Text>
            </View>
          </View>
          <View style = {{flex : 1.5 , marginLeft : 10}}>
            <Text style = {{color : 'white' , fontSize : 14}}>{film.description}</Text>
          </View>
        </View>
        </Swiper>
      )
    }
}

const styles = StyleSheet.create({
  city_container : {
    alignItems : 'center' ,
    justifyContent : 'center' ,
    marginRight : 150 ,
    borderWidth : 2,
    flex :1,
    borderBottomWidth : 0,
    borderLeftWidth : 0,
    borderRightWidth : 1,
    borderTopWidth : 1,
    marginTop : -32,
    backgroundColor : '#192f6a',
    borderTopRightRadius : 10 ,
    borderColor : 'black' ,
    flexDirection : 'row'
  },
  main_container: {
    height : 630,
    flexDirection: 'column',
    backgroundColor : 'white',
    marginLeft : 5,
    borderWidth : 2,
    borderRadius : 10,
    borderColor : 'white'
  },
  button_container: {
    flex : 0.6 ,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center'
  },
  image: {
    width: 409,
    height: 522,
    backgroundColor: 'gray',
    justifyContent : 'center',
    borderRadius : 10,
    marginTop : 1
  },
  content_container: {
    flex: 3,
    margin: 5
  },
  header_container: {
    flex: 2,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
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
  },
  wrapper: {
},
textinput: {
  borderColor : '#000000',
  borderWidth : 2,
  marginLeft : 38,
  width : 300,
  height : 60,
  marginRight : 50,
  paddingLeft : 30,
  borderColor : 'white',
  borderRadius : 20,
},
loading_container: {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  alignItems: 'center',
  justifyContent: 'center'
},
slide1: {
  height : 630,
  justifyContent: 'center',
  alignItems: 'center',
},
slide2: {
  height:630,
  justifyContent: 'center',
  alignItems: 'center',
},
slide3: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#92BB',
}
})

export default ListItem
