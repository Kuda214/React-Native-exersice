import { StyleSheet,View, Text,SafeAreaView,StatusBar } from 'react-native';
import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from 'react-native-vector-icons';
import { TouchableHighlight } from 'react-native';
import * as data from "../assets/data/orders.json";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { render } from 'react-dom';
import { Component } from 'react';


var jsonData  = JSON.stringify(data);
console.log(data[0].pharmacyName);

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export function OrderScreen() {
    return (

        <NavigationContainer independent={true}>
        <Tab.Navigator  
        screenOptions={{tabBarStyle: styles.topHeadingStyle} }>
            <Stack.Screen
            name="Open Orders"
            component={OpenOrders}
            />

            <Stack.Screen 
            name="Closed Orders" 
            component={ClosedOrders} />
        </Tab.Navigator>
        </NavigationContainer>
    );
  }

  function OpenOrders(){
    return(
        <View style={styles.centerItemsStyle}>
            <Text style={styles.openOrdersHeadingStyle}>Open Orders</Text>
            <Text style={styles.openOrdersStatusStyle}>You have no open orders</Text>
            <View style={styles.yelloButtonStyle}>
                <Text style={styles.yellowButtonContentStyle}>Go to Shop</Text>
            </View>
        </View>
    );
  }

  function ClosedOrders(){

    const [orders,setOrders] = React.useState([]);
    React.useEffect(()=>{
        // console.log(data);
        // // fetch("../assets/data/orders.json").then((res) => res.json())
        // .then((res) => {
        //     console.log(res +"response")
        //     this.setState({ orderInfor: JSON.stringify(data) }, () => {
        //     })
        // })
        // .catch(function(error) {
        //     console.log(error);
        // });
        setOrders(data);


        // console.log(" Hi " + data);
    })

    console.log("data length- " + Object.keys(data).length -1+ " yasss");
    var jsonDataLength = Object.keys(data).length - 1;
    console.log(data[0]);

    const arr = [];
    for(let i=0; i<jsonDataLength;i++)
    {
        console.log(data[i].orderID);
        arr.push(data[i]);
    }

    console.log(arr);

    return(
        <View>
            {/* <View style={styles.centerItemsStyle}> */}
            <Text style={styles.submittedOrderssHeadingStyle}>Submitted Orders</Text>
            {/* </View> */}
           <SafeAreaView style={styles.orderScreenSafeViewStyle}>
                    <ScrollView style={styles.orderScreenScrollViewStyle}>
            {arr.map(or => {
                return (  
                    <View style={styles.centerItemsStyle}>
                        <View style={styles.orderScreenContainersStyle}>
                                <View style={styles.orderScreenStatusOfOrderStyle}>
                                <Ionicons name="ellipse" style={getStatusCircleColor(or.orderStatus)} size={10}></Ionicons>
                                <Text style={styles.orderScreenStatusLabel}>{or.orderStatus}</Text>
                                </View>
                
                                <View style={{flexDirection:'row'}}>
                                <Text style={{fontWeight:'bold',fontSize:16, marginRight:'0%'}}>{or.pharmacyName}</Text>
                                <Ionicons name="chevron-forward" size={20} style={styles.forwardButtonStyle}></Ionicons>
                                </View>

                                <Text style={{fontSize:16}}>Sum Total: R{or.orderTotal}</Text>
                            </View>            
                    </View> 
      
                );
            })}    
                    </ScrollView>
            </SafeAreaView>     
            
        </View>
    );

    
}

function getStatusCircleColor(stats)
{
    if(stats == "Cancelled") //red
    {
        return {
            color:"#F00",
        }
    }
    else if(stats == "Submitted" || stats=="Delivered") //green
    {
        return {
            color:"#2ccc27"
        }
    }
    else if(stats == "Out for delivery") //orange
    {
        return {
            color: "#ffd000"
        }
    }
}

  //************** Style sheet Styles *****************************

const styles = StyleSheet.create({

    centerItemsStyle:{
        alignItems: 'center', 
        justifyContent: 'center', 
      },

    topHeadingStyle:
    {      
        backgroundColor:'#dcebf2' ,
        display:"flex"
    },
    OrderScreenTopNavBarStyle:
    {
      marginTop:'7%',
      width: '100%',
      height: '5%',
      flexDirection: 'row',
      marginBottom: '5%', 
  
    },
    orderScreenToggleNavBarStyle:
    { 
      paddingLeft: '2%',
      paddingTop: '2%',
      // paddingBottom:'5%',
      paddingRight: '2%',
      borderRadius:20,
      color:'black',
      backgroundColor:'rgba(167, 190, 201,0.2)',
      marginTop: '0%',
      height:'85%',
      marginLeft: '15%',
    },
    orderScreenContainersStyle:
    {
      width:'95%', 
    //   height:'100%',
      backgroundColor:'rgba(167, 190, 201,0.2)',
      borderRadius:12,
      paddingTop:'4%',
      paddingBottom:'5%',
      paddingLeft:'4%',
      paddingRight:'4%',
      marginBottom:'4%'
    },
    orderScreenStatusOfOrderStyle:
    {
      flexDirection:'row',
    },
    orderStatusCircleRed:
    {
      color:"#F00",
    },
    orderStatusCircleGreen:
    {
      color:"#2ccc27",
    },
    orderScreenStatusLabel:
    {
      fontSize: 16,
      marginLeft:'2%', 
      marginTop:'-2%',
      color:"#000",
    },
    orderScreenSafeViewStyle:
    {
    //   flex:1,
      paddingTop: StatusBar.currentHeight,
      // height:'40%',
    },
    orderScreenScrollViewStyle:
    {
      // backgroundColor:"blue",
      marginHorizontal:20,
    //   paddingBottom:'-5%'
        
    },
    openOrdersHeadingStyle:
    {
        fontWeight: 'bold',
        fontSize:24,
        marginTop:'5%',
    },
    submittedOrderssHeadingStyle:
    {
        fontWeight: 'bold',
        fontSize:22,
        textAlign:'left',
        marginLeft:"5%",
        marginTop:'5%',
    },
    openOrdersStatusStyle:
    {
        fontSize: 16,
        marginTop:'2%',
    },
    yelloButtonStyle:
    {
        backgroundColor: '#ffd000',
        width:'45%',
        alignItems: 'center',
        paddingTop:'3%',
        paddingBottom:'3%',
        paddingLeft:'3%',
        paddingRight:'3%',
        marginTop:'5%',
        borderRadius:10,
    },
    yellowButtonContentStyle:
    {
        fontSize:18,
        fontWeight: 'bold',
    },
    forwardButtonStyle:
    {
        marginRight:'2%',
        textAlign: 'right',
        flex:1,
        


    }
  });
  
  
  
  
  

