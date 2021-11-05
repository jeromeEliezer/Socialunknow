import {useContext} from 'react'
import Log from '../components/Log'

import { UidContext } from "../components/AppContext";
import UpdateProfil from '../components/Profil/UpdateProfil';

function Profil() {
    const uid = useContext(UidContext);
    return (
        <div className='profil-page' >
            {uid ? (
                <UpdateProfil/>
            ) : (
                <div className='log-container'>
                    <Log signin={false} signup={true} />
                    <div className='img-container'>
                        <img src='./img/log.svg' alt='imgprofile' />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profil;
