import { useState } from "react"
import { Button, TextInput, View } from "react-native"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { db } from "../../db"
import React from "react"


const Register = ()=>{
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSubmit = async ()=>{
        const auth = getAuth(db)
        if(email && password){
            try {
                const signIn = await createUserWithEmailAndPassword(auth, email, password)
                console.log(signIn) 
            } catch (error: any) {
                if(error.status == 400){
                    console.log("BATEU 400")
                }
                console.log({error});            
            }
        }
    }

    return(
        <View>
            <TextInput placeholder="Email" onChangeText={setEmail} />
            <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    )
}
export default Register