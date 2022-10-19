import MiniCard from "./MiniCard"

export default function StatusDashboard({data}){
    return (
        <div id="Status-Dashboard"><div className="dash-title">Overview - Today</div>
        <div className="stats-content">
            
            {
                data.map((e,i)=>{
                    return e.today.map(x=>{
                        return <MiniCard cardData={x} app={e.app} color={data.color}/> 
                    })
                })
            }
        </div></div>
        
    )
}