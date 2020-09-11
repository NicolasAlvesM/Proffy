import React, { useState, useEffect } from 'react'
import { View,ScrollView,Text,TextInput } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import {Feather} from '@expo/vector-icons'
import api from '../../service/api'
import styles from './styles'
function TeacherList(){
    const [isfiltesVisible,setIsFiltesVisible]=useState(false)
    const [teaches,setTeachers]=useState([])
    const [favorites,setFavorites]=useState<number[]>([])
    const [subject,setSubject]=useState('')
    const [week_day,setWeek_day]=useState('')
    const [time,setTime]=useState('')

    useEffect(()=>{
        AsyncStorage.getItem('favorites').then(response=>{
            if(response){
                const favoritedTeachers=JSON.parse(response)
                const favoritedTeachersIds=favoritedTeachers.map((item:Teacher)=>item.id)
                setFavorites(favoritedTeachersIds)
            }
        })
    },[favorites])

    async function handleToggleFiltersSubmit(){
        const response=await api.get('/classes',{
            params:{
                subject,week_day,time
            }
        })
        setIsFiltesVisible(false)
        setTeachers(response.data.classes)
    }   
    function handleToggleFiltersVisible(){
        setIsFiltesVisible(!isfiltesVisible)
    }
    return(
        <View style={styles.container}>
            <PageHeader title='Proffys disponíveis' headerRight={
                <BorderlessButton onPress={handleToggleFiltersVisible}>
                    <Feather name="filter" size={20} color='#fff'/>
                </BorderlessButton>
            }>
                {isfiltesVisible && (
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Materia</Text>
                    <TextInput 
                        value={subject}
                        onChangeText={text=>setSubject(text)}
                        style={styles.input}
                        placeholder="Qual a matéria?"
                        placeholderTextColor="#c1bccc"
                    ></TextInput>
                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput style={styles.input}
                            value={week_day}
                            onChangeText={text=>setWeek_day(text)}
                            placeholder="Qual o dia?"
                            placeholderTextColor="#c1bccc"
                            ></TextInput>
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horario</Text>
                            <TextInput style={styles.input}
                            value={time}
                            onChangeText={text=>setTime(text)}
                            placeholder="Qual horario?"
                            placeholderTextColor="#c1bccc"
                            ></TextInput>
                        </View>
                    </View>
                    <RectButton
                     onPress={handleToggleFiltersSubmit}
                     style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>
                </View>)
                }
            </PageHeader>
            <ScrollView
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal:16,
                paddingBottom:16
            }}
            >
            {teaches.map((teacher:Teacher)=>{
                return (
                <TeacherItem 
                    key={teacher.id} 
                    teacher={teacher}
                    favorited={favorites.includes(teacher.id)}
                    />
                )
            })}
            </ScrollView>
        </View>
    )
}
export default TeacherList