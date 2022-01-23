import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Food.css';
import App from "../App";
import User from "./User";
import Login from "./Login";

export default class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [],
      story: [],
      enter: localStorage.getItem("logined")
    };

  }


  componentDidMount() {
    axios.get("/api/food")
      .then(response => {
        const food = response.data
        this.setState({ food });
      });
  }

  deleteContact(id) {
    alert("You Take it")
    axios.post(`/api/story/add/${id}`)
      .then(res => {
        const story = this.State.story.filter(item => item.id !== id);
        this.setState({ story });
      })
    axios.delete(`/api/food/delete/${id}`)
      .then(res => {
        const food = this.state.food.filter(item => item.id !== id);
        this.setState({ food });
      })

  }

  render() {
    if (localStorage.getItem("logined") == "yes") {
      return (
        <div >
          
          <Link to="/AddFood"><button>Add Food</button></Link>
          <h1 className="work-title" > List  Of   Food : </h1>
          <hr />
          <div className="flex-container">
            {this.state.food.map((item => (
              <div key={item.id}  >
                 <div className="container">
                <img src={item.img} />
                  <h2 className="container">{item.name}</h2>
                  <p>{item.title}</p>
                  <p>Address:{" "}{item.expired}
                    <hr /></p>

                  <button onClick={() => this.deleteContact(item.id)}>Get It</button>

                  {/* <Link to="/Finesh"><button>Finesh</button></Link> */}

                  <hr />
                </div>
              </div>
            )))
            }
          </div>
        </div>
      );
    }
    else {
      return (
        <div>
          <hr /> <hr />
          <h1 className="work-title"> List  Of   Food : </h1>
          <hr />
          <div className="flex-container">
            {this.state.food.map((item => (
              <div key={item.id}>
                <div className="container">
                  <img src={item.img} />
                  <h2>{item.name}</h2>
                  <p>{item.title}</p>
                  <p>Address:
                    <hr />{item.expired}</p>

                  {/* <button onClick={() => this.deleteContact(item.id)}>Get It</button>{" | "} */}

                  <Link to="/Login"><button>Get It</button></Link>

                  {/* <Link to="/Finesh"><button>Finesh</button></Link> */}

                  <hr />
                </div>
              </div>
            )))
            }
          </div>
        </div>
      );

    }
  }
}