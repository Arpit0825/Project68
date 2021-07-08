import React from 'react';
import { Text,View,Image,StyleSheet } from 'react-native';

export default class Instagram extends React.Component{
render(){
    return(
        <View style={styles.container}>
        <Image style={styles.InstaImage}
        source={require('../Insta.png')}
        />   
        </View>
    )
}
}

const styles = StyleSheet.create({
    InstaImage:{
        width:100,
        height:100
    },
    container:{
        flex:5,
        justifyContent:'center',
        alignItems:"center"

    }
})