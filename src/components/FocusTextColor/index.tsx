import { ReactNode } from 'react';

interface propsFocusColorText {
    children: ReactNode
}

const FocusTextColor = ({ children }: propsFocusColorText)=> (
    <span className="text-deltaPrimaryColor" >
        { children }
    </span>
)

export default FocusTextColor