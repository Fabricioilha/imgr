import { useState } from "react"
import { Button, TextInput, View, StyleSheet } from "react-native"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { db } from "../../db"
import React from "react"
import { style } from "../../styles/baseCss"


const Login = ()=>{
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSubmit = async ()=>{
        if(email && password){
            const auth = getAuth(db)            
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
        </View>
    )
}



export default Login