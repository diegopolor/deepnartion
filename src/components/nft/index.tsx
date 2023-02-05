import React from "react";
import nftIMG from '../../images/nft/3.png'
import BTNMint from "../BTNMint";

const NFTSection = ()=>{
    return(
        <section className="bg-deltaBg md:h-auto font-raleway flex flex-col items-center">
            <h2 className="text-deltaPrimaryColor md:text-3xl sm:text-xs mt-6 " >NFT&apos;S</h2>
            <p className="w-10/12 font-thin text-white md:text-3xl mt-6 text-center sm:text-xs">
                We do NFT&apos;s for humans by humans, you can stake your 
                emotions and by helping others, your action + holding your
                Deepnation <span className="text-deltaPrimaryColor" >NTF</span> will give you rewards as new <span className="text-deltaPrimaryColor">NFT&apos;S based</span> in our
                actions as a community and individuals, how much we meditate,
                how much we help others. Helping others and staking your <span className="text-deltaPrimaryColor">NFT&apos;S </span> 
                will give you more special <span className="text-deltaPrimaryColor">NFT&apos;S</span>. 
            </p>
            <div className='flex flex-col items-center w-full md:w-2/5 my-20'>
                <img src={nftIMG} alt='NFT' className='border-2 rounded-md' />
                <BTNMint />
            </div>         
        </section>
    )
}

export default NFTSection