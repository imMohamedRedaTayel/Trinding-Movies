import React from 'react'
import { Link } from 'react-router-dom'

const MeadaItem = ({ Card }) => {
    return <>

        <div className="col-md-2">
            <Link className='text-decoration-none text-white ' to={ `/detiles/${ Card.id }/${ Card.media_type}`} >
                <div className="Card my-3 text-center  cursor-pointer position-relative ">
                    {Card.poster_path ? <img src={'https://image.tmdb.org/t/p/w500' + Card.poster_path} className='w-100 ' alt={Card.title} /> :
                        <img src={'https://image.tmdb.org/t/p/w500' + Card.profile_path} className='w-100 ' alt={Card.title} />}

                    {Card.title ? <h3 className='h5 mt-2' > {Card.title.slice(0, Card.title.indexOf('', 15)) } </h3> : <h3 className='h5 mt-2' > {Card.name.slice(0, Card.name.indexOf('', 15)) } </h3>}
                    {Card.vote_average ? <div className='vote p-1 ' > {Card.vote_average.toFixed(1)} </div> : ''}
                    {/* <h2> {Card.id} </h2> */}
                </div>
            </Link>
        </div>


    </>
}

export default MeadaItem