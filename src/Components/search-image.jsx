import React from 'react';

class SearchImage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            xkcdInfo: [],
        };
    }

    componentDidMount() {
        fetch('https://xkcd.now.sh/?comic={promise a number}')
            .then(response => response.json())
            .then(data => this.setState({ xkcdInfo: data })
            )


    }

    render() {
        return (
            <div className="image">
                <body>
                    <h2 className="comicTitle">{this.state.xkcdInfo.title}</h2>
                    <img src={this.state.xkcdInfo.img} alt={this.state.xkcdInfo.title} />
                </body>
                <footer>
                    <p><b>{this.state.xkcdInfo.alt}</b></p>
                    <p>Comic Number: {this.state.xkcdInfo.num}</p>
                    <p>Year: {this.state.xkcdInfo.year}</p>
                </footer>
            </div>
        )
    };

}

export default SearchImage;