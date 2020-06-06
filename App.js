import React, { useState } from 'react';
import { StyleSheet,View,Text,ScrollView} from 'react-native';
import Add from './componets/add';


export default function App() {

  

  return (

    <View style={styles.content}>
      
      <ScrollView><Add /></ScrollView>
    
    </View>
  );

  
}

const styles = StyleSheet.create({
  navbar: {
    
    backgroundColor:'coral',
    fontSize:30,
    alignContent:'center',
    fontWeight:'bold',
    textAlign:'center',
    padding:20,
    
    justifyContent:'center',


  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});