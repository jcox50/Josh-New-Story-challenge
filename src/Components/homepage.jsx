import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
           xkcdInfo: [],
        };
    }
   
    componentDidMount(){
        fetch('https://xkcd.now.sh/?comic=latest')
        .then(response => response.json())
        .then(data => this.setState({ xkcdInfo: data })
        )
        
        
    }
   
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
                <div className="main-image-wrapper">
                    <h2 className="comicTitle">{this.state.xkcdInfo.title}</h2>
                    <img className="latestImage" src={ this.state.xkcdInfo.img } alt={this.state.xkcdInfo.title}/>
                    <p><b>{this.state.xkcdInfo.alt}</b></p>
                    <p>Comic Number: {this.state.xkcdInfo.num}</p>
                    <p>Year: {this.state.xkcdInfo.year}</p>
                </div>
            </body>   
        </div>
        )
    }
}

export default Homepage;