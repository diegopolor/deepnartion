import { useRef, useEffect }  from "react";
import './index.css'
import ContentRMItem from './ContentRMItem'
import BTNItems from './BTNItems'
import { resizeEvent } from "../../utils/events";
import { setPositionRoadMap, updatePosition } from "../../utils/positionsSections";

const RoadMap = ()=> {
    const element = useRef<HTMLElement>(null)

    useEffect(()=> {
        setPositionRoadMap(element.current?.offsetTop)
        resizeEvent(()=> {
            updatePosition(element.current?.offsetTop, setPositionRoadMap )
        })  
    })


    return(
        <section ref={element} id='roadmap' className="roadmap font-raleway bg-deltaBg flex flex-col items-center pb-10">
            <h1 className="mt-20 mb-20 text-3xl text-white">
                ROADMAP
            </h1>           
            <ContentRMItem/>
            <BTNItems />     
        </section>
    )
}

export default RoadMap