import { Link } from "react-router-dom";

export default function CountryCard({ country, id }) {
    console.log(country);
    return (
        <Link to={`/country/:${id}`}>
            <div className="h-[200px]">
                <img src={country.flags.png} className=" w-full h-full" />
            </div>
            <div className="p-3">
                <h2 className=" mb-2">{country.name.common}</h2>
                <p className="mb-2">
                    <b>Population: </b>
                    {country.population}
                </p>

                <p className="mb-2">
                    <b>Region: </b>
                    {country.region}
                </p>

                <p className="mb-2">
                    <b>Capital: </b>
                    {country?.capital[0]}
                </p>
            </div>
        </Link>
    );
}
