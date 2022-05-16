import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Featured from '../../components/Featured/Featured';
import './home.css';
import PropertyList from '../../components/PropertyList/PropertyList';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className='homeContainer'>
                <Featured />
                <h1 className='homeTitle'>Browse by Property Type</h1>
                <PropertyList />
            </div>
        </div>
    );
};

export default Home;