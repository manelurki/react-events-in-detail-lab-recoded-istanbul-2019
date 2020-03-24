import React, { Component } from 'react'

export default class DelayedButton extends Component {
    handleClick = (e) => {
        e.persist()
        setTimeout(this.props.onDelayedClick, this.props.delay, e);
      }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}