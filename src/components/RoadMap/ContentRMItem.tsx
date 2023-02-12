import RoadMapItem from "./RoadMapItem"
import itemsQ from "./itemsQ"

const ContentRMItem = ()=> {
    return(
        <div className='road-map-content flex flex-col md:flex-row w-full md:w-4/5 overflow-hidden m-auto'>
              {itemsQ.map((item, index)=>(
                    <RoadMapItem key={index+2*2432} { ...item } />
              ))}                   
        </div>
    )
}

export default ContentRMItem