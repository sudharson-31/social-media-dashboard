
import Header from './Header'
import { useState } from 'react';
import Card from './Card';
export default function MainDashboard({data}){
    let count = useState(followerCount)
    function followerCount(){
        let count=0;
        for(let i=0;i<data.length;i++){
         count+= data[i].userCount;
        }
        return count
        
    }
    return (
        <div id="Dashboard">
            <Header followerCount={count}/>
            <div className='main-stat-container'>
            {
                data.map((e,i)=>{
                    return (
                        <Card cardData={e} />
                    )
                })
            }
            </div>

        </div>
    )
}