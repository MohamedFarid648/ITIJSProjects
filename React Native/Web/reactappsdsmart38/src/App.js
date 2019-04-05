import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  UserComp from './components/userComponent'
import ChildComp from './components/childComponent'
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      myname: "mn3m",
      imageUrl:"https://www.google.com.eg/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      age:26,
      dataFromChild:{}
    }
    this.phone=45435435;
    this.users=[
      {id:1,name:"moniem",gender:"male"},
      {id:2,name:"mai",gender:"female"},
      {id:3,name:"ahmed",gender:"male"},
      {id:4,name:"sara",gender:"female"},
      {id:5,name:"z3bola",gender:"male"},
    ]
    debugger;
  }

  componentWillMount() {
    debugger;
  }

  handleChangeName() {
    debugger;
    this.setState({ myname: "a7md" });

  }

  handleChangeImage=()=>{
this.setState({imageUrl:"https://ia.media-imdb.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_UY268_CR3,0,182,268_AL_.jpg"})
  }


  render() {
    debugger
    return (
      <div className="App">
      <ChildComp myage={this.state.age} sendDataToParent={(data)=>{
        this.setState({dataFromChild:data})
      }}></ChildComp>
      <h4>{this.state.dataFromChild.id}</h4>
      <h4>{this.state.dataFromChild.name}</h4>
      <h4>{this.phone}</h4>
      <button onClick={()=>{
        this.setState({age:30});
      }}>change age</button>
        <h2>{this.state.myname}</h2>
        <button onClick={this.handleChangeName.bind(this)}>change name</button>
        <img src={this.state.imageUrl} className="myimage" />
        <button onClick={this.handleChangeImage}>change image</button>
        <button onClick={()=>{
          this.setState({imageUrl:"https://static.rogerebert.com/uploads/movie/movie_poster/coco-2017/large_coco_ver2.jpg"})
        }}>change image again</button>
        <h2>header</h2>
      {this.users.map((user,index)=>{
        debugger
        return (<UserComp currentUser={user}></UserComp>)
      })}
      <h2>footer</h2>
      </div>
    );
  }

  componentDidMount() {
    debugger
    this.phone=11111111;
  }

  shouldComponentUpdate() {
    debugger
    return true;
  }

  componentWillUpdate() {
    debugger
  }

  componentDidUpdate() {
    debugger
  }


}

export default App;
