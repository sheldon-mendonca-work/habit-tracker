import { useContext } from 'react';
import './HabitCard.css'
import { HabitContext } from '../../../contexts/HabitContext';

export default function HabitCard(props){
    const { habit } = props;
    const { _id, title, repeat, goal, startDate, endDate } = habit;

    const { setCurrentHabit, setPopupOpen, archiveHabitHandler, deleteHabitHandler, editHabitHandler } = useContext(HabitContext);

    const showHabitHandler = () => {
        setCurrentHabit({formTitle: title, _id, title, repeat, goal, startDate, endDate, readOnly: true });
        setPopupOpen(true);
    }

    


    return <span className='habitcard-card-span'>
        <div className='habitcard-card' onClick={showHabitHandler}>
            <h2 className='heading2'>{title}</h2>
            <p>Upcoming date: </p>
            <p>{endDate}</p>
        </div>
        <div className='habitcard-actions'>
                <span className='habitcard-action' onClick={()=>editHabitHandler(habit)}>E</span>
                <span className='habitcard-action' onClick={()=>archiveHabitHandler(habit)}>A</span>
                <span className='habitcard-action' onClick={()=>deleteHabitHandler(habit)}>D</span>
            </div>
    </span>

}