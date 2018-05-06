import React from 'react'

export default class Card extends React.Component {
    render() {
        return (
            <div className='card'>
                <h2>{this.props.name}</h2>
                <p className="description">{this.props.caption}</p>
                <button className="button">Lihat Detail</button>
            </div>
        )
    }
}