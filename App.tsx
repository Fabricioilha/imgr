import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { View } from "react-native";
import Home from "./components/Home";
import Landing from "./components/auth/Landing";
import Loading, { LoadingStyle } from "./components/Loading";
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
      setTimeout(()=>{
        setinsLoading(false)
      }, 1500)
    })
  },[])

  if(isLoggedIn){
    return <Home />
  }
  return(
    <NavigationContainer>
      {insLoading &&
        <View style={LoadingStyle.div1}>
          <Loading />
        </View>
      }
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Register" component={Register} />        
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App