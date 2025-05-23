import { useContext } from 'react'
import Logo from './Logo'
import MainBtn from './MainBtn'
import SecondaryButton from './SecondaryButton'
import { Link, NavLink } from 'react-router-dom'
import { MainContext } from '../context/Context'
import Button from './Button'
export default function Navbar() {
    const { user, isLogin, setIsLogin, logoutUser,getUser } = useContext(MainContext)
    const authorization = () => {
        console.log(user.boy);

    }
    return (
        <div className='nav'>
            <div className="nav-container">
                <Logo />
                <div className="category">
                    <NavLink to='/'>Asosiy</NavLink>
                    <NavLink to='/games'>Oyinlar</NavLink>
                    <NavLink to='/story'>Ertaklar</NavLink>
                    <NavLink to='/activities'>Mashqlar</NavLink>
                    <NavLink to='/parents'>Ota-Onalarga</NavLink>
                </div>
                <div className="btn-group-user">
                    {
                        !isLogin ? (
                            <>
                                <Link to='/login'>
                                    <SecondaryButton>Kirish</SecondaryButton>
                                </Link>
                                <Link to='/register'>
                                    <MainBtn>Log up</MainBtn>
                                </Link>
                            </>
                        ) : (
                            <div className='d-flex'>
                                <Link className="userBar" to='/shaxsiy'>
                                    <div style={!getUser.avatar ? {padding:"8px 15px"}:null}>
                                        {
                                            getUser.avatar ?
                                                <img src={getUser.avatar} alt="" />
                                                :
                                                getUser.ism[0]
                                        }
                                    </div>
                                </Link>
                                <div className='log-out' onClick={() => logoutUser()}>
                                    <Button>log out</Button>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}
