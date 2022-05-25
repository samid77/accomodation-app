import React from 'react';
import './PropertyList.css';

const PropertyList = () => {
    return (
        <div className='pList'>
            <div className='pListItem'>
                <img  
                    alt='Hotels'
                    src='https://www.princehotels.com/wp-content/uploads/2019/04/aboutslider2-1.jpg'
                    className='pListImg' />
                <div className='pListTitle'>
                    <h1>Hotels</h1>
                    <h2>233 Hotels</h2>
                </div>
            </div>
            <div className='pListItem'>
                <img  
                    alt='Apartments'
                    src='https://cdn.vox-cdn.com/thumbor/lf-wrVGFMBYKHZXfTQRaqMKQIwg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19732201/logan_apartments.jpg'
                    className='pListImg' />
                <div className='pListTitle'>
                    <h1>Apartments</h1>
                    <h2>233 Apartments</h2>
                </div>
            </div>
            <div className='pListItem'>
                <img  
                    alt='Villas'
                    src='https://www.chapung.com/wp-content/uploads/2018/08/one-bedroom-villa-1024x683.jpg'
                    className='pListImg' />
                <div className='pListTitle'>
                    <h1>Villas</h1>
                    <h2>233 Villas</h2>
                </div>
            </div>
            <div className='pListItem'>
                <img  
                    alt='Cottages'
                    src='https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2021/07/00liehgton.jpg'
                    className='pListImg' />
                <div className='pListTitle'>
                    <h1>Cottages</h1>
                    <h2>233 Cottages</h2>
                </div>
            </div>
        </div>
    );
};

export default PropertyList;