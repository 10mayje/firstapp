import React, { useState } from 'react';
import { StyleSheet, Text, View ,ScrollView,TextInput,Button,FlatList} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

  

export default function Add() {
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    
    
    
    
    const [list,setlist]=useState([
    
    ])
    
   

    const changeHandler=(val)=>{
        setText(val);
    }
    const changeHandler2=(val)=>{
      setText2(val);
  }
 
 
    
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    
    
   
  
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  const showTimepicker = () => {
    showMode('time');
  };

  
  
  
  return (
    <View>
    
    <View>
        <Text style={styles.navbar}>Reminder Note</Text>
      </View>
      
    <View>
        
    <View style={{padding: 20,margin:5,backgroundColor:'gray', alignItems: 'center',
      justifyContent: 'center'}}>
      
      <TextInput
        style={{height: 40,margin:1,padding:5,color:'white',borderBottomWidth:0.5}}
        placeholder="Type topic ...."
        onChangeText={changeHandler}
        defaultValue={text}
      />
    
       <View style={{flexDirection: "row",margin:5,borderStyle:"dotted"}}>
   <View style={{margin:4}}><Button onPress={showDatepicker} title='date ' color='coral'/></View>
       <View style={{margin:4}}><Button onPress={showTimepicker} title="time" color='coral' /></View>
       </View>
         <TextInput 
      style={{
        height: 40,
        margin:1,
        padding:5,
        color:'white',
        borderBottomWidth:0.5,
        width:200,
        alignSelf:"center"
      }}
       placeholder="details of topic"
       onChangeText={changeHandler2}
       defaultValue={text2}
      />
       
       
       <View style={{margin:10,width:200}}>
         <Button  onPress={() => {
    setlist((preTodo)=>{
        return[
            {top:text,detail:text2,date:('0' + date.getDate().toString()).slice(-2) + '/' + ('0' + date.getMonth().toString()).slice(-2) + '/' + date.getFullYear().toString() ,time:('0' + date.getHours().toString()).slice(-2) + ':' + ('0' + date.getMinutes().toString()).slice(-2),key:Math.random().toString()},
            ...preTodo
        ]
    })
  }}
  title='+add' color="coral"/>
  </View>
       
      </View>
     
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    
   
    <View>
       
    
      
      <FlatList data={list}
      renderItem={({item})=>(
      
      
      <View style={{margin:4}}>
        <View style={{borderWidth:10,borderRadius:5,backgroundColor:'#e1b923',borderColor:'#dbb62c'}}>

      <View style={{margin: 2,flexDirection:'row'}}><Text style={{fontSize:20,color:'black'}}>Topic:-{item.top} </Text></View>
      <View style={{margin: 2,flexDirection:'row'}}>
        <Text style={{fontSize:20,color:'black'}}>Date:-{item.date} , </Text> 
        <Text style={{fontSize:20,color:'black'}}>Time:-{item.time} </Text>
      
      </View>
      
      <View style={{margin: 2,flexDirection:'row'}}><Text style={{fontSize:20,color:'black'}}>Detail:-{item.detail} </Text></View>
      <Button title="delete"
       onPress={() => {
        setlist((preTodo)=>{
            return preTodo.filter(todo=>todo.key!=item.key)
        })
      }} color='coral'/>
      
      </View>
      
      
     
       </View>
      )}
      />
     
   
    </View>
  
 

    </View>
    
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