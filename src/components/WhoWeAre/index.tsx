import { useEffect, useRef } from 'react'
import WhatSpecialTXT from "../AppTXT/WhatSpecialTXT"
import ChallengesOvercomeTXT from "../AppTXT/ChallengesOvercomeTXT"
import arbolitoNFT from '../../images/nft/1.png'
import tvNFT from '../../images/nft/3.png'
import WhoWeAreSection from "./WhoWeAreSection"
import { setPositionWhoWeAre, updatePosition } from "../../utils/positionsSections"
import { resizeEvent } from "../../utils/events"

const WhoYouAre = ()=> {
    const element = useRef<HTMLElement>(null)

    useEffect(()=> {
        setPositionWhoWeAre(element.current?.offsetTop )
        resizeEvent(()=> {
            updatePosition(element.current?.offsetTop, setPositionWhoWeAre )
        })  
    })

    return(
        <section ref={element} id='whoweare' className="md:w-11/12 flex flex-col justify-center blur-sm items-center my-20">
            <h1 className="font-raleway mb-5 md:mb-10 text-3xl">
                Who <span className="text-deltaPrimaryColor">We Are</span>
            </h1>
            <WhoWeAreSection 
                textComponent={<WhatSpecialTXT />} 
                imagePosition='right'
                img={arbolitoNFT}
                altImg = 'arbolitoNFT' 
            />
            <hr className="h-50 w-1/2 my-10"/>
            <WhoWeAreSection 
                textComponent={<ChallengesOvercomeTXT />} 
                imagePosition='left'
                img={tvNFT}
                altImg = 'tvNFT'
            />
        </section>
    )
}

export default WhoYouAre

