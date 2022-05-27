import React, {useEffect, useState} from 'react';
import axios from 'axios';
import useFetch from '../../hooks/useFetch';
import './featuredProperties.css';

const FeaturedProperties = () => {
    // const {data, loading, error } = useFetch('http://localhost:8800/api/hotels?featured=true');
    const images = [
        'https://c4.wallpaperflare.com/wallpaper/473/128/39/adriana-guesthouse-houses-italy-wallpaper-preview.jpg',
        'https://origin.pegipegi.com/jalan/images/pict1L/Y0/Y916370/Y916370111.jpg',
        'https://www.princehotels.com/wp-content/uploads/2019/04/aboutslider2-1.jpg',
        'https://media-cdn.tripadvisor.com/media/photo-s/05/5a/b8/12/presidential-suite.jpg',
        'https://cf.bstatic.com/xdata/images/hotel/max1280x900/291272996.jpg?k=2d57245155acd5b5284c11d7e5e2db791bf07943a4b31e1295d8fbaea252cee2&o=&hp=1',
    ]

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const url = `http://localhost:8800/api/hotels?featured=true`;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(url)
                setData(res.data);
            } catch (error) {
                setError(error);
            }
        }

        fetchData();
        setLoading(false);

    }, [])


    return (
        <div className='fp'>
            {
                data === null && loading ? 'Loading data...' 
                :   (<>
                        {
                            data?.map((d, idx) => (
                                <div className='fpItem' key={d._id}>
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