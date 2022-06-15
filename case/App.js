// In App.js in a new project

import * as React from 'react';
import { StyleSheet,View, Text,SafeAreaView,StatusBar } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { iconn } from './assets/icon.png'

import { HomeScreen } from './screens/Home';
import {OrderScreen} from './screens/Orders';
import { ConsultScreen } from './screens/Consults';
import { ProfileScreen } from './screens/Profile';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator  
        screenOptions={{tabBarStyle: {backgroundColor: '#fff',display:"flex"}} }
      
      >
        <Stack.Screen name ="Home"   component={HomeScreen} 
         options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home" color={color} size={size} />
            ),  
            headerLeft: () => (
              <View>
                <Ionicons name= "ios-arrow-back" style={styles.headerBackStyle} size={25}/> 
                <ion-img src="./assets/icon.png"></ion-img>
              </View>
            ),
            headerTitle :() => (
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>Home</Text>
            ),
           
          }}
        /> 
 
        <Stack.Screen name="Consults" component={ConsultScreen}    
          options={{
              tabBarLabel: 'Consults',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-chatbubbles" color={color} size={size} />
            ),  
            headerLeft: () => (
              <View>
              <Ionicons name= "ios-arrow-back"  size={25} style={styles.headerBackStyle}/> 
              {/* <SvgUri source={require('../case/assets/svg/logo.svg')} /> */}
            </View>
            ),
          }}
        />

        <Stack.Screen name="Orders" component={OrderScreen} 
           options={{
            tabBarLabel: 'Orders',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-cart" color={color} size={size} />
            ),  
            headerLeft: () => (
              <View>
              <Ionicons name= "ios-arrow-back"  size={25} style={styles.headerBackStyle}/> 
              {/* <SvgUri source={require('../case/assets/svg/logo.svg')} /> */}
            </View>            ),
            }}
          />

        <Stack.Screen name="Profile" component={ProfileScreen} 
           options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-person" color={color} size={size} />
            ),  
            headerLeft: () => (
              <View>
              <Ionicons name= "ios-arrow-back"  size={25} style={styles.headerBackStyle}/> 
              {/* <SvgUri source={require('../case/assets/svg/logo.svg')} /> */}
            </View>            ),
            }}
        />

    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;



//************** Style sheet Styles *****************************

const styles = StyleSheet.create({

  headerBackStyle:
  {
    marginLeft:'8%',
    // paddingLeft:1,
  
    
    },

});




