import React from 'react';

const footerStyle={
    backgroundColor: 'rgb(242, 242, 242)',
    textAlign: 'center',
    padding: '30px 0'
}

export default class Footer extends React.Component {
    render() {
        return (
            <div style={footerStyle}>
                &copy; Copyright 2018 Ferdinan
            </div>
        )
    }
}