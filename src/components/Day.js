import styled from 'styled-components'

export default function Day(props){

    const {key, index, day, isSelected, selectingDay, selectedDays} = props;
    console.log("to em day")

    return(
        <Button index={index} isSelected={isSelected}>
            {day}
        </Button>
    )
}

function colorDay(isSelected, selectedDays){
    if(isSelected) return "#D5D5D5"
    else if(!isSelected) return "#FFFFFF"
}

const Button = styled.button`

    height: 30px;
    width: 30px;

    background-color: red;

    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: ${props => colorDay(props.isSelected, props.selectedDays)};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 18px;
    color: #D5D5D5;
`;