import React, {useState} from 'react'
  import { StyleSheet, Text, View,TouchableOpacity, TextInput, Pressable } from 'react-native'
  
  import {collection,addDoc} from 'firebase/firestore';
  import {db} from './firebase'


  export default function Createtask(){
  const [tasks, setTasks] =useState({data: ''})

    function addTask(){
        const tasksdb=collection(db,'tasks')
        addDoc(tasksdb,{
            data:tasks.data
        })
    }


return(
<View>
     <TextInput
     placeholder="Data"
     value={tasks.data}
     onChangeText={(text)=> setTasks({...tasks, data: text})}/>
     


     <TouchableOpacity onPress={addTask} style={[styles.but1]}>
        <Text>Create Task</Text>
      </TouchableOpacity>
      </View>
  
  )
}
  const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: 'center',
      alignItems:'center'
    },
    but1:{
      backgroundColor:'#13AED4',
      width:'50%',
      length:'10%',
      fontSize:'15%',
      padding:5,
      borderRadius:5,
      AlignItems:'center',
      marginTop:5,
      marginBottom:30
    }
  },)
