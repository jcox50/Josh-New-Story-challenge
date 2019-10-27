import React from 'react';
import { Link } from 'react-router-dom';

class Searchpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
           xkcdInfo: [],
           search: '',
           submitted: ''
        };
    }

    searchInput = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    xkcdSearch = (event) => {
        let url = `https://xkcd.now.sh/?comic=${this.state.search}`;
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ xkcdInfo: data })
            )

            event.preventDefault()
    };


    render() {
        return (
        <div>
            <header className="header-container">
                <div>
                    <button className="latest"><Link to = '/'>Latest!</Link></button>

                </div>
                <div>
                    <button className="search"><Link to = '/search'>Search</Link></button>

                </div>
            </header>
            
            <body>
                <div id="wrap">
                    <form onSubmit={this.xkcdSearch} autocomplete="on">
                        <input className="searchInput" id="search" name="search" type="text" placeholder="Search for a comic by number..." onChange={this.searchInput}></input><input className="searchSubmit" id="search_submit" value="Search" type="submit"></input>
                    </form>
                </div>
                <div className="main-image-wrapper">
                    <h2 className="comicTitle">{this.state.xkcdInfo.title}</h2>
                    <img className="searchImage" src={ this.state.xkcdInfo.img } alt={this.state.xkcdInfo.title}/>
                    <p><b>{this.state.xkcdInfo.alt}</b></p>
                    <p>{this.state.xkcdInfo.num}</p>
                    <p>{this.state.xkcdInfo.year}</p>
                </div>
              
            </body>
        </div>
        )
    }
}

export default Searchpage;