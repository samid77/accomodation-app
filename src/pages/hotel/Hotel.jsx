import React, {useState} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import MailList from '../../components/MailList/MailList';
import Footer from '../../components/Footer/Footer';
import './Hotel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faLocationDot, faCircleArrowLeft, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const handleSlider = (idx) => {
        setSlideNumber(idx);
        setOpen(true)
    }
    const handleMove = (direction) => {
        let newSliderNumber;
        if(direction === 'l') {
            newSliderNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSliderNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSliderNumber);
    }

    
    const photos = [
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
      ];

    return (
        <div>
            <Navbar />
            <Header type='list' />
            <div className='hotelContainer'>
                {open && <div className='slider'>
                    <FontAwesomeIcon icon={faCircleXmark} className='closeIcon' onClick={() => setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove('l')}/>
                        <div className='sliderWrapper'>
                            <img src={photos[slideNumber].src} alt='HotelDetail' className='sliderImg'/>
                        </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove('r')} />
                </div>
                }
                <div className='hotelWrapper'>
                    <button className='bookButton'>Reserve or Book Now</button>
                    <h1 className='hotelTitle'>Grand Hotel</h1>
                    <div className='hotelAddress'>
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Sudirman Street No.25</span>
                    </div>
                    <span className='hotelDistance'>
                        Excellent location - 500m from center
                    </span>
                    <span className='hotelPriceHighlight'>
                        Book to stay over Rp.1.500.000 at this property and get a free airport taxi
                    </span>
                    <div className='hotelImages'>
                        {photos.map((p, idx) => (
                            <div className='hotelImgWrapper'>
                                <img 
                                    src={p.src} 
                                    onClick={() => handleSlider(idx)}
                                    alt='HotelImage' 
                                    className='hotelImg'/>
                            </div>
                        ))}
                    </div>
                    <div className='hotelDetails'>
                        <div className='hotelDetailText'>
                            <h1 className='hotelDetailTitle'>Stay in the heart of Jakarta</h1>
                            <p className='hotelDetailDesc'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                        <div className='hotelDetailPrice'>
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
                            <h2>
                                <b>Rp.6.300k</b> (9 nights)
                            </h2>
                            <button>Reserve or book now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    );
};

export default Hotel;