import Image from 'next/image'
import Link from 'next/link'
import Arrow from '/public/img/arrow-down.svg'
import User from '/public/img/User.svg'
import Search from '/public/img/Search.svg'
import style from '../../styles/Nave.module.scss'


const Nave = () => {
    return (
        <div className={style.nave}>
            <nav>
                <Image src='/img/logo.png' width='78' height='78' alt='logo'></Image>

                <ul>
                    <li>
                        <Link href={'/'}>Hypeindestory</Link>
                        <Link href={'/'}><Arrow className={style.shadow}/></Link>
                    </li>
                    <li>
                        <Link href={'/'}>Hype Offer</Link>
                        <Link href={'/'}><Arrow className={style.shadow}/></Link>
                    </li>
                    <li>
                        <Link href={'/'}>Shipping</Link>
                        <Link href={'/'}><Arrow className={style.shadow}/></Link>
                    </li>
                    <li>
                        <Link href={'/'}>seller request form</Link>
                        <Link href={'/'}><Arrow className={style.shadow}/></Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <User className={style.shadow}/>
                        <Link href={'/'}>Login</Link>

                    </li>
                    <li className={style.search_bg} >
                    <Search className={style.margin} />
                    <input type="text" placeholder=' Brand, models...' />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nave