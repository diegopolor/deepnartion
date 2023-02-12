import React, { useState } from "react"
import { items, itemsMenu } from "./items"

interface Props {
  direction: string
}

const ItemsNavBar = ({ direction }: Props)=> {
    const [itemNav, setItemNav] = useState<itemsMenu[]>(items)
    
    const handlerChangeActive = (target: string)=> {
        const item = items.filter((item)=> item.target == target)[0]   
        //si el item del menu seleccionado es 'LIGHTPAPER' no realiza actualización de estado
        if(item.target != 'LIGHTPAPER' )
            setItemNav((prevState)=>
                prevState.map(item => 
                    //si tiene active y es diferente al target pasado por parametro
                    item.active && item.target != target && item.target ?
                        {...item, active: false} : 
                        //le coloca active al item con el target pasado por parametro
                        item.target == target && item.target != 'LIGHTPAPER' ? 
                            {...item, active: true} : 
                            item 
                )
            )
        if(target == 'LIGHTPAPER') window.open(item?.ref, '_blank')
        else window.location.href = `#${target}`;      
    } 

    return(
        <ul className={`flex flex-${direction} text-white`}>
            {itemNav.map(({ name, active, target }, index) => (
              <li  
                className={`
                  ${active && 'text-deltaPrimaryColor overline'}                
                  font-raleway 
                  overline
                  font-semibold
                  m-2   
                  cursor-pointer    
                `}
                key={index}
                onClick={()=>handlerChangeActive(target)}
              >
                { name }
              </li>       
            ))}
        </ul>
    )
}

export default ItemsNavBar