import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Settings from './components/Settings';
import Filter from './components/Filter';
import Image from './components/Image';
import FilterList from './components/FilterList';

export default class App extends Component {
    state = {
        image: 'https://images.pexels.com/photos/991678/pexels-photo-991678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        selectedFilter: '',
        settings: {
            contrast: 100,
            hue: 0,
            brightness: 100,
            saturate: 100,
            sepia: 0
        }
    };

    handleChange = ev => {
        let setting = ev.target.id;
        let value = ev.target.value;
        let settings = { ...this.state.settings, [setting]: value };

        this.setState({ selectedFilter: '', settings});
    }

    updateSettings = (selectedFilter, settings) => {
        this.setState({ selectedFilter, settings });
    }

    render() {
        let { image, selectedFilter, settings } = this.state;

        return (
            <div className='app'>
                <Header title='Reactagram' />

                <section className='Settings'>
                    <Settings settings={settings} handleChange={this.handleChange} />

                    <main className='MainWrapper'>
                        <Filter settings={settings} >
                            <Image src={image}/>
                        </Filter>

                        <FilterList 
                           image={image}
                           settings={settings}
                           selectedFilter={selectedFilter}
                           updateSettings={this.updateSettings} />
                    </main>
                </section>
            </div>
        );
    }
}