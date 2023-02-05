import React, { ReactNode } from 'react';

interface Props {
    children?: ReactNode
}

const ContentHeader = ({ children }: Props): JSX.Element =>(
    <div className='flex flex-row justify-between items-center container m-auto'>
        {children}
    </div>
) 

export default ContentHeader


