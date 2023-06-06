import styled from "styled-components"
import HabitsList from "./HabitsList"
import { UserContext } from "../../Context"
import { useContext, useState, useEffect } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {ThreeDots }from "react-loader-spinner";

export default function Habits() {
    const { user, listhabits, setListhabits, get, setGet, setProgressBar, setListItens, listItens } = useContext(UserContext);
    let [habit, setHabit] = useState('')
    let [days, setDays] = useState([])
    let x =0;
    let [savehabit, setSavehabit] = useState(false)
    let [btstats, setBtstats] = useState(false)
    const navigate = useNavigate()  

    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }
    const bodyParameters = {
        name:  habit ,
        days: days
    };
    useEffect(() => {
        axios.get(
            'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
            config
        ).then(x => setListhabits(x.data)).catch(() => navigate("/"));
    }, [get]);

    function selectDay(e) {
        if (days.includes(e.target.id)) {
            days = days.filter(item => item != e.target.id)
            setDays([...days])
        } else {
            days.push(e.target.id)
            setDays([...days])
        }
        
    }
    useEffect(() => {
        axios.get(
            'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
            config
        ).then(x => setListItens(x.data)).catch(x => console.log(x));
    }, [get]);
    if(listItens.length!=0){
    
        for(let i=0;i<listItens.length;i++){
            if(listItens[i].done){
                x++;
            }
        }
        setProgressBar(x/listItens.length*100)
    }
    function sendhabit(e){
        
        e.preventDefault();
        setBtstats(true)

        const sendhabit = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", bodyParameters, config )
        sendhabit.then((x) => {
            setDays([]);
            setHabit('');
            setSavehabit(false);
            setBtstats(false);
            setGet(x)
        })

        sendhabit.catch(erro => {
            alert(erro.response.data.message);
            setBtstats(false)
        });
    }

    return (
        <HabitContainers>
            {console.log(listhabits)}
            <MyHabitsContainer>

                <AddHabit>
                    <p>Meus hábitos</p>
                    <button data-test="habit-create-btn" onClick={() => savehabit ? setSavehabit(false) : setSavehabit(true)}>+</button>
                </AddHabit>
                {savehabit ?
                    <SaveHabitForm data-test="habit-create-container" onSubmit={sendhabit}>

                        <input data-test="habit-name-input" disabled={btstats} placeholder="nome do hábito" type="text" value={habit} onChange={e => setHabit(e.target.value)} />
                        <WeekDays disabled={btstats}>
                            <Day data-test="habit-day" id="0" stats={days.includes('0') ? true : false} onClick={selectDay} >D</Day>
                            <Day data-test="habit-day" id="1" stats={days.includes('1') ? true : false} onClick={selectDay} >S</Day>
                            <Day data-test="habit-day" id="2" stats={days.includes('2') ? true : false} onClick={selectDay} >T</Day>
                            <Day data-test="habit-day" id="3" stats={days.includes('3') ? true : false} onClick={selectDay} >Q</Day>
                            <Day data-test="habit-day" id="4" stats={days.includes('4') ? true : false} onClick={selectDay} >Q</Day>
                            <Day data-test="habit-day" id="5" stats={days.includes('5') ? true : false} onClick={selectDay} >S</Day>
                            <Day data-test="habit-day" id="6" stats={days.includes('6') ? true : false} onClick={selectDay} >S</Day>
                        </WeekDays>
                        <Options>
                            <span data-test="habit-create-cancel-btn" onClick={()=>{setSavehabit(false)}}>Cancelar</span>
                            {btstats ? <button data-test="habit-create-save-btn" disabled={btstats} type="submit"><ThreeDots color="rgba(255, 255, 255, 1)" height={13} width={51} /></button> : <button data-test="habit-create-save-btn" disabled={btstats} type="submit">Salvar</button>}
                        </Options>
                    </SaveHabitForm> : ""}
                {listhabits.length === 0 ?
                    <h4>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h4> :
                    <>{listhabits.map((x)=> <HabitsList key={x.id} list={x}/>)}</>
                }
            </MyHabitsContainer>

        </HabitContainers>
    )
}

const HabitContainers = styled.div`
    background-color: #E5E5E5;
    height: 100%;
    margin-top: 70px; 
    overflow:scroll;
    margin-bottom: 70px ;  
    padding-bottom: 35px; 
    display:flex;
    flex-direction: column;
    align-items: center;
`

const MyHabitsContainer = styled.div`
        gap: 20px;
        h4{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 17.976px;
            line-height: 22px;
            color: #666666;
            width: 338px;            
            margin-top: 1px;            
        }
`
const AddHabit = styled.div`
    margin-top: 21px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
    margin-left:17px;
    margin-right: 18px;
    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #126BA5;
    button{
        width: 40px;
        height: 35px;
        display:flex;
        justify-content:center;
        text-align: center;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 27px;
        line-height: 34px;
        color: #fff;
    }

`

const SaveHabitForm = styled.form`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    padding-top: 18px;
    padding-left: 18px;
    margin-bottom: 10px;
    input{        
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }
   
`

const WeekDays = styled.div`
    display: flex;
    gap: 4px;
`

const Day = styled.div`
    display: flex;
    justify-content: center;
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
const Options = styled.div`
    margin-top: 29px;
    display:flex;
    justify-content: right;
    align-items:center;
    margin-right: 16px;
    right: 10;
    gap: 25px;   
    span{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        color: #52B6FF;
    }
    button{
        width: 84px;
        height: 35px;
        display:flex;
        justify-content:center;
        text-align: center;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #fff;
    }
`