import React from 'react';
import '../country.css'

const CountryFlag = ({country}) => (
    <div className="country-logo-wrapper">
        <img className="country-logo" src={country.imageUrl} alt="CountryFlag"/>
        <h1>{country.name}</h1>
    </div>
);
export default CountryFlag
