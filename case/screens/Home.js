import { StyleSheet,View, Text,SafeAreaView,StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from 'react-native-vector-icons';
import { TouchableHighlight } from 'react-native';



export function HomeScreen() {
    return (
      <View style={styles.centerTextOnEmptyPageStyle}>
        <Text>Home Screen</Text>
      </View>
    );
}




//************** Style sheet Styles *****************************

const styles = StyleSheet.create({

    centerTextOnEmptyPageStyle:{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center' ,
    },
    centerItemsStyle:{
      alignItems: 'center', 
      justifyContent: 'center', 
    },
    straightHorizontalLine:
    {
      borderBottomColor: 'rgba(0, 0, 0,0.1)',
      borderBottomWidth: 1,
      height:1,
      width:"90%",
      marginBottom:'2%',
    },
});