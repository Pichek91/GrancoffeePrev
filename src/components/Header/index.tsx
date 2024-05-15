import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "react-native";
import { styles } from "./style";


export const Header = () => { 

    return (
        <View style={styles.container}>
          <Text style={styles.text}>
            GRANCOFFEE Preventivas!
          </Text>
          <StatusBar style="auto" />
        </View>
      );
    }
