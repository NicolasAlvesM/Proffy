import React, { useState, useEffect } from 'react'
import { View,Image,Text,Linking } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import AsyncStorage from '@react-native-community/async-storage'
import api from '../../service/api'
import styles from './styles'
export interface Teacher{
    id:number;
    name:string;
    avatar:string;
    whatsapp:string;
    bio:string;
    subject:string;
    cost:number;
}
interface TeacherProps{
    teacher:Teacher;
    favorited:boolean;
}
const TeacherItem:React.FC<TeacherProps>=({teacher,favorited})=>{
    const [isFavorited,setIsFavorited]=useState(favorited)
    function handleLinkWhatsapp(){
        api.post('connections',{user_id:teacher.id})
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
        
    }
    async function handToggleFavorite(){
        const favorites=await AsyncStorage.getItem('favorites')
            let favoritesArray=[]
            if(favorites)
            favoritesArray=JSON.parse(favorites)
        if(isFavorited){
            const indexFavorites=favoritesArray.findIndex((teachersItem:Teacher)=>{
                return teachersItem.id===teacher.id
            })  
            favoritesArray.splice(indexFavorites,1)
        }else{
            favoritesArray.push(teacher)   
        }
        setIsFavorited(!isFavorited)
        await AsyncStorage.setItem('favorites',JSON.stringify(favoritesArray))
    }
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                style={styles.avatar} 
                source={{uri:teacher.avatar}}/>
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>
            <Text style={styles.bio}>{teacher.bio}</Text>
            <View style={styles.footer}>
                <Text style={styles.price}>Preço/hora{'   '}</Text>
                <Text style={styles.priceValue}>R${teacher.cost}</Text>
                <View style={styles.buttonsContainer}>
                    <RectButton 
                    onPress={handToggleFavorite}
                    style={[styles.favoriteButton,
                        isFavorited ? styles.favorited:{}]}>
                        {isFavorited ? <Image source={unfavoriteIcon}/> 
                            : 
                            <Image source={heartOutlineIcon}/>
                        }
                    </RectButton>
                    <RectButton onPress={handleLinkWhatsapp} style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )   
}
export default TeacherItem  