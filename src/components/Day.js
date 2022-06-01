import styled from 'styled-components'

export default function Day(props){

    const {key, index, day, setSelectedDays, selectedDay} = props;

    function selectDay(){
        setSelectedDays(index);
    }

    return(
        <Button 
            key={key} 
            index={index} 
            day={day} 
            selectedDay={selectedDay} 
            onClick={selectDay}
            >
            {day}
        </Button>
    )
}

const Button = styled.button`
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: ${({selectedDay}) => colorDay(selectedDay)};
                    
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 18px;
    color: #D5D5D5;
    
`;