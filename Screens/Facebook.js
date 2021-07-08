import React from 'react';
import { Text,View,Image,StyleSheet } from 'react-native';

export default class Facebook extends React.Component{
render(){
    return(
        <View style={styles.contanier}>
        <Image style={styles.fbImage}
        source={require('../Fb.png')}
        />    
        </View>
    )
}
}

const styles = StyleSheet.create({
    fbImage:{
        width:100,
        height:100
    },
    contanier:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    }
})