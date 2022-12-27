import React from 'react'
import { useCrud } from '../customHook/Crud'
import { apikey } from '../api'
import { useShow } from '../customHook/Show';



function Home() {

    
    var api_ans = useCrud(`movie/popular?api_key=${apikey}&language=en-US&page=1`);
    // console.log(ans_api['results']);

    var show_grid = useShow(api_ans['results']);
    console.log(show_grid);




    return (
        <div className='container'>
            <h2 className='text-center text-uppercase'>Home Page / Popular Movies</h2>

            

            <div className='container'>
                <div className='row'>
                    {show_grid}
                </div>
            </div>
        </div>
    )
}

export default Home;