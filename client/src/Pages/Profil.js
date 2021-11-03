import Log from '../components/Log'
function Profil() {
    return (
        <div className='profil-page' >
            <div className='log-container'>
                <Log signin={false} signup={true} />
                <div className='img-container'>
                    <img src='./img/log.svg' alt='imgprofile' />
                </div>
            </div>
        </div>
    )
}

export default Profil
