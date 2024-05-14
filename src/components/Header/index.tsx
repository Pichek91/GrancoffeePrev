import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "react-native";


export const Header = () => {

    return (
        <View style={{
          alignItems:'center',
          justifyContent:'center',
          width: '100%',
          height: 50,
          backgroundColor:'black',
        }}
        >
          <Text style={{
            color:'white',
          }}>GRANCOFFEE Preventivas!</Text>
          <StatusBar style="auto" />
        </View>
      );
    }