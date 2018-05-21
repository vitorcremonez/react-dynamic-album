import React, {Component} from 'react';

class RichText extends Component {
    render() {
        const input = this.props.children;
        return input.split("\n").map((item) => {
            return (
                <span key={item}>
                    {item}<br/>
                </span>
            );
        });
    }
}

export default RichText;