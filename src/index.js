import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


let request = new XMLHttpRequest()

request.open('GET', 'https://xkcd.now.sh/?comic=latest', true)
request.onload = function(){
    JSON.parse(this.response)
};

ReactDOM.render(<App />, document.getElementById('root'));