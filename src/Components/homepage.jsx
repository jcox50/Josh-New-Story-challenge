import React from "react";




class latestImage extends React.Component{
    constructor() {
        super();
        this.state = { 
            img: [],
            title: [],
            alt: [] 
        };
    }

    componentDidMount(){
        fetch('https://xkcd.now.sh/?comic=latest')
        .then(response => response.json())
        .then(data => this.setState({ img: data.img }));
    }

    render(){
        return(
        <div className="image">
            <img src={this.img.img}  />
        </div>
        )};


}

export default latestImage;