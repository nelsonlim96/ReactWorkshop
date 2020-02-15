import React, { Component } from 'react';
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';

class App extends Component {

    constructor() {
        super();
        this.state = {
            weather: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://api.data.gov.sg/v1/environment/air-temperature').then(response => {
            return response.json();
        })
            .then(weather => {
                const updatedWeather = [];
                for (let i = 0; i < weather.metadata.stations.length; i++) {
                    updatedWeather.push({ ...weather.metadata.stations[i], ...weather.items[0].readings[i] })
                }
                this.setState({ weather: updatedWeather });
            })
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { weather, searchfield } = this.state;

        const filterWeather = weather.filter(eachWeather => {
            return eachWeather.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        if (weather.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className="tc">
                    <h1>Weather App</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList weather={filterWeather} />
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;