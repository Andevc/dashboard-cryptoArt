import React from 'react';
import infoUsers from '../lib/allInfo.json'
export default function TopCreators(){
    return(
        <section className='h-full w-full text-center text-white flex flex-col justify-center overflow-hidden '>
            
            <ul className='w-full flex flex-row items-center justify-between pb-1 border-b-2'>
                <li className='font-bold tracking-wide'>Rank</li>
                <li className='font-bold tracking-wide'>Username</li>
                <li className='font-bold tracking-wide'>Total Earn</li>
            </ul>
            <section className='border mt-2 h-full w-full'>
                {
                    infoUsers.map((item) =>{

                        <ul className='z-60 '>
                            <li>
                                <img src={item.avatar} alt="" />
                            </li>
                        </ul>

                    })
                }    
            </section>
            
        </section>

    )

}