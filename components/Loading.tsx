import { StyleSheet, Text, View } from "react-native"


const Loading = () => {
    return(
        <View>
            <Text style={LoadingStyle.div2}>Loading...</Text>
        </View>
    )
}

export const LoadingStyle = StyleSheet.create({
    div1:{
        position:"absolute",
        height:"100vh",
        width:"100vw",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        zIndex:1
    },
    div2:{
        display:"flex",
        alignItems:"center",
        opacity:0.7,
        justifyContent:"center",
        height:"100vh",
        textAlign:"center",
        width:"100vw",
        backgroundColor:"#000",
        color:"#fff"
    }
})

export default Loading