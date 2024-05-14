import { View, Text, StyleSheet } from "react-native"
import { StatusBar } from "expo-status-bar";

export default function Home(){
    return (
      <View style={styles.container}>
        <Text>GRANCOFFEE Preventivas!</Text>
        <Text>Pichek Developer</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });