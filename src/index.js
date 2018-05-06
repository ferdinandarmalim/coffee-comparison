import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import './scss/app.scss';

class App extends React.Component {
    render() {
        return <div>
            <Header/>
            <div className="container">
                <h1>Hello Kopi</h1>
            </div>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));