import { useContext } from "react"
import { HabitContext } from "../../../contexts/HabitContext"

export default function HabitModalOverlay (){

    const { currentHabit, setCurrentHabit, setPopupOpen, initAddForm, habitSubmitHandler } = useContext(HabitContext);

    const { formTitle, title, repeat, goal, startDate, endDate, readOnly } = currentHabit;

    const titleChangeHandler = (event) =>{
        setCurrentHabit((prevState) => ({...prevState, title: event.target.value}))
    }

    const repeatChangeHandler = (event) =>{
        setCurrentHabit((prevState) => ({...prevState, repeat: event.target.value}))
    }

    const goalChangeHandler = (event) =>{
        setCurrentHabit((prevState) => ({...prevState, goal: event.target.value}))
    }

    const startDateChangeHandler = (event) =>{
        setCurrentHabit((prevState) => ({...prevState, startDate: event.target.value}))
    }

    const endDateChangeHandler = (event) =>{
        setCurrentHabit((prevState) => ({...prevState, endDate: event.target.value}))
    }

    const resetHandler = () => {
        setCurrentHabit(initAddForm);
        setPopupOpen(false);
    }

    return <div className="addhabit">
        <h3 className="heading3">{formTitle}</h3>
        <form onSubmit={habitSubmitHandler}>
            <label htmlFor="habit-name">Name<span>*</span></label>
            <input type="text" maxLength='25' id="habit-name" placeholder="Habit Name" value={title} onChange={titleChangeHandler} required readOnly={readOnly}/>

            <label htmlFor="habit-repeat">Repeat</label>
            <select onChange={repeatChangeHandler} value={repeat} id="habit-repeat" disabled={readOnly}>
                <option disabled>Select One</option>
                <option value="Hourly">Hourly</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
            </select>

            <label htmlFor="habit-goal">Goal</label>
            <select onChange={goalChangeHandler} value={goal} id="habit-goal" disabled={readOnly}>
                <option disabled>Select One</option>
                <option value="1 time/day">1 time/day</option>
                <option value="2 time/day">2 time/day</option>
                <option value="3 time/day">3 time/day</option>
                <option value="6 time/day">6 time/day</option>
            </select>

            <label htmlFor="habit-start">Start date</label>
            <input type="date" value={startDate} onChange={startDateChangeHandler} id="habit-start" readOnly={readOnly}/>

            
            <label htmlFor="habit-end">End date</label>
            <input type="date" value={endDate} onChange={endDateChangeHandler} id="habit-end" readOnly={readOnly}/>

            <button type="reset" onClick={resetHandler}>Cancel</button>
            {!readOnly && <button type="submit">Submit</button>}
        </form>
    </div>
}