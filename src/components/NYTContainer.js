import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Panel from "./Panel";
import Jumbotron from "./Jumbotron";
import Form from "./Form";
import Results from "./Results";
// import API from "../utils/API";

class NYTContainer extends Component {
  state = {
    result: {},
    search: ''
  };

  // When this component mounts, search for the movie "The Matrix"
  // componentDidMount() {
  //   let query1 = ({
  //     'q': "obama",
  //     'begin_date': "20180101",
  //     'end_date': "20180131"
  //   });
  //   console.log("query1: ");
  //   console.log(query1);
  //   this.searchArticles(query1);
  // }

  // searchArticles = query => {
  //   console.log("Im in searchArticles")
  //   query = ({
  //     'q': "obama",
  //     'begin_date': "20180101",
  //     'end_date': "20180131"
  //   });
  //   console.log("query: ");
  //   console.log(query);
  //   API.search(query)
  //     .then(res => this.setState({ result: res.data }))
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticles(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="sm-12">
            <Jumbotron heading="New York Times Search"/>
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <Panel heading="Search">
              <Form/>
            </Panel>
          </Col>
        </Row>
   
        <Row>
          <Col size="sm-12">
            <Panel heading="Top Articles">
              {this.state.result.title
                ? <Results/>
                : <h3>No Results to Display</h3>}
            </Panel>
          </Col>  
        </Row>
      </Container>
    );
  }
}

export default NYTContainer;
