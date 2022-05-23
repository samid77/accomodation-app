import React from 'react';
import './SearchItem.css'

const SearchItem = () => {
    return (
        <div className='searchItem'>
            <img 
                src='https://besthqwallpapers.com/Uploads/6-11-2017/27286/thumb2-interior-of-hotel-room-modern-design-brown-tone-hotel-room-room-for-three.jpg'
                alt="search item"
                className='searchItemImg'
            />
            <div className='searchItemDesc'>
                <h1 className='searchItemTitle'>Tower Street Apartment</h1>
                <span className='searchItemDistance'>500 from center business district</span>
                <span className='searchItemTransport'>Free airport taxi</span>
                <span className='searchItemSubtitle'>Studio Apartment with Air Conditioning</span>
                <span className='searchItemFeatures'>Entire studio * 1 Bathroom * 21m * King size bed</span>
                <span className='searchItemCancelOp'>Free Cancellation</span>
                <span className='searchItemCancelOpSubtitle'>You can cancel later, so lock in this great price today</span>
            </div>
            <div className='searchItemDetails'>
                <div className='searchItemRating'>
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className='searchItemDetailText'>
                    <span className='searchItemPrice'>Rp.1.785.000</span>
                    <span className='searchItemTax'>Includes taxes and fees</span>
                    <button className='searchItemCheckButton'>See Availability</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;