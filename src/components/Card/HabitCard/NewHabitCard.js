import { useContext } from 'react'
import './HabitCard.css'
import { HabitContext } from '../../../contexts/HabitContext'

export default function NewHabitCard(props){
    const { setPopupOpen } = useContext(HabitContext);

    const addNewHabit = () => {
        setPopupOpen(true);
    }

    return <div className='habitcard-card' onClick={addNewHabit}>
        <h2 className='heading2'>Add a new habit</h2>
    </div>

}