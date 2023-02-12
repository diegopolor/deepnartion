interface Props {
    title: string
    target : string
    img: string
    items: string[]
}

const RoadMapItem = ({title, target, img, items}: Props)=> {
    return(
        <div id={target} className='flex flex-col min-w-full items-center mb-10'>
            <div className='md:w-1/3 w-4/5 m-auto'>
                <img className='rounded-tl-2xl rounded-tr-2xl w-full'  src={img} />
                <div className='bg-black w-full rounded-bl-2xl rounded-br-2xl '>
                    <h3 className='text-white text-center p-2'>{title}</h3>
                    <ul className="w-4/5 py-5 m-auto text-center">
                        {
                            items?.map((item, index)=> (
                                <li 
                                    key={index+1*1230}
                                    className='text-white'
                                >
                                    {item}
                                </li>
                                )
                            )
                        }
                    </ul>
                </div>
            </div>     
        </div>   
    )
}

export default RoadMapItem
