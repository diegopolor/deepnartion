
import { ReactNode } from "react"

interface Props {
    textComponent: ReactNode
    imagePosition: 'left' | 'right',
    img: string
    altImg : string
}

const WhoWeAreSection = ({textComponent, imagePosition, img, altImg}: Props)=>  (
    <div className = {`
        my-10 w-2/3 
        flex 
        md:flex-row 
        flex-col
        gap-x-20 
        items-center 
        ${imagePosition == 'left' && 'md:flex-row-reverse'} 
    `}>
        {textComponent}
        <img 
            className="md:mt-0 mt-20 md:w-1/2 w-full rounded-2xl" 
            src={img} 
            alt={altImg} 
        />
    </div>
)

export default WhoWeAreSection