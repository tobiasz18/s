import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountry, getCountries } from '../actions/actions-countries';
import CountryDetails from '../presentational/country-details.component';
import '../country.css';

class CountryDetailsContainer extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.dispatch(getCountries());
        this.props.dispatch(getCountry(this.props.params.id));
        console.log(this.props)
    }

    render() {
        return (
            <CountryDetails country={this.props.selectedCountry} />
        )
    }
}

const mapStateToProps = store => {
    return {
        selectedCountry: store.countriesReducer.selectedCountry
    };
};

export default connect(mapStateToProps)(CountryDetailsContainer);
