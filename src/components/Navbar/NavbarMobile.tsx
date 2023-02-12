import ItemsNavBar from "./ItemsNavBar"

interface Props {
    expanded : boolean
}

const NavbarMobile = ({expanded}: Props)=> {
    return (
        <div className={`w-full z-5 absolute ${expanded ? 'top-full' : '-top-80'} left-0 bg-deltaBg text-center md:invisible md:h-0 pb-4 `}>
            <ItemsNavBar direction="col" />
        </div>
    ) 
}

export default NavbarMobile