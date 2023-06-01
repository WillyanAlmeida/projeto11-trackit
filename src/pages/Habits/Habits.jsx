import styled from "styled-components"
import HabitsList from "./HabitsList"



export default function Habits() {
    return (
        <HabitContainers>

            <MyHabitsContainer>
                <AddHabit>
                    <p>Meus hábitos</p>
                    <button>+</button>
                </AddHabit>

                <SaveHabit>
                    <input placeholder="nome do hábito" />
                    <WeekDays>
                        <Day>D</Day>
                        <Day>S</Day>
                        <Day>T</Day>
                        <Day>Q</Day>
                        <Day>Q</Day>
                        <Day>S</Day>
                        <Day>S</Day>
                    </WeekDays>
                    <Options>
                        <span>Cancelar</span>
                        <button>Salvar</button>
                    </Options>
                </SaveHabit>
                    <h4>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h4>


                <HabitsList />

            </MyHabitsContainer>

        </HabitContainers>
    )
}

const HabitContainers = styled.div`
    background-color: #E5E5E5;
    height: 100vh;
    margin-top: 70px;
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
            height: 74px;
            margin-top: 29px;
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

const SaveHabit = styled.div`

    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    padding-top: 18px;
    padding-left: 18px;
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
    color: #DBDBDB;
    width: 30px;
    height: 30px;
    background: #FFFFFF;
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