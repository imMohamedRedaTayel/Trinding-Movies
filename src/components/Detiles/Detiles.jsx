import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Detiles = () => {

    let { id, mediaType } = useParams()
    // console.log( id , mediaType );

    const [details, setDetiles] = useState(null)

    async function getDetailsID( id, mediaType ) {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=93683cb31bcf8e8af201267f4f4a7352&language=en-US`)
        setDetiles(data)
        console.log(data);
    }

    useEffect(() => {
        getDetailsID(id, mediaType)
    }, [])



    return <>
        {details ? <div className="container mt-4">
            <div className="row align-items-center ">
                <div className="col-md-4 ">
                    {details.poster_path ? <img src={'https://image.tmdb.org/t/p/w500' + details.poster_path} className='w-100 ' alt="" /> : <img src={'https://image.tmdb.org/t/p/w500' + details.profile_path} className='w-100 ' alt="" />
                    }
                </div>
                <div className="col-md-8">
                    <h2> {details.title} {details.name}  </h2>
                    <p className='text-white my-3 ' > {details.overview} {details.biography}  </p>
                    {details.vote_average ? <h4 className='my-4' > Vote Average : {details.vote_average}  </h4> : <h4 className='my-4' > Place Of Birth : {details.place_of_birth}  </h4>}
                    {details.vote_count ? <h4> Vote Count : {details.vote_count} </h4> : <h4> popularity : {details.popularity} m </h4>}
                </div>
            </div>
        </div> : <div className='d-flex vh-100  align-items-center justify-content-center ' >
            <i className='fas fa-spinner fa-spin fa-7x' >  </i>
        </div>}

    </>
}

export default Detiles