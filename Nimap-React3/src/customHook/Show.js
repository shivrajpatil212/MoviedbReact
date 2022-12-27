import { useEffect,useState } from "react";
import { imgpath } from "../api";
import { Link } from "react-router-dom";

export function useShow(records) {
    
    return(
    records && records.length>0 && records.map( val => 
        

        <div className="col-xl-3 col-6 show-mov">
            <Link to={"/single-movie/"+val.id}>
            <img src={imgpath+ val.poster_path} className="img-fluid"/>
            </Link>
            <h4><Link to={"/single-movie/"+val.id}>{val.original_title}</Link></h4>
            <p>Rating :{val.vote_average}</p>
        </div>    
    )
    )
}

