import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'

const Demolist = () => {

const [data,setData]=useState([
    {
        id:'1',
        value:0
    }
])
const increment=(index)=>{

    const temp=data;
    temp[index].value=temp[index].value+1
    setData(temp);
       



}
const decrement=(index)=>{
    const temp=data;
    temp[index].value=temp[index].value-1
    setData(temp);
       

}

const render=({item,index})=>(

    <>
    <View style={{flexDirection:'row',justifyContent:'space-between',width:170}}>
        <TouchableOpacity style={{padding:8,backgroundColor:'lightgray'}} onPress={()=>increment(index)}>
            <Text style={{fontSize:30}}>+</Text>
        </TouchableOpacity>
        <Text style={{fontSize:30}}>{item.id}</Text>
        <TouchableOpacity style={{padding:8,backgroundColor:'lightgray',}} onPress={()=>decrement(index)} >
            <Text style={{fontSize:30}} >-</Text>
        </TouchableOpacity>
    </View>
    
  </>
)

  return (
   
<>
<FlatList
data={data}
renderItem={render}
keyExtractor={(item)=>item.id}

/>
 </>
  
  )
}

export default Demolist