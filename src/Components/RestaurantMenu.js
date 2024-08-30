import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"


import { useParams } from "react-router"

const RestaurantMenu = ()=>{

    const [resInfo, setResInfo] = useState(null)

    // const paramas = useParams()
    // console.log(paramas)

    const {resId} = useParams()

    useEffect(()=>{
        fetchData()
    },[])


    const fetchData = async ()=>{
        const data = await fetch( + resId )
        const json = await data.json()
        setResInfo(json.data)
    }

    if(resInfo === null) return <Shimmer/>

    const {name, avgRating, costForTwoMessage, areaName, cuisines} = resInfo?.cards[2]?.card?.card?.info

    const {itemCards} = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card

    return (
        <>
            <div className="menu">
                <h1>{name}</h1>
                <h2>{avgRating}</h2>
                <h2>{costForTwoMessage}</h2>
                <h2>{areaName}</h2>
                <h2>{cuisines.join(" , ")}</h2>

                <h2>Menu</h2>
                <ul>
                    {
                        itemCards.map((item)=>{
                            return(
                                <p key={item.card.info.id}>{item.card.info.name} - {"Rs."} {item.card.info.price/100 || item.card.info.defaultprice/100}</p>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default RestaurantMenu