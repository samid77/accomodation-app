import React from 'react';
import {Link} from 'react-router-dom';
import './SearchItem.css'

const SearchItem = ({item}) => {
    return (
        <div className='searchItem'>
            <img 
                // src='https://besthqwallpapers.com/Uploads/6-11-2017/27286/thumb2-interior-of-hotel-room-modern-design-brown-tone-hotel-room-room-for-three.jpg'
                src={item.photos[0]}
                alt="search item"
                className='searchItemImg'
            />
            <div className='searchItemDesc'>
                <h1 className='searchItemTitle'>{item.name}</h1>
                <span className='searchItemDistance'>{item.distance} from center business district</span>
                <span className='searchItemTransport'>Free airport taxi</span>
                <span className='searchItemSubtitle'>Studio Apartment with Air Conditioning</span>
                <span className='searchItemFeatures'>{item.description}</span>
                <span className='searchItemCancelOp'>Free Cancellation</span>
                <span className='searchItemCancelOpSubtitle'>You can cancel later, so lock in this great price today</span>
            </div>
            <div className='searchItemDetails'>
                {item.rating && <div className='searchItemRating'>
                    <span>Excellent</span>
                    <button>{item.rating}</button>
                </div>}
                <div className='searchItemDetailText'>
                    <span className='searchItemPrice'>Rp.{item.cheapestPrice}</span>
                    <span className='searchItemTax'>Includes taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className='searchItemCheckButton'>See Availability</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;