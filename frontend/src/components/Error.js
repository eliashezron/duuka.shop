import React from 'react'
import Hero from './Hero'
import Banner from './Banner'
import { Link } from 'react-router-dom'

const Error=()=>{
    return 
    <Hero>
        <Banner title='Page not found'
        subtitle='return Home'>
            <Link to = '/' className='btn-primary'>Back Home</Link>
        </Banner>
    </Hero>
}