import React from 'react';
import useFetch from '../../hooks/useFetch';
import './featuredProperties.css';

const FeaturedProperties = () => {
    const {data, loading, error } = useFetch('http://localhost:8800/api/hotels?featured=true');
    const images = [
        'https://c4.wallpaperflare.com/wallpaper/473/128/39/adriana-guesthouse-houses-italy-wallpaper-preview.jpg',
        'https://c1.wallpaperflare.com/preview/797/297/125/tavern-historic-1784-mansion.jpg',
        'https://www.princehotels.com/wp-content/uploads/2019/04/aboutslider2-1.jpg',
        'https://www.princehotels.com/wp-content/uploads/2019/04/aboutslider2-1.jpg',
    ]

    return (
        <div className='fp'>
            {
                loading ? 'Loading data...' 
                :   (<>
                        {
                            data?.map((d, idx) => (
                                <div className='fpItem' key={d.__id}>
                                    <img  
                                        alt='Hotels'
                                        src={images[idx]}
                                        className='fpImg' />
                                    <span className='fpName'>{d?.name}</span>
                                    <span className='fpCity'>{d?.city}</span>
                                    <span className='fpPrice'>Starting from Rp.{d?.cheapestPrice}</span>
                                    {
                                        d.rating && <div className='fpRating'>
                                            <button>{d?.rating}</button>
                                            <span>Excellent</span>
                                        </div>
                                    }
                                </div>
                            ))
                        }
                    </>)
            }
        </div>
    );
};

export default FeaturedProperties;