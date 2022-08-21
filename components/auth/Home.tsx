import { Button, Text, View } from "react-native"
import { auth } from "../../db"
import { style } from "../../styles/baseCss"


const Home = () => {
    const handleSignOut = async ()=>{
        auth.signOut()
    }

    return(
        <View style={style.container}>
            <Text>BEM VINDO VOCE ESTÀ LOGADO</Text>
            <Button title="Sair" onPress={handleSignOut} />
        </View>
    )
}
export default Home