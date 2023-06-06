import styled from "styled-components";
import { UserContext } from "../../Context"
import { ImCheckboxChecked } from "react-icons/im";
import { useContext} from "react"
import axios from "axios";

export default function Itens({ list }) {
    const { user, setGet } = useContext(UserContext);
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    console.log(list)
    function CheckHabits() {
        if (list.done) {
            const Check = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${list.id}/uncheck`, "", config)
            Check.then(x => setGet(x))
            Check.catch(x => console.log(x));
        } else {
            const Check = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${list.id}/check`, "", config)
            Check.then(x => setGet(x))
            Check.catch(x => console.log(x));
        }
    }

    return (
        <>
            <TodayContainer>
                <Item data-test="today-habit-container" >
                    <h1 data-test="today-habit-name" >{list.name}</h1>
                    <span data-test="today-habit-sequence">Sequência atual: <Rec stats={list.done} >{list.currentSequence} dias</Rec></span><br />
                    <span data-test="today-habit-record">Seu recorde:  <Rec stats={list.currentSequence === list.highestSequence && list.currentSequence != 0} >{list.highestSequence} dias</Rec></span>
                </Item>
                <Check data-test="today-habit-check-btn" onClick={CheckHabits} check={list.done}> <ImCheckboxChecked /></Check>
            </TodayContainer>
        </>
    )
}

const TodayContainer = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    img{
        width: 69px;
        height: 69px;
        color: green;
        margin-right: 5px;
        }
    `
const Check = styled.div`
    background-size: 100%;
    color:  ${props => props.check ? '#8FC549' : '#E7E7E7'};
    font-size: 55px;
    margin-right: 10px;        
    `

const Item = styled.div`
     padding-left: 15px;
     color: #666666;
     span{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;            
     }   
    `

const Rec = styled.span`    
     color: ${props => props.stats ? '#8FC549' : '#BABABA'};
    `