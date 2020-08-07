import React, { Component } from 'react';

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(campsite) {
        if(campsite) {
            return (
            <div className="row" />
            );
        }
            return <div />;
    }
}

export default CampsiteInfo;