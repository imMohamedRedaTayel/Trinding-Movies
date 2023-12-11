import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MeadaItem from '../meadaItem/meadaItem.'

const Home = () => {

  const [movies, setMovies] = useState([])
  const [tvshow, setTvshow] = useState([])
  const [people, setPeople] = useState([])

  async function getTrending(mediaItem, callback) {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaItem}/week?api_key=93683cb31bcf8e8af201267f4f4a7352`)
    callback(data.results)
    console.log(data.results);
  }

  useEffect(() => {
    getTrending('movie', setMovies)
    getTrending('tv', setTvshow)
    getTrending('person', setPeople)
  }, [])


  return <>

    {movies[0] ? <section className='home' >

      <div className="row align-items-center mt-5 " >

        <div className="col-md-4 d-flex align-items-center  ">
          <div className="movie ">
            <div className="brdr w-25 mb-3 "></div>
            <h2 className='h3' > Trending <br /> Movies <br /> To Watch Now </h2>
            <p className='text-white ' > Most Watched Movies By Week </p>
            <div className="brdr w-100 mt-3 "></div>
          </div>
        </div>

        {movies.map((Card, index) => { return <MeadaItem key={index} Card={Card} /> })}



      </div>

      <div className="row align-items-center mt-5 " >

        <div className="col-md-4 d-flex align-items-center  ">
          <div className="movie ">
            <div className="brdr w-25 mb-3 "></div>
            <h2 className='h3' > Trending <br /> Tv <br /> To Watch Now </h2>
            <p className='text-white ' > Most Watched Tv By Week </p>
            <div className="brdr w-100 mt-3 "></div>
          </div>
        </div>

        {tvshow.map((Card, index) => { return <MeadaItem key={index} Card={Card} /> })}



      </div>

      <div className="row align-items-center mt-5 " >

        <div className="col-md-4 d-flex align-items-center  ">
          <div className="movie ">
            <div className="brdr w-25 mb-3 "></div>
            <h2 className='h3' > Trending <br /> People <br /> To Watch Now </h2>
            <p className='text-white ' > Most Watched People By Week </p>
            <div className="brdr w-100 mt-3 "></div>
          </div>
        </div>

        {people.map((Card, index) => { return <MeadaItem key={index} Card={Card} /> })}


      </div>

    </section> : <div className='d-flex vh-100  align-items-center justify-content-center ' >
      <i className='fas fa-spinner fa-spin fa-7x' >  </i>
    </div>}



  </>
}

export default Home