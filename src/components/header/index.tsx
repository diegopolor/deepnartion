import ContentHeader from './contentHeader'
import logo from '../../images/Asset2.png';

const Header = ()=> {
    return(
        <header className='sticky top-0 bg-deltaBg p-2'>
            <ContentHeader>
                <img src={logo} className="w-48 md:w-72 " alt='logo'/>
            </ContentHeader>
        </header>
    )
}

export default Header