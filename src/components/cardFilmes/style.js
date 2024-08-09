import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    containerFilmes:{
        paddingTop:20,
        paddingBottom:16,
        paddingRight: 16,
        width: 140,
    },
    titulo:{
        color: "#fff",
        fontSize: 12,
        paddingTop: 8
    },
    textNota:{
        fontSize: 10,
        color: "#fff",
        paddingLeft: 4
    },
    imagem:{
        resizeMode: 'cover',
        width: '100%',
        height: 170,
        borderRadius:8
    },

    sinopse:{
        color: "transparent",
    }


})

export default styles;