import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Home.css'
import Banner from './Navbar/Banner/Banner';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;