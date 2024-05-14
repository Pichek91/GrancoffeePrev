import { View, Text, StyleSheet } from "react-native"
import { Header } from "../../components/Header/index.tsx";

export default function Home(){
    return (
      <View style={{ flex:1, paddingVertical:30}}>
        <Header/>
      </View>
    );
}
