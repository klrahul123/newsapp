import React, { useState, useEffect } from 'react'
import axios from "axios"
import NewsItem from './NewsItem'
import './News.css'
function News(props) {
    let [item, setitem] = useState()
    useEffect(() => {
        let result = axios.get(`https://newsapi.org/v2/everything?q=${props.category}&language=hi&apiKey=6cbab1e99fd04112a673fde12365cf81`);
        result.then((res) => {
            setitem(res.data.articles)
        })
    }, [props.category])
    return (
        <>
            
            {item ? <div style={{marginTop:"20px"}} className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">

                {item.map((pro) => {
                    return (
                        <NewsItem ntitle={pro.title} ndec={pro.description}
                            nimage={pro.urlToImage} nurl={pro.url} />
                    )
                })}
            </div> : <p>no data</p>}

        </>
    )
}

export default News

