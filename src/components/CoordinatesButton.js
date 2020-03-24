import React , {Component} from 'react'
class CoordinatesButton extends Component {
    constructor(props){
        super(props)
    }
    handleClick =(e) => {
       let arr= [e.clientX,e.clientY];
       this.props.onReceiveCoordinates(arr)
    }
    render(){
        return(
            <button onClick={this.handleClick}> btn </button>
        )
    }

}
export default CoordinatesButton