import React,{useState, FormEvent} from "react"
import PageHeader from "../../assets/components/PageHeader"
import warningIcon from '../../assets/images/icons/warning.svg'
import Input from "../../assets/components/Input"
import Textarea from "../../assets/components/Textarea"
import Select from "../../assets/components/Select"
import api from '../../services/api'
import {useHistory} from 'react-router-dom'
import './styles.css'
function TeacherForm(){
    const history=useHistory()
    api.get("classes?week_day=0&subject=Portugu%C3%AAs&time=8%3A00").then(response=>{
        console.log(response.data)
    })
    const [name,setName]=useState('')
    const [avatar,setAvatar]=useState('')
    const [whatsapp,setWhatsapp]=useState('')
    const [bio,setBio]=useState('')
    const [subject,setSubject]=useState('')
    const [cost,setCost]=useState('')
    const [scheduleItems,setScheduleItems]=useState([
        {week_day:0,from:'',to:''}])
    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            {week_day:0,from:'',to:''}
        ])
    }
    function handleCreateClasse(e:FormEvent){
        e.preventDefault()
        api.post('classes',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost:Number(cost),
            schedule:scheduleItems}).then(()=>{
                alert('Cadastro realizado com sucesso')
                history.push('/')
        }).catch(()=>{alert('Erro no cadastro')})
    }
    function setScheduleItemValue(position:number,field:string,value:string){
        const updatedScheduleItems=scheduleItems.map((scheduleItem,index)=>{
            if(index===position)
                return {...scheduleItem,[field]:value}
            return scheduleItem
        })
        setScheduleItems(updatedScheduleItems)
    }
    return (
    <div id="page-teacher-form" className="container">
        <PageHeader title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
        />
        <main>
            <form onSubmit={handleCreateClasse}>
            <fieldset>
                <legend>Seus dados</legend>
                <Input label="Nome completo" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <Input label="Avatar" name="avatar" value={avatar} onChange={(e)=>{setAvatar(e.target.value)}}/>,
                <Input label="Whatsapp" name="whatsapp" value={whatsapp} onChange={(e)=>{setWhatsapp(e.target.value)}}/>
                <Textarea name="bio" label="Bio" value={bio} onChange={(e)=>{setBio(e.target.value)}}/>
            </fieldset>
            <fieldset>
                <legend>Sobre a aula</legend>
                <Select value={subject} onChange={(e)=>{setSubject(e.target.value)}} options={[
                    {value:'Artes',label:'Artes'},
                    {value:'Biologia',label:'Biologia'},
                    {value:'Ciências',label:'Ciências'},
                    {value:'Educação fisica',label:'Educação fisica'},
                    {value:'Física',label:'Física'},
                    {value:'Matematica',label:'Matematica'},
                    {value:'Português',label:'Português'},
                    {value:'Química',label:'Química'},
                    {value:'Historia',label:'Historia'},
                    {value:'Geografia',label:'Geografia'},
                    {value:'Inglês',label:'Inglês'}
                ]} label="Materia" name="subject"/>
                <Input value={cost} onChange={(e)=>{setCost(e.target.value)}} label="Custo da sua hora por aula" name="cost"/>,
            </fieldset>
            <fieldset>
                <legend>
                    Horários disponíveis
                <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
                </legend>
                {scheduleItems.map((item,index)=>(
                    <div key={item.week_day} className="schedule-item"> 
                    <Select 
                        value={item.week_day}
                        onChange={e=>setScheduleItemValue(index,'week_day',e.target.value)} 
                        options={[
                        {value:'0',label:'Domingo'},
                        {value:'1',label:'Segunda-feira'},
                        {value:'2',label:'Terça-feira'},
                        {value:'3',label:'Quarta-feira'},
                        {value:'4',label:'Quinta-feira'},
                        {value:'5',label:'Sexta-feira'},
                        {value:'6',label:'Sabado'},
                    ]} label="Dia da semana" name="week_day"/>

                    <Input value={item.from}
                     onChange={e=>setScheduleItemValue(index,'from',e.target.value)} 
                     name="from" label="Das" type="time"/>

                    <Input value={item.to}
                    onChange={e=>setScheduleItemValue(index,'to',e.target.value)} 
                     name="to" label="Até" type="time"/>
                    </div>
                ))}
            </fieldset>
            <footer>
                <p><img src={warningIcon} alt="Aviso importante"/>
                Importante! <br/>
                Preencha todos os dados
                </p>
                <button type="submit">Salvar cadastro</button>
            </footer>
            </form>
        </main>
    </div>
    )
}
export default TeacherForm