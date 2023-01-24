  import {deleteDoc,doc} from "firebase/firestore";
  import {  Text, View,TouchableOpacity, Pressable } from 'react-native'
  import * as firebase from "firebase/firestore";
  import {db} from './firebase'
  

  export default function Deletetask({id}){
    
  
 
    function deleteTask(){
        const task=doc(db,'tasks', id)
        deleteDoc(task)
    }

return(
<View>
    <Pressable onPress={deleteTask}>
        <Text> Delete </Text>
    </Pressable>
      </View>
 
  )
}