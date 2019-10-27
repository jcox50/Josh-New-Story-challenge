import React from 'react';

class Searchpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
           xkcdInfo: [],
           search: ''
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
    };

   
   
    
   
    render() {
        return (
        <div>
            <header className="header-container">
                <div className="latest">
                    <button>Latest!</button>

                </div>
                <div className="search">
                    <button>Search</button>

                </div>
            </header>
            
            <body>
                <div id="wrap">
                    <form onSubmit={this.xkcdSearch} autocomplete="on">
                        <input id="search" name="search" type="text" placeholder="Search for a comic by number..." onChange={this.searchInput}></input><input id="search_submit" value="Search" type="submit"></input>
                    </form>
                </div>
                <h2 className="comicTitle">{this.state.xkcdInfo.title}</h2>
                <img className="latestImage" src={ this.state.xkcdInfo.img } alt={this.state.xkcdInfo.title}/>
            </body>
            <footer>
                <p><b>{this.state.xkcdInfo.alt}</b></p>
                <p>Comic Number: {this.state.xkcdInfo.num}</p>
                <p>Year: {this.state.xkcdInfo.year}</p>
            </footer>
        </div>
        )
    }
}

export default Searchpage;