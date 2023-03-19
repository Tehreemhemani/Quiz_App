import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Home from '../Screens/Home';
import Quiz from '../Screens/Quiz';
import Result from '../Screens/Result';



const Stack = createStackNavigator();
const Navigation = () =>{

    return( 
    
<NavigationContainer>

  <Stack.Navigator>

      <Stack.Screen 
      options={{headerShown:false}}
      name="Home"  
      component = {Home} />

      <Stack.Screen options={{headerShown:false}} 
      name="Quiz" 
      component = {Quiz} />

      <Stack.Screen options={{headerShown:false}} 
      name="Result"  
      component = {Result} />

        


       
       </Stack.Navigator>


    </NavigationContainer>

    );
    };







    

export default Navigation;