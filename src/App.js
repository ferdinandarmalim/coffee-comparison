import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import Search from './components/Search';
import Card from './components/Card';
import Footer from './components/Footer';
import './scss/app.scss';
import kopi from "./data/kopi.json";

const fixedHeader = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw'
}

class App extends React.Component {
    render() {
        const listKopi = kopi;

        return (
            <div>
                <div style={fixedHeader}>
                    <Header />
                    <Search />
                </div>
                <div className="card-container">
                    {listKopi.map(((data, i) => {
                        return (
                            <div className="cards" key={i}>
                                <Card name={data.name} caption={data.caption} />
                            </div>
                        )
                    }))}
                </div>
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));