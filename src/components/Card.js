import React from 'react'

const cardStyle = {
    padding: '20px',
    margin: '10px',
    border: '1px solid #ACACAC',
    borderRadius: '10px'
}

export default class Card extends React.Component {
    render() {
        return (
            <div style={cardStyle}>
                <h2>{this.props.name}</h2>
                <p className="description">{this.props.caption}</p>
                <button className="button">Lihat Detail</button>
            </div>
        )
    }
}