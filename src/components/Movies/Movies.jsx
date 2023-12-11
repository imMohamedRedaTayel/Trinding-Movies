import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Movies = () => {

  const [movie, setMovies] = useState(null)
  let nums = new Array(10).fill(1).map((elem, index) => index + 1)
  console.log(nums);

  let mediaType = 'movie'

  async function getMovies(page) {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=93683cb31bcf8e8af201267f4f4a7352&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
    setMovies(data.results)
    console.log(data);
  }

  useEffect(() => {
    getMovies(1)
  }, [])



  return <>

    {movie ? <div className="container">
      <div className="row">
        {movie.map((movies, index) => {
          return <div key={index} className="col-md-3">
            <Link className='text-decoration-none text-white ' to={`/detiles/${movies.id}/${mediaType}`} >
              <div className="Card my-3 text-center  cursor-pointer position-relative ">
                <img src={'https://image.tmdb.org/t/p/w500' + movies.poster_path} className='w-100 ' alt={movies.title} />
                <h3 className='h5 mt-2' > {movies.title} </h3>
                <div className='vote p-1 ' > {movies.vote_average.toFixed(1)} </div>
                {/* <h2> {movies.id} </h2> */}
              </div>
            </Link>
          </div>
        })}
      </div>
      <nav className='py-5 ' >
        <ul className='pagination pagination-sm  d-flex justify-content-center ' >
          { nums ? nums.map((page, idx) => {
            return <li onClick={() => getMovies(page)} key={idx} className='page-item  p-1 ' >
              <Link className='page-link bg-transparent text-white  ' href='' > {page} </Link>
            </li>
          }) : <div className='d-flex vh-100  align-items-center justify-content-center ' >
          <i className='fas fa-spinner fa-spin fa-7x' >  </i>
        </div> }


        </ul>
      </nav>
    </div> : <div className='d-flex vh-100  align-items-center justify-content-center ' >
      <i className='fas fa-spinner fa-spin fa-7x' >  </i>
    </div>}



  </>
}

export default Movies