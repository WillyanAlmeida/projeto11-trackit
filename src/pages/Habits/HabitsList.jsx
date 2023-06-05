import styled from "styled-components";
import delet from '../../assets/delet.png';
import { UserContext } from "../../Context"
import { useContext } from "react"
import axios from "axios";

export default function HabitsList({ list }) {
    const { user, setGet } = useContext(UserContext);    
    
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    function DeletHabit(y){
       if (confirm('Deseja excluir esse hábito?')){
        const deletex = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${list.id}`, config)
        deletex.then(x => setGet(y))
        deletex.catch(x => console.log(x));}        
    }

    return (
        <>
            <List data-test="habit-container" >
                <h4 data-test="habit-name" >{list.name}</h4>
                {console.log(list.days)}
                <WeekDays>
                    <Day data-test="habit-day" id="0" stats={list.days.includes(0) ? true : false} >D</Day>
                    <Day data-test="habit-day" id="1" stats={list.days.includes(1) ? true : false} >S</Day>
                    <Day data-test="habit-day" id="2" stats={list.days.includes(2) ? true : false} >T</Day>
                    <Day data-test="habit-day" id="3" stats={list.days.includes(3) ? true : false} >Q</Day>
                    <Day data-test="habit-day" id="4" stats={list.days.includes(4) ? true : false} >Q</Day>
                    <Day data-test="habit-day" id="5" stats={list.days.includes(5) ? true : false} >S</Day>
                    <Day data-test="habit-day" id="6" stats={list.days.includes(6) ? true : false} >S</Day>
                </WeekDays>
                <img data-test="habit-delete-btn" onClick={DeletHabit} src={delet}></img>
            </List>           
        </>
    )
}

const List = styled.div`
    margin-bottom: 10px;
    position: relative;
    width: 340px;
    height: 0 auto;
    background: #FFFFFF;
    border-radius: 5px;
    padding-top: 10px;
    padding-left: 15px;
   h4{
    margin: 0;
    height: 100%;
   }
   img{
    position: absolute;
    right: 10px;
    top: 11px;
   }
`

const WeekDays = styled.div`
    display: flex;
    margin-top: 12px;
    margin-bottom: 12px;
    gap: 4px;
`

const Day = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
    align-items: center;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.stats ? '#ffffff' : '#dbdbdb'};
    width: 30px;
    height: 30px;
    background: ${props => props.stats ? '#cfcfcf' : '#ffffff'};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
`