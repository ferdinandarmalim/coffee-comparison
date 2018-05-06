import React from 'react';

const searchStyle = {
    height: '28px',
    borderRadius: '5px',
    padding: '20px',
    width: '100%'
}

const backgroundStyle = {
    backgroundColor: '#222',
    padding: '15px'
}

export default class Search extends React.Component {
    render() {
        return (
            <div style={backgroundStyle}>
                <input style={searchStyle} type="text" placeholder="Search..." />
            </div>
        )
    }
}