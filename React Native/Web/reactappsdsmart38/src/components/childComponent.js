import React,{Component} from 'react'

export default class ChildComp extends Component{
    constructor(props)
    {
        super(props);
        this.state={

        }
    }

    componentWillReceiveProps(nextProps)
    {
        debugger;
    }

    render()
    {
        return (<div>
            <h2>ana child component</h2>
            <h3>{this.props.myage!=undefined ? this.props.myage : null}</h3>
            <button onClick={()=>{
                this.props.sendDataToParent({id:1,name:"moniem"});
            }}>send data to parent </button>
        </div>)
    }
}