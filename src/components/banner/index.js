import React,{Fragment} from "react"
import {Image,Text} from 'react-native'
import styles from './styles';

var imagens = [
    require("../../Img/1.jpg"),
    require("../../Img/2.jpg"),
    require("../../Img/3.jpg"),
    require("../../Img/4.jpg"),
  ];

export default function BannerMovies(){
    return(
        <>
        <Text style = {styles.textBanner}>Em cartaz</Text>
        <Image style = {styles.imageBanner} source={imagens[Math.floor(Math.random() * 4)]}/>
        </>
    );
}