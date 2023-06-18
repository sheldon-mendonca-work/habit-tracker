import { useContext } from 'react';
import Layout from '../../Layouts/Layout';
import './ArchivePage.css';
import { HabitContext } from '../../../contexts/HabitContext';
import HabitCard from '../../Card/HabitCard/HabitCard';
import HabitModal from '../../Card/HabitModal/HabitModal';

const ArchivePage = () => {
    
    const { habitList, popupOpen } = useContext(HabitContext);
    
    return <Layout>
        {
            popupOpen && <HabitModal />
        }
        <div className='archivepage-feed'>
        {
            habitList.length > 0 && habitList.filter(({archive}) => archive).map((habit) => (
                <HabitCard key={habit._id} habit={habit} />
            ))
        }
        </div>
    </Layout>
}

export default ArchivePage;