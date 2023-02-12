import { useState } from "react"

export const usePositionScrollY = ()=> {
    const [ scrollPY, setScrollPY ] = useState<number>(0)

    window.addEventListener('scroll', ()=> {
        const { scrollY } = window
        setScrollPY(scrollY)
    })

    return scrollPY
}
