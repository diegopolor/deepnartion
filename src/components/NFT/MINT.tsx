import nftIMG from '../../images/nft/3.png'
import BTNMint from '../BTNMint';

const MINT = ()=> (
    <div className='flex flex-col items-center md:w-2/5 my-20'>
        <img src={nftIMG} alt='NFT' className='md:w-full w-4/5 border-2 rounded-md' />
        <BTNMint />
    </div>  
)

export default MINT