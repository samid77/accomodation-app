import React from 'react';
import useFetch from '../../hooks/useFetch';
import './PropertyList.css';

const PropertyList = () => {
    const {data, loading, error } = useFetch('http://localhost:8800/api/hotels/countByType');
    const images = [
        `https://www.princehotels.com/wp-content/uploads/2019/04/aboutslider2-1.jpg`,
        `https://cdn.vox-cdn.com/thumbor/lf-wrVGFMBYKHZXfTQRaqMKQIwg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19732201/logan_apartments.jpg`,
        `https://www.chapung.com/wp-content/uploads/2018/08/one-bedroom-villa-1024x683.jpg`,
        `https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2021/07/00liehgton.jpg`

    ]

    return (
        <div className='pList'>
            {
                loading ? 'Loading data...'
                : (
                    <>
                        { data && images.map((i, idx) => (
                                <div className='pListItem' key={i}>
                                    <img  
                                        alt='Hotels'
                                        src={i}
                                        className='pListImg' />
                                    <div className='pListTitle'>
                                        <h1>{data[idx]?.type}</h1>
                                        <h2>{data[idx]?.count} {data[idx]?.type}s</h2>
                                    </div>
                                </div>
                            ))
                        }
                    </>
                )
            }
        </div>
    );
};

export default PropertyList;