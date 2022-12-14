import { useState } from "react"
import { Button, TextInput, View, StyleSheet } from "react-native"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { db } from "../../db"
import React from "react"
import { style } from "../../styles/baseCss"


const Register = ()=>{
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSubmit = async ()=>{
        if(email && password){

            const auth = getAuth(db)
            
            try {
                // Tenta logar com email e senha fornecido para saber se já existe cadastro
                const signIn = await signInWithEmailAndPassword(auth, email, password)
                if(signIn){
                    console.log({msg:"Usuário já cadastrado"})
                    return;
                }
            } catch{
                // Cria um novo usuário no banco de dados
                const signUp = await createUserWithEmailAndPassword(auth, email, password)
                if(signUp){
                    console.log({msg:"Usuario criado com sucesso!"})
                    console.log({signUp}) 
                }else{
                    console.log({msg:"Houve um erro ao tentar criar um cadastro"})
                }
            }      
        }
    }

    return(
        <View style={style.container}>
            <TextInput placeholder="Email" onChangeText={setEmail} />
            <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry />
            <Button title="Cadastrar" onPress={handleSubmit} />
        </View>
    )
}



export default Register