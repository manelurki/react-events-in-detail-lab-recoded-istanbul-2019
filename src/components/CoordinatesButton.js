import React , {Component} from 'react'
class CoordinatesButton extends Component {
    constructor(props){
        super(props)
    }
    handleClick =(event) => {
       let array= [event.clientX,event.clientY];
       this.props.onReceiveCoordinates(array)
    }
    render(){
        return(
            <button onClick={this.handleClick}> btn </button>
        )
    }

}
export default CoordinatesButton