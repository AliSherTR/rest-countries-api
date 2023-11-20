import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
    countries: [],
    region: "",
    name: "",
    filteredCountries: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "COUNTRIES":
            return {
                ...state,
                countries: action.payload,
                filteredCountries: action.payload,
            };
        case "SET_REGION":
            return { ...state, name: "", region: action.payload };
        case "SET_NAME":
            return { ...state, region: "", name: action.payload };
        case "FILTER_COUNTRIES":
            return {
                ...state,
                filteredCountries: state.name
                    ? state.countries.filter(
                          (country) => country.name.common === state.name
                      )
                    : state.countries.filter(
                          (country) => country.region === state.region
                      ),
            };
        default:
            return state;
    }
};

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setRegion = (newRegion) => {
        dispatch({ type: "SET_REGION", payload: newRegion });
    };

    const setName = (name) => {
        dispatch({ type: "SET_NAME", payload: name });
    };

    useEffect(() => {
        async function getCountries() {
            const res = await fetch(
                "https://restcountries.com/v3.1/all?fields=name,population,borders,region,flags,capital"
            );
            const data = await res.json();
            dispatch({ type: "COUNTRIES", payload: data });
        }
        getCountries();
    }, []);

    useEffect(() => {
        dispatch({ type: "FILTER_COUNTRIES" });
    }, [state.region, state.name]);

    return (
        <CountryContext.Provider value={{ state, setRegion, setName }}>
            {children}
        </CountryContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCountries = () => {
    return useContext(CountryContext);
};
