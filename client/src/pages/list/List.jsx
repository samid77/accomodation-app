import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import {DateRange} from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import SearchItem from '../../components/SearchItem/SearchItem';
import './List.css';

const List = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)
    const [openDate, setOpenDate] = useState(false);
    
    return (
        <div>
            <Navbar />
            <Header type='list' />
            <div className='listContainer'>
                <div className='listWrapper'>
                    <div className='listSearch'>
                        <h1 className='listTitle'>Search</h1>
                        <div className='listSearchItem'>
                            <label>Destination</label>
                            <input  placeholder="Where to go ?" type='text'/>
                        </div>
                        <div className='listSearchItem'>
                            <label>Check In Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}</span>
                            {
                                openDate &&
                                <DateRange
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    minDate={new Date()}
                                    />
                            }
                        </div>
                        <div className='listSearchItem'>
                            <label>Options</label>
                            <div className='listOptions'>
                                <div className='listSearchOptionsItem'>
                                    <span className='listOptionText'>Min price <small>per night</small></span>
                                    <input type='number' className='listOptionInput'/>
                                </div>
                                <div className='listSearchOptionsItem'>
                                    <span className='listOptionText'>Max price <small>per night</small></span>
                                    <input type='number' className='listOptionInput'/>
                                </div>
                                <div className='listSearchOptionsItem'>
                                    <span className='listOptionText'>Adult</span>
                                    <input type='number' min={1} className='listOptionInput' placeholder={options.adult}/>
                                </div>
                                <div className='listSearchOptionsItem'>
                                    <span className='listOptionText'>Children</span>
                                    <input type='number' min={0} className='listOptionInput' placeholder={options.children}/>
                                </div>
                                <div className='listSearchOptionsItem'>
                                    <span className='listOptionText'>Room</span>
                                    <input type='number' min={1} className='listOptionInput' placeholder={options.room}/>
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className='listResult'>
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;