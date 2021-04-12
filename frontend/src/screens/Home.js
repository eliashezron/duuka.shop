import React from 'react'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import Banner from '../components/Banner'

const Home = ()=>{
    return(
        <Hero>
            <Banner title='Duuka.shop'
            subtitle='start your business in five minutes with a click of a button'>
                <Link to='/Admin' className='btn-primary'>
                    sign Up
                </Link>
            </Banner>
        </Hero>
    )
}
export default Home