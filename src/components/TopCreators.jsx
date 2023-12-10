import React from 'react';
import infoUsers from '../lib/allInfo.json'
export default function TopCreators(){
    return(
        <section className='h-full w-full text-white grid grid-rows-[50px_1fr]'>
            
            <ul className='flex flex-row items-center justify-between pb-1 border-b-2'>
                <li className='font-bold tracking-wide'>Rank</li>
                <li className='font-bold tracking-wide'>Username</li>
                <li className='font-bold tracking-wide'>Total Earn</li>
            </ul>
            <section className='border mt-2 h-full w-full'>
                {
                infoUsers.map((item, index) =>{
                    
                    <ul className='text-white flex flex-row'>
                        <li>dklasdmask</li>
                        <li>{index}</li>
                        <li> {item.UserName} </li>
                        <li> {item.totalEarn}</li>
                    </ul>
                
                })
                }
            </section>
        </section>

    )

}