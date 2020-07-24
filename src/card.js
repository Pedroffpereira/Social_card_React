import React from 'react';

import './card.css';

class card extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

                <div className="card">
                    <div className="card-head">
                        <div className="card-title">
                            {this.props.title}
                        </div>
                        <div className="card-img-tec-logo">
                            <img src={this.props.logo} />
                        </div>
                    </div>
                    <div className="card-body">
                        {this.props.description}
                    </div>
                </div>
   
        )
    }

}
export default card