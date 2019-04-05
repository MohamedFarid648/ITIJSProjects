import React, { Component } from 'react'

export default class UserComp extends Component {
    constructor(props) {
        debugger;
        super(props);
        this.state = {
            show: true
        }
    }
    componentWillReceiveProps(nextProps) {

    }

    render() {
        return (<div>
            {this.props.currentUser.id}
            <button onClick={()=>{
                this.setState({show:!this.state.show});
            }}>show/hide name</button>
            {this.state.show===true ? this.props.currentUser.name : null}
            {this.props.currentUser.gender}
        </div>)
    }
}