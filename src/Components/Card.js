export default function Card({cardData}){
    let statusImg;
    let countStyle = {}
        if(cardData.countStatus === "up"){
            statusImg =  '/images/icon-up.svg';
            countStyle = {color: "hsl(163, 72%, 41%)"}
        }
        else if(cardData.countStatus === "down"){
            statusImg = '/images/icon-down.svg';
            countStyle = {color: "hsl(356, 69%, 56%)"}
        }

        let styles={}
        if(cardData.color.startsWith('l')){
            styles={backgroundImage: `${cardData.color}`, height: `7px` }
        }
        else{
            styles={backgroundColor: `${cardData.color}`, height: `7px` }
        }

    return (
        <div className="indiCard" >
            <div className="border-top" style={styles}></div>
            <div className="indi-content">
                <div className="indi-app">
                    <img src={process.env.PUBLIC_URL + '/images/icon-' + cardData.app + '.svg'} />
                    <div className="accountId">@{cardData.userId}</div>
                </div>
            
            <div className="followerCount">
                {cardData.userCount}
                <div className="followerType">{cardData.users}</div>
            </div>
            <div className="todayCount">
                <span className="statusSymbol">
                    <img src={process.env.PUBLIC_URL + statusImg}></img>
                </span>
                <span className="count" style={countStyle}>{cardData.count} Today</span>
            </div>
            </div>


        </div>
    )
}