import { useCountries } from "../context/countryContext";
import CountryCard from "../features/CountryCard";
import SearchBar from "../features/SearchBar";

export default function Home() {
    const { state } = useCountries();

    const { countries, filteredCountries } = state;
    return (
        <>
            <SearchBar />
            <div className="max-w-7xl m-auto grid md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                {!filteredCountries.length
                    ? countries.map((country, i) => (
                          <CountryCard country={country} key={i} id={i} />
                      ))
                    : filteredCountries.map((country, i) => (
                          <CountryCard country={country} key={i} id={i} />
                      ))}
            </div>
        </>
    );
}
