import { Button, Text, View } from "react-native"
import { style } from "../../styles/baseCss"

const Landing = ({navigation}: any)=>{
    return(
        <View style={style.container}>
            <Text> Abraça a Causa e vai </Text>
            <Button title="Login" onPress={()=> navigation.navigate("Login")} />
            <Button title="Register" onPress={()=> navigation.navigate("Register")}/>
        </View>
    )
}



export default Landing