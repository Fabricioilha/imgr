import { useState } from "react"
import { Button, TextInput, View} from "react-native"
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth"
import { auth, Googleprovider } from "../../db"
import React from "react"
import { style } from "../../styles/baseCss"


const Login = ()=>{
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    
    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, Googleprovider)
        } catch (error) {
            console.log({error})
        }
    }

    const handleSubmit = async ()=>{

        if(email && password){           
            try {
                // Tenta logar com email e senha fornecido
                const signIn = await signInWithEmailAndPassword(auth, email, password)
                console.log({signIn})                
            } catch (error){
                console.log({error});
            }      
        }
    }

    return(
        <View style={style.container}>
            <TextInput placeholder="Email" onChangeText={setEmail} />
            <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry />
            <Button title="Entrar" onPress={handleSubmit} />            
            <Button title="Login With Google" onPress={handleGoogleLogin}/>
        </View>
    )
}



export default Login