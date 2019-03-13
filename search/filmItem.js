import React from 'react'
import { View , Button , TextInput,StyleSheet,Text,Image,TouchableOpacity} from 'react-native'
import {getFilmsPoster} from './API.js'
import Swiper from 'react-native-swiper'
import LinearGradient from 'react-native-linear-gradient';

class FilmItem extends React.Component {

  _change_like(love){
    love = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1024px-Heart_coraz%C3%B3n.svg.png';
    console.log(love);
    return(love);
  }

  render() {
      const navigate_vue = this.props.navigate_vue;
      const film = this.props.film;
      var a = 0;
      var love = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/WikiFont_uniE033_-_heart_-_red.svg/1024px-WikiFont_uniE033_-_heart_-_red.svg.png';

      return (
        // <Swiper
        // style = {{height : 760, marginTop : 10}}
        // showsButtons = {false}
        // index = {1}>
        // <View style = {styles.slide1}>
        //   <Text>Hello Word</Text>
        // </View>

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
                <Image style = {{height : 75 , width : 75}} source={{uri:love}}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        // <View style = {styles.slide2}>
        //   <Text>Hello Word</Text>
        // </View>
        // </Swiper>
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
    marginTop : -54,
    backgroundColor : '#192f6a',
    borderTopRightRadius : 10 ,
    borderColor : 'black' ,
    flexDirection : 'row'
  },
  main_container: {
    height: 200,
    width : 100,
    flexDirection: 'column',
    marginLeft : 8,
  },
  button_container: {
    flex : 0.6 ,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center'
  },
  image: {
    width: 100,
    height: 160,
    backgroundColor: 'gray',
    justifyContent : 'center',
    borderWidth : 2,
    borderColor : 'white',
    borderRadius : 10
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
slide1: {
  height : 630,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'red',
},
slide2: {
  height:630,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#97CAE5',
},
slide3: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#92BB',
}
})

export default FilmItem
