import styled from "styled-components";
import Itens from "./Itens";
import dayjs from "dayjs";
import "dayjs/locale/pt";
import advancedFormat from "dayjs/plugin/advancedFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import calendar from "dayjs/plugin/calendar";
import axios from "axios";
import { UserContext } from "../../Context"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";


export default function Today() {
    const { user, get, progressBar, setProgressBar, listItens, setListItens } = useContext(UserContext);
    const navigate = useNavigate()

    let x = 0;
    dayjs.extend(advancedFormat);
    dayjs.extend(localizedFormat);
    dayjs.extend(relativeTime);
    dayjs.extend(calendar);

    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

        if(user.token===undefined){
            navigate('/')
        }

    useEffect(() => {
        axios.get(
            'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
            config
        ).then(x => {
            setListItens(x.data)

        }).catch(x => console.log(x));
    }, [get]);

    if (listItens.length != 0) {

        for (let i = 0; i < listItens.length; i++) {
            if (listItens[i].done) {
                x++;
            }
        }
        setProgressBar(x / listItens.length * 100)
    }

    const day = (
        dayjs()
            .locale("pt")
            .format("dddd, DD/MM")
    );

    return (
        <>
            <TodayList progressBar={progressBar}>
                <p data-test="today">{day}</p>
                {progressBar != 0 ? <h3 data-test="today-counter">{progressBar}% dos hábitos concluídos</h3> :
                    <h3 data-test="today-counter">Nenhum hábito concluído ainda</h3>}
                <>{listItens.map((x) => <Itens key={x.id} list={x} />)}</>
            </TodayList>
        </>
    )
}

const TodayList = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: column;        
    height: 100vh;
    background: #E5E5E5;
    margin-bottom: 18px;        
    padding-left:17px;
    padding-right: 18px;
    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #126BA5;
    h3{ 
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: ${props => props.progressBar != 0 ? '#8FC549' : '#BABABA'};
    }
    `

