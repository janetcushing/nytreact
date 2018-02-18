import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Panel from "./Panel";
import Jumbotron from "./Jumbotron";
import Form from "./Form";
import ArticleDetail from "./ArticleDetail";
import API from "../utils/API";

class NYTContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchArticles("Obama");
  }

  searchArticles = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

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
                ? <ArticleDetail
                    snippit={this.state.result.snippet}
                    url={this.state.result.web_url}
                    date={this.state.result.pub_date}
                  />
                : <h3>No Results to Display</h3>}
            </Panel>
          </Col>  
        </Row>
      </Container>
    );
  }
}

export default NYTContainer;
