import styled from "styled-components";
import Checkbox from "../../assets/checkbox.svg"





export default function Today() {
    return (
        <>
            <TodayList>
                <p>Segunda, 17/05</p>
                <h3>Nenhum hábito concluído ainda</h3>
                <TodayContainer>
                    <Item>
                        <h1>Ler 1 capítulo de livro</h1>
                        <h3>Sequência atual: 3 dias</h3>
                        <h3>Seu recorde: 5 dias</h3>
                    </Item>
                    <img src={Checkbox}></img>
                </TodayContainer>

                <TodayContainer>
                    <Item>
                        <h1>Ler 1 capítulo de livro</h1>
                        <h3>Sequência atual: 3 dias</h3>
                        <h3>Seu recorde: 5 dias</h3>
                    </Item>
                    <img src={Checkbox}></img>
                </TodayContainer>

                <TodayContainer>
                    <Item>
                        <h1>Ler 1 capítulo de livro</h1>
                        <h3>Sequência atual: 3 dias</h3>
                        <h3>Seu recorde: 5 dias</h3>
                    </Item>
                    <img src={Checkbox}></img>
                </TodayContainer>
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

            color: #BABABA;
        }
    `

const TodayContainer = styled.div`
    margin-top: 28px;
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

const Item = styled.div`
    padding-left: 15px;
    
        
    `
