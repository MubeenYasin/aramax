import style from '../../styles/Header.module.scss'
import Nave from '../nave/Nave'

const Header = () => {
    return (
        <div className={style.header}>
            <Nave />
        </div>
    )
}

export default Header