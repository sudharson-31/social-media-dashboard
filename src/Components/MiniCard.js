export default function MiniCard({cardData,app}){
    let statusImg;
    let countStyle = {};
    if(cardData.tCountStatus === "up"){
        statusImg =  '/images/icon-up.svg';
        countStyle = {color: "hsl(163, 72%, 41%)"}
    }
    else if(cardData.tCountStatus === "down"){
        statusImg = '/images/icon-down.svg';
        countStyle = {color: "hsl(356, 69%, 56%)"}
    }


    return (
        <div className="miniCard">
            <div className="statusParam">
                <span className="statusTitle">{cardData.parameter}</span>
                <span className="statusApp">
                    <img src={process.env.PUBLIC_URL + '/images/icon-' + app + '.svg'} />
                </span>
            </div>
            <div className="statusValue">
                <span className="statusCount">{cardData.value}</span>
                <div className="status-right">
                    <div className="statusPercentIndi">
                        <img src={process.env.PUBLIC_URL + statusImg} />
                    </div>
                    <div className="statusPercent" style={countStyle}>{cardData.tCountPercent}%</div>
                </div>
               
            </div>
        </div>
    )
}