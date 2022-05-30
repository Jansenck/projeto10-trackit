import styled from 'styled-components'

export default function Day(props){

    const {key, id, isSelected, selectingDay, selectedDays} = props;


    return(
        <Button>
            { "A"}
        </Button>
    )
}

function colorDay(isSelected, selectedDays){
    if(isSelected) return "#D5D5D5"
    else if(!isSelected) return "#FFFFFF"
}

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: ${props => colorDay(props.isSelected, props.selectedDays)};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 18px;
    color: #D5D5D5;
`;