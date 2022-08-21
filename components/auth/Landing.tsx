import { Button, Text, View } from "react-native"

const Landing = ({navigation}: any)=>{
    return(
        <View>
            <Text> Abraça a Causa e vai </Text>
            <Button title="Register" onPress={()=> navigation.navigate("Register")} />
            <Button title="Login" onPress={()=> navigation.navigate("Login")} />
        </View>
    )
}

export default Landing