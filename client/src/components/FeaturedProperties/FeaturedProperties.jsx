import React from 'react';
import './featuredProperties.css';

const FeaturedProperties = () => {
    return (
        <div className='fp'>
            <div className='fpItem'>
                <img  
                    alt='Hotels'
                    src='https://c4.wallpaperflare.com/wallpaper/473/128/39/adriana-guesthouse-houses-italy-wallpaper-preview.jpg'
                    className='fpImg' />
                <span className='fpName'>Guest House A</span>
                <span className='fpCity'>Jakarta</span>
                <span className='fpPrice'>Starting from Rp.2.000.000.000</span>
                <div className='fpRating'>
                    <button>4.7</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className='fpItem'>
                <img  
                    alt='Hotels'
                    src='https://c1.wallpaperflare.com/preview/797/297/125/tavern-historic-1784-mansion.jpg'
                    className='fpImg' />
                <span className='fpName'>Guest House B</span>
                <span className='fpCity'>Bandung</span>
                <span className='fpPrice'>Starting from Rp.2.000.000.000</span>
                <div className='fpRating'>
                    <button>4.5</button>
                    <span>Good</span>
                </div>
            </div>
            <div className='fpItem'>
                <img  
                    alt='Hotels'
                    src='https://www.princehotels.com/wp-content/uploads/2019/04/aboutslider2-1.jpg'
                    className='fpImg' />
                <span className='fpName'>Apartment C</span>
                <span className='fpCity'>Jakarta</span>
                <span className='fpPrice'>Starting from Rp.1.000.000.000</span>
                <div className='fpRating'>
                    <button>4.7</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className='fpItem'>
                <img  
                    alt='Hotels'
                    src='https://www.princehotels.com/wp-content/uploads/2019/04/aboutslider2-1.jpg'
                    className='fpImg' />
                <span className='fpName'>Apartment D</span>
                <span className='fpCity'>Jogjakarta</span>
                <span className='fpPrice'>Starting from Rp.1.800.000.000</span>
                <div className='fpRating'>
                    <button>4.5</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProperties;