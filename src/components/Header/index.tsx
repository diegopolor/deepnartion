import ContentHeader from './ContentHeader'
import logo from '../../images/Asset2.png';
import NavBar from '../Navbar';
import { scrollEvent } from '../../utils/events';
import { useState } from 'react';
import NavbarMobile from '../Navbar/NavbarMobile';
import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Header = ()=> {
    const [ headerMinimize, setHeaderMinimize ] = useState<boolean>(false)
    const [ showMenu, setShowMenu ] = useState<boolean>(false)
    
    scrollEvent((e)=>{
        if(e.scrollY > 100) setHeaderMinimize(true)
        else  setHeaderMinimize(false)
    })

    const handlerShowMenu = () => setShowMenu(!showMenu)

    return(
        <header className='sticky z-50 top-0 bg-deltaBg p-2'>
            <ContentHeader>
                <img 
                    src={logo} 
                    className={`
                        md:w-48 
                        w-24 
                        ${headerMinimize ? 'md:w-24' : 'md:w-72'}
                        z-50
                    `} 
                    alt='logo'
                    onClick={handlerShowMenu}
                />
                <div className='flex flex-row '>
                    <NavBar
                        textSize ={`${headerMinimize ? 'text-sm' : 'text-base'}`} 
                    />
                    <button 
                        className='mr-2 text-white cursor-pointer md:hidden' 
                        onClick={handlerShowMenu}
                    >
                        {showMenu ?<CloseOutlinedIcon />: <MenuIcon color='inherit' />}                    
                    </button>
                </div>
            </ContentHeader>
            <NavbarMobile expanded={showMenu} />
        </header>
    )
}

export default Header