import React, { useEffect, useState } from 'react'
import axios from 'axios'
import HeroList from '../heroList'

const Hero = () =>{
    const [hero, setHero] = useState()
    const [load, setLoad] = useState(false)
    const [page, setPage] = useState(1)

    useEffect(()=>{
        axios.get(`http://localhost:5003/api/superhero/${page}`
        )
          .then((res) => setHero(res.data))
        setTimeout(() => {
          setLoad(true)
        }, 1000);
    },[page])

    const mapHero = (u) =>{
        return <HeroList key={u.id} u={u} />
    }

    const next = () =>{
        setPage(page+1)
        console.log(page)
    }

    const prev = () =>{
        if(page > 0 ){
        setPage(page-1)}
        console.log(page)
    }

    return <>
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
            <div>{!load? <div>Load...</div>: <div>{hero.map(mapHero)}</div>}</div></>
}

export default Hero