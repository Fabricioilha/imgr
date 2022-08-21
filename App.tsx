import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Home from "./components/auth/Home";
import Landing from "./components/auth/Landing";
import Loading from "./components/auth/Loading";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { auth } from "./db";

const Stack = createNativeStackNavigator();

const App = () => {
  const [insLoading, setinsLoading] = useState(true)
  const [isLoggedIn, setisLoggedIn] = useState(true)

  useEffect(()=>{
    setinsLoading(true)
    auth.onAuthStateChanged( user => {
      if(! user ){
        setisLoggedIn(false)
      }else{
        setisLoggedIn(true)
      }
      setinsLoading(false)
    })
  },[])
  


  if(isLoggedIn){
    return <Home />
  }
  return(
    <NavigationContainer>
      <View>
        {insLoading && <Loading />}
      </View>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Register" component={Register} />        
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App