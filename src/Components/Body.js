import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"

// *Body Component 

const Body = ()=>{

    const [listOfRestaurant, setListOfRestaurant] = useState([])

    const [searchText, setSearchText] = useState("")

    const [newResList, setNewResList] = useState([])

    useEffect(()=>{
        fetchData()
    },[])


    const fetchData = async ()=>{
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await response.json()
        setListOfRestaurant(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setNewResList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)   
    }

    return listOfRestaurant.length === 0 ? (
        <div className="loading__spinner"><i class="fa-solid fa-spinner"></i></div>
    ):(
        <>
            <div className="container body__container">
                <div className="filter__search-container">
                    <button className="btn" onClick={()=>{
                        const topRatedRest = listOfRestaurant.filter((currData)=>{
                            return currData.info.avgRating > 4
                        })
                        setNewResList(topRatedRest)
                    }}>Top Rated Restaurant</button>
                    <div className="search__container">
                        <input type="text" value={searchText} onChange={(e)=>{
                            setSearchText(e.target.value)
                        }} placeholder="Search for Restaurants"/>
                        <button onClick={()=>{
                            const search = listOfRestaurant.filter((res)=>{
                                return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            })
                            setNewResList(search)
                        }}>Search</button>
                    </div>
                </div>
                <div className="restaurant__container">
                    {
                        newResList.map((currCard)=>{
                            return(
                                <RestaurantCard key={currCard.info.id} resData={currCard}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Body