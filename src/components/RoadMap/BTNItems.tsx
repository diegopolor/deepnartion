import itemsQ from "./itemsQ"

const BTNItems = ()=> (
    <div className='flex flex-row gap-x-6'>
        {itemsQ.map(({ title, target }, index)=> (
             <a 
                key={index+4*2332}
                className='invisible md:visible text-white cursor-pointer rounded-lg bg-deltaPrimaryColor p-3'  
                href={'#'+target}
             >
                {title}
            </a>      
        ))}
    </div>
)

export default BTNItems