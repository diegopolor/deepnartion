import React, { useState } from "react"

interface itemsMenu {
    name: string,
    active: boolean
}

const ItemsNavBar = ()=> {

    const items: itemsMenu[] = [
        {
          name: 'NFT',
          active : true
        },
        {
          name: 'WHO WE ARE ',
          active : false
        },
        {
          name: 'ROADMAP',
          active : false
        },
        {
          name: 'LIGHTPAPER',
          active : false
        }
      ]
    
      const [itemNav] = useState<itemsMenu[]>(items)
      const handlerChangeActive = ()=> {
        console.log(itemNav) 
      }
    return(
        <ul className='flex flex-row  text-white'>
            {itemNav.map(({ name, active }, index) => (
              <li  
                className={`
                  ${active && 'text-deltaPrimaryColor overline'}                
                  font-raleway 
                  font-semibold
                  m-2   
                  cursor-pointer    
                `}
                key={index}
                onClick={()=>handlerChangeActive()}
              >
                { name }
              </li>       
            ))}
        </ul>
    )
}

export default ItemsNavBar