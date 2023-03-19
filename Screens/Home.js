import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'

import Title from '../Components/Title'

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Title titleText='QUIZZLER' />
      <View style={styles.Image}>
      <Image source={{
        uri:"https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png"
      }}
      style={styles.Imagestyles}
      />
        
      
         </View>

     <TouchableOpacity 
     onPress={() =>{ props.navigation.navigate("Quiz");}} 
     style={styles.button}>
            <Text style={styles.buttontext}> Start </Text>
          </TouchableOpacity>
        
      </View>
      

    
  )
}

export default Home

const styles = StyleSheet.create({
  Imagestyles:{
    height:300,
    width:300,
},

Image:{
alignItems:"center",
justifyContent:"center",
flex:1

},

container:{
  paddingTop:40,
  paddingHorizontal:20,
  height:"100%"
  
},

button:{
  width:"100%",
  backgroundColor:"#1A759F",
  padding:16,
  borderRadius:16,
  alignItems:"center",
  marginBottom:30 
},

buttontext:{
  fontSize:24,
  fontWeight:"600",
  color:"white"

},


})