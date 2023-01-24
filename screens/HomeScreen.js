import { StyleSheet, Text, View,TouchableOpacity, FlatList,Div } from 'react-native'
import {useNavigation} from '@react-navigation/core'
import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect} from 'react'
import { auth } from '../firebase'
import {collection, onSnapshot} from 'firebase/firestore';
import {db} from '../firebase'
import Createtask from '../Createtask';
import Deletetask from '../Deletetask';


const HomeScreen = () => {
  const navigation =useNavigation()

  const [people, setPeople] =useState([])
  const[loading, setLoading]= useState(false)
  const handleSignOut =()=>{
    auth
      .signOut()
      .then(()=>{
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }
  useEffect(()=> {
    setLoading(true)
    const tasksQuery = collection(db, 'tasks')
    onSnapshot(tasksQuery,(snapshot) => {
      let tasksList =[]
      snapshot.docs.map((doc) => tasksList.push({...doc.data(), id: doc.id}))
      setPeople(tasksList)
      setLoading(false)
    })
  })

  const renderItem=({item}) =>(
    <View style={{marginTop: 10}}> 
        <Text>{item.data}</Text>
    </View>
  )

  return (
    <>
      <View style={styles.container_1}>
        
        <Text>Data & Hora</Text>
        <Createtask/>
        
        <FlatList data={people}
        renderItem={renderItem}
        keyExtractor={(item)=> item.id}  />
        </View>
      
      <View style={styles.container}>
      <Text>Email:{auth.currentUser?.email} </Text>
      <TouchableOpacity
        onPress={handleSignOut} 
       style={styles.button}>
        <Text style={styles.buttonText}>Sign out </Text>
        </TouchableOpacity>
    </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    padding:20
  },
  input:{
    backgroundColor:'white',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:10,
    marginTop:5,
},
  flatstyle:{
    justifyContent: 'center',
    alignItems:'center',
    
  },
  container_1:{
    flex:1,
    justifyContent: 'space-between',
    alignItems:'center',
    margintop:60,
    padding:15,
    marginBottom:35,
  },
  button:{
    backgroundColor:'#13AED4',
    width:'60%',
    padding:15,
    borderRadius:10,
    AlignItems:'center',
    marginTop:40,
},
buttonText:{
    color:'white',
    fontWeight:'700',
    fontSize:16
}
})