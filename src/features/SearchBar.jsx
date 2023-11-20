import { useCountries } from "../context/countryContext";

export default function SearchBar() {
    const { setRegion, setName } = useCountries();

    return (
        <div className=" max-w-7xl m-auto flex flex-col md:flex-row gap-y-2 md:items-center md:justify-between py-8">
            <input
                type="text"
                placeholder="Enter a country"
                className="px-3 py-2 border rounded-sm bg-white text-black basis-[35%]"
                onChange={(e) => setName(e.target.value)}
            />

            <select
                className="px-3 py-2 border rounded-sm bg-white text-gray-500"
                onChange={(e) => setRegion(e.target.value)}
            >
                <option value="" defaultChecked>
                    Filter by Region
                </option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Antartica">Antartica</option>
            </select>
        </div>
    );
}
