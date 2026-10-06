import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import utility from "../utils";

export default function topBar(){
    return (
        <View>
            <Text>Compi</Text>
            <View>
                <Image style={topBarStyle.iconSize}
                source={{uri: "../assets/more.webp"}}
                />
            </View>
        </View>
    );
}

const topBarStyle = StyleSheet.create( {
    iconSize:{
        height:"20px"
    }
})