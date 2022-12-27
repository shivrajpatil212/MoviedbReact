import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCrud } from '../customHook/Crud'
import { api, apikey, imgpath } from '../api'

export default function Singlemovie() {

    const [castMem, setCast] = useState([]);
    var { id } = useParams();

    var ans_api = useCrud(`movie/${id}?api_key=${apikey}&language=en-US`);
    console.log(ans_api);

    // var ans_cast = useCrud(`movie/${id}/credits?api_key=${apikey}&language=en-US`);
    // console.log(ans_cast);
    // console.log(ans_cast.cast);

    useEffect(()=>{
        const ans_cast = `${api}movie/${id}/credits?api_key=${apikey}&language=en-US`;
        // console.log(ans_cast);

        const fetchData = async () => {
            try {
                const response = await fetch(ans_cast);
                const json = await response.json();
                console.log(json);
                setCast(json.cast);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();

    },[])

    return (
    
        <div className='container'>
            <h2 className='text-center text-uppercase'>Single movie</h2>

            {
                ans_api && (
                    <div className='row movie-details'>
                        <div className='col-xl-6 '>
                            <div className='row'>
                                <div className='col-xl-3 col-4'>
                                    <img src={imgpath + ans_api.poster_path} className="img-fluid" />
                                </div>
                                <div className='col-xl-9 col-8'>
                                    <h3>{ans_api.title} : {ans_api.tagline}</h3>
                                    <h5>Rating : {ans_api.vote_average}</h5>
                                    <p>Released Date : {ans_api.release_date}</p>
                                </div>
                                <h4>Overview</h4>
                                <p>{ans_api.overview}</p>
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <img src={imgpath + ans_api.backdrop_path} className="img-fluid" />
                        </div>
                    </div>
                )
            }

            <div className='row cast-details'>
                <h4 className='text-uppercase'>Cast</h4>
               {castMem.map((castdata,i)=>{
                return (
                    <div key={i} className="col-xl-2 col-6 cast-data">
                        <img src={imgpath + castdata.profile_path} className="img-fluid"/>
                        <h6>{castdata.name}</h6>
                        <p>Character : {castdata.character}</p>
                    </div>
                )
               })}
            </div>

        </div>
    )
}
