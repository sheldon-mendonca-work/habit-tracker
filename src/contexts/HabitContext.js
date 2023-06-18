import { createContext, useEffect, useState } from "react";
import { database } from "../backend/database";

export const HabitContext = createContext();

const initDatabase = database;

const initAddForm = {
    formTitle: "New Habit",
    _id: "-1",
    title: "",
    repeat: "Daily",
    goal: "1 time/day",
    archive: false,
    readOnly: false,
    startDate: new Date().toISOString().substring(0,10),
    endDate: new Date(+new Date() + 24 * 60 * 60 * 1000).toISOString().substring(0,10) //tomorrow
}

export const HabitProvider = ({children}) => {

    const [ habitList, setHabitList ] = useState([]);
    const [ popupOpen, setPopupOpen ] = useState(false);
    const [ currentHabit, setCurrentHabit ] = useState(initAddForm);

    const getHabitList = () => {
        setHabitList(initDatabase);    
    } 

    const habitSubmitHandler = () => {
        const { _id, title, repeat, goal, startDate, endDate, archive } = currentHabit;

        if(_id === '-1'){
            setHabitList(prevState => [...prevState, {_id, title, repeat, goal, startDate, endDate, archive}])
        }else{
            setHabitList(prevState => (
                prevState.map((habit) => habit._id === _id ? 
                {_id, title, repeat, goal, startDate, endDate, archive}
                : 
                habit)
            ))
        }

        setPopupOpen(false);
    }

    const editHabitHandler = (habit) => {
        const { _id, title, repeat, goal, startDate, endDate } = habit;
        setCurrentHabit({formTitle: title, _id, title, repeat, goal, startDate, endDate, readOnly: false });
        setPopupOpen(true);
    }

    const archiveHabitHandler = (newHabit) => {
        setHabitList(prevState => (
            prevState.map((habit) => habit._id === newHabit._id ? 
            {...habit, archive: true}
            : 
            habit)
        ))
    }

    const deleteHabitHandler = (newHabit) => {
        setHabitList(prevState => (
            prevState.filter((habit) => habit._id !== newHabit._id)
        ))
    }

    useEffect(()=>{
        getHabitList();// eslint-disable-next-line
    }, [])

    return <HabitContext.Provider value={{ habitList, setHabitList, popupOpen, setPopupOpen, currentHabit, setCurrentHabit, initAddForm, habitSubmitHandler, archiveHabitHandler, deleteHabitHandler, editHabitHandler }}>
        {children}
    </HabitContext.Provider>
};