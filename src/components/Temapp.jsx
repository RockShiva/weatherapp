import React, { useEffect, useState } from 'react';
import "./css/style.css";

const Temapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Jabalpur");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=83dfc0b0f33f9729a4b794afe2a93ac9`
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    })

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search"
                        className='inputFeild'
                        value={search} onChange={(event) => { setSearch(event.target.value) }}
                        placeholder="Enter a city name.." />
                </div>

                {!city ?
                    (
                        <p className='errorMsg'>No Data Found</p>
                    ) : (
                        <div className='center_info'>
                            <div className="info">
                                <h2 className="location">
                                    <i className="fas fa-street-view"></i>{search}
                                </h2>
                                <h1 className="temp">{city.temp}°Cel</h1>
                                {/* <h1 className="temp">34 </h1> */}
                                <h3 className='tempmin_max'>Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
                            </div>

                            <div className="wave1"></div>
                            <div className="wave2"></div>
                            <div className="wave3"></div>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default Temapp;

