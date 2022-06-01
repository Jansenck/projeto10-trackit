
import Header from "./Header";
import CreateHabits from './CreateHabits';
import Footer from "./Footer";
import AddHabit from './AddHabit';
import Histoty from "./History";

export default function Habits(){

    return(
        <>
            <Header/>
            <AddHabit/>
            <CreateHabits/>
            <Footer/>
        </>
    );
}