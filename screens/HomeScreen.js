// import React , {useEffect,useState}from "react";
// import { Text } from "react-native";

// const workoutUrl = 'http://localhost:5000/program/1';


// const Home = ()=>
// {
//     const [modalVisible, setModalVisible] = useState(false);
//     const [isLoading, setLoading] = useState(true);
//     const [data, setData] = useState([]);
//     useEffect(() => {
//       axios.get (workoutUrl)
//       .then(res =>{
//         console.log("hi")
//         console.log(res)
//       })
//       .catch(err=>{
//         console.log(err)
//       })
//     }, []);
// return(
//     <div>
 
// <ul>
//     {
//       data.map(workout=> <li key={workout.program_id}>{workout.name}</li>)
//     }
//     </ul>
           
//     </div>
//         );}
// export default Home;

import React, { useState, useEffect } from "react";
import { Box, FlatList, Center, NativeBaseProvider, Text } from "native-base";

export default function CoffeeAutonomous() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const resp = await fetch("http://localhost:5000/program");
    const data = await resp.json();
    setData(data);
    setLoading(false);
  };

  const renderItem = ({ item }) => {
    return (
      <Box px={5} py={2} rounded="md" bg="primary.300" my={2}>
        {item.name}
      </Box>
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <NativeBaseProvider>
      <Center flex={1}>
      <Box> Fetch API</Box>
        {loading && <Box>Loading..</Box>}
        {data && (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.program_id.toString()}
          />
        )}
      </Center>
    </NativeBaseProvider>
  );
  }