import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Tvshow = () => {

  const [tvshow, setTvshow] = useState(null)
  let nums = new Array(10).fill(1).map((elem, index) => index + 1)
  console.log(nums);

  let mediaType = 'tv'

  async function getTvshow(page) {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=93683cb31bcf8e8af201267f4f4a7352&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
    setTvshow(data.results)
    console.log(data);
  }

  useEffect(() => {
    getTvshow(1)
  }, [])



  return <>

    {tvshow ? <div className="container">
      <div className="row">
        {tvshow.map((tv, index) => {
          return <div key={index} className="col-md-3">
            <Link className='text-decoration-none text-white ' to={`/detiles/${tv.id}/${mediaType}`} >
              <div className="Card my-3 text-center  cursor-pointer position-relative ">
                <img src={'https://image.tmdb.org/t/p/w500' + tv.poster_path} className='w-100 ' alt={tv.name} />
                <h3 className='h5 mt-2' > {tv.name} </h3>
                <div className='vote p-1 ' > {tv.vote_average.toFixed(1)} </div>
                {/* <h2> {movies.id} </h2> */}
              </div>
            </Link>
          </div>
        })}
      </div>
      <nav className='py-5 ' >
        <ul className='pagination pagination-sm  d-flex justify-content-center ' >
          { nums.map((page, idx) => {
            return <li onClick={() => getTvshow(page)} key={idx} className='page-item  p-1 ' >
              <Link className='page-link bg-transparent text-white  ' href='' > {page} </Link>
            </li>
          })  }


        </ul>
      </nav>
    </div> : <div className='d-flex vh-100  align-items-center justify-content-center ' >
      <i className='fas fa-spinner fa-spin fa-7x' >  </i>
    </div>}



  </>
}

export default Tvshow