import { GET_COUNTRY, GET_COUNTRIES, DELETE_COUNTRY, SET_CONTINENT, SEARCH_COUNTRIES } from '../actions/actions-countries';
import countriesData from '../data/countries.json';

const initialState = {
    countries : countriesData,
    selectedCountry: {},
    visibleCountries: [],
};

const countriesReducer = function(state = initialState, action) {
    switch(action.type) {
        case GET_COUNTRIES:
            return Object.assign({}, state, {countries2: state.countries});
        case GET_COUNTRY:
            const selectedCountry = state.countries.find(country => country.id == action.id);
            return Object.assign({}, state, {selectedCountry});
        case SEARCH_COUNTRIES:
            const foundCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase()));
            return Object.assign({}, state, {visibleCountries: foundCountries});
        case DELETE_COUNTRY:
            const notDeletedCountriesVisible = state.visibleCountries.filter(country => country.id !== action.id);
            return Object.assign({}, state, {visibleCountries: notDeletedCountriesVisible});
        case SET_CONTINENT:
            const setContinents = state.countries.filter(country => country.continent === action.name);
            return Object.assign({}, state, {visibleCountries: setContinents});
    }

    return state;
};

export default countriesReducer;
