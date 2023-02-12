import React, { useRef, useEffect } from "react";

import DescriptionNFT from './DescriptionNFT';
import MINT from './MINT';

import { setPositionNFt, updatePosition } from "../../utils/positionsSections";
import { resizeEvent } from "../../utils/events";

const NFT = ()=>{
    const element = useRef<HTMLElement>(null)

    useEffect(()=> {
        updatePosition(element.current?.offsetTop, setPositionNFt )
        resizeEvent(()=> {
            updatePosition(element.current?.offsetTop, setPositionNFt )
        })  
    })
    

    return(
        <section ref={element} id="nft" className="bg-deltaBg md:h-auto font-raleway flex flex-col items-center">
            <DescriptionNFT />
            <MINT />
        </section>
    )
}

export default NFT