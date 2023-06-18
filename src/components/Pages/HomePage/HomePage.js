import { useContext } from 'react';
import Layout from '../../Layouts/Layout';
import './HomePage.css';
import { HabitContext } from '../../../contexts/HabitContext';
import HabitCard from '../../Card/HabitCard/HabitCard';
import NewHabitCard from '../../Card/HabitCard/NewHabitCard';
import HabitModal from '../../Card/HabitModal/HabitModal';

const HomePage = () => {
    
    const { habitList, popupOpen } = useContext(HabitContext);
    
    return <Layout>
        {
            popupOpen && <HabitModal />
        }
        <div className='homepage-feed'>
        
        <NewHabitCard />
        {
            habitList.length > 0 && habitList.filter(({archive}) => !archive).map((habit) => (
                <HabitCard key={habit._id} habit={habit} />
            ))
        }
        </div>
    </Layout>
}

export default HomePage;