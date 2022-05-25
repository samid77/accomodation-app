import React from 'react';
import useFetch from '../../hooks/useFetch';
import './Featured.css'

const Featured = () => {
    const {data, loading, error } = useFetch('http://localhost:8800/api/hotels/countByCity?cities=Jakarta,Bandung,Jogjakarta');

    return (
        <div className='featured'>
            { loading ? (`Loading data...`) : (
                <>
                <div className='featuredItem'>
                    <img
                        src='https://images.unsplash.com/photo-1555899434-94d1368aa7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amFrYXJ0YXxlbnwwfHwwfHw%3D&w=1000&q=80' 
                        className='featuredImg' 
                        alt='featuredImage'/>
                    <div className='featuredTitles'>
                        <h1>Jakarta</h1>
                        <h2>{data[0]} Properties</h2>
                    </div>
                </div>
                <div className='featuredItem'>
                    <img
                        src='https://images.unsplash.com/photo-1611638281871-1063d3e76e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmFuZHVuZyUyQyUyMGluZG9uZXNpYXxlbnwwfHwwfHw%3D&w=1000&q=80' 
                        className='featuredImg' 
                        alt='Bandung Hotels'/>
                    <div className='featuredTitles'>
                        <h1>Bandung</h1>
                        <h2>{data[1]} Properties</h2>
                    </div>
                </div>
                <div className='featuredItem'>
                    <img
                        src='https://c0.wallpaperflare.com/preview/165/286/478/indonesia-jalan-yogyakarta-monument-building.jpg' 
                        className='featuredImg' 
                        alt='Jogja Hotels'/>
                    <div className='featuredTitles'>
                        <h1>Jogjakarta</h1>
                        <h2>{data[2]} Properties</h2>
                    </div>
                </div>
                </>
            )
            }
        </div>
    );
};

export default Featured;