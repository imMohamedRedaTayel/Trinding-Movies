import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'


const People = () => {

    const [people, setPeople] = useState(null)
    let mediaType = 'person'

    let nums = new Array(10).fill(1).map( ( elem , idx ) => { return idx + 1 } )
    console.log( nums );

    async function getPeople(page) {
        const { data } = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=93683cb31bcf8e8af201267f4f4a7352&language=en-US`)
        // console.log(data.results);
        setPeople(data.results)
    }

    useEffect(() => {
        getPeople()
    }, [])


    return <>

        { people ? <div className="container mt-4">
            <div className="row">
                {people.map((pro, idx) => {
                    return <div key={idx} className="col-md-3">
                        <Link className='text-decoration-none text-white ' to={`/detiles/${pro.id}/${mediaType}`} >
                            <div className="item position-relative ">
                                <img src={'https://image.tmdb.org/t/p/w500' + pro.profile_path} className='w-100 ' alt="" />
                                <h3 className='h5 text-white '> {pro.name} </h3>

                            </div>
                        </Link>
                    </div>
                })}
            </div>
            <nav className='py-5 ' >
                <ul className='pagination pagination-sm d-flex justify-content-center ' >
                    { nums.map( ( page, idx ) => { return <li onClick={ () => getPeople(page) } className='page-item p-1 ' key={idx} > <Link className='page-link bg-transparent text-white ' href='' > {page} </Link> </li> } ) }
                </ul>
            </nav>
        </div> : <div className='d-flex vh-100  align-items-center justify-content-center ' >
            <i className='fas fa-spinner fa-spin fa-7x' >  </i>
        </div> }

    </>
}

export default People