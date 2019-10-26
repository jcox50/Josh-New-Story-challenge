import React from 'react';

class SearchSubmit extends React.Component {


    componentDidMount() {
        fetch('https://xkcd.now.sh/?comic={promise a number}')
            .then(response => response.json())
            .then(data => this.setState({ xkcdInfo: data })
            )


    }
}

export default SearchSubmit;