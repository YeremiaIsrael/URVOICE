import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import {Header,Inputs,ButtonOne} from '../../components'

const Login = () => {
  return (
    <View style={{flex:1,flexDirection:'column',backgroundColor:"#fff"}}>
      <Header title1="Ur-Voice" title2="music library" color="#fff"/>
      <View style={{width:'100%',position:'absolute',alignItems:'center',bottom:165}}>
        <Inputs holder="Email address" bottom={20}/>
        <Inputs holder="Password"/>
        <ButtonOne title='LOGIN' tColor='#fff' color='#7688B6' radius={50}/>
      </View>
    </View>
  )
}

export default Login
