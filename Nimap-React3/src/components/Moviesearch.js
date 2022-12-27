import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { imgpath } from '../api';

export default function Moviesearch() {

    const location = useLocation();

    const [searchData, setSearchData] = useState([])
    const [paramData, setParamData] = useState('')

    useEffect(() => {
        setSearchData(location.state.jsonData)
        setParamData(location.state.paramData)
        // console.log(setSearchData);
        // console.log(setParamData);
    }, [location.state.jsonData, location.state.paramData])


    let totalItem = 0;
    if (searchData.results != null) {
        totalItem = searchData.results.length
    } else {
        totalItem = 0
    }

    return (
        <div className='container'>
            <h2>Searched Movie Page</h2>
            <div className='row'>
                <h4>Total Search Item: {totalItem}</h4>
                {
                    searchData.results && searchData.results.map((item, index) => {
                        return (
                            <>
                                <div className='col-xl-3 show-mov' key={index}>
                                    <Link to={"/single-movie/" + item.id}>
                                        {<img src={imgpath + item.poster_path} className="img-fluid movie-img" alt={item.original_title} />}
                                    </Link>
                                    <h4 className="movie-title"><Link to={"/single-movie/" + item.id} title={item.original_title}>{item.original_title}</Link></h4>

                                    <p>Rating: {item.vote_average}/10</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}
