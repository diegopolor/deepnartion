//import { resizeEvent } from "./events"

let positionNFt: number | undefined = 0
let positionRoadMap: number | undefined = 0
let positionWhoWeAre: number | undefined = 0

export const setPositionNFt = (pos: number | undefined )=> positionNFt = pos
export const setPositionRoadMap = (pos: number | undefined)=> positionRoadMap = pos
export const setPositionWhoWeAre = (pos: number | undefined)=> positionWhoWeAre = pos

export const getPositionNFt = ()=> positionNFt
export const getPositionRoadMap = ()=> positionRoadMap
export const getPositionWhoWeAre = ()=> positionWhoWeAre
    
export const updatePosition = (
    pos: number | undefined,  
    updaterPosition: (pos: number | undefined)=>void 
)=> {
    updaterPosition(pos)
}