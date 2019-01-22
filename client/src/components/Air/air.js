import React from 'react';
import axios from 'axios'



class Air extends React.Component {
    state = {
        flightlist: ''
    }
    componentDidMount(){
        this.props.lat
        this.props.lng
        axios.get('air url here', function(data){
            this.setState({
                flightlist: data
            })
        })
    }
    render(){
        return(<div>
            {
                this.state.flightlist ? 
                this.state.flightlist.map(ele => {
                    return(`<div>
                     ${ele.something}
                     <p>${ele.something}</p>
                    
                    </div>`)
                })
                :
                "No flights found"

            }
        </div>)
    }
}




export default Air;