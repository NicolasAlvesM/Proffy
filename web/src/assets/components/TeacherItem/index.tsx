import React from 'react'
import whatsappIcon from "../../images/icons/whatsapp.svg"
import api from '../../../services/api'
import "./styles.css"
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
}
const TeacherItem:React.FC<TeacherProps>=({teacher})=>{
    function createNewConnections(){
        api.post('connections',{user_id:teacher.id})
    }
    return(<article className="teacher-item">
    <header>
        <img src={teacher.avatar} alt={teacher.name}/>
        <div>
            <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
        </div>
    </header>
    <p>{teacher.bio}</p>
    <footer>
        <p>
            Preço/Hora:
            <strong>R${teacher.cost}</strong>
        </p>
        <a target="_blank"
         onClick={createNewConnections} href={`https://wa.me/${teacher.whatsapp}`}>
            <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
        </a>
    </footer>
</article>)
}
export default TeacherItem