import { useContext } from "react";
import  ReactDOM  from "react-dom";
import { HabitContext } from "../../../contexts/HabitContext";
import './HabitModal.css'
import HabitModalOverlay from "./HabitModalOverlay";

const HabitModal = (props) => {
    const { setPopupOpen } = useContext(HabitContext)

    const Backdrop = () => {
        return <div className="habitmodal-backdrop" onClick={()=>setPopupOpen(false)}></div>
    }
    return <>
        {ReactDOM.createPortal(<>
        <Backdrop />
        <HabitModalOverlay/>
        </>, document.getElementById("backdrop")) }
    </>
};

export default HabitModal;