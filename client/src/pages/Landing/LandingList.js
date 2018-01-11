import React, { Component } from 'react';
import '../Login/Login.css';
import API from '../../utils/API';
import { ListContainer, ListItem, CommentContainer, CommentButton } from "../../components/List";
import { Btn, Comment } from '../../components/Form';

export class LandingList extends Component {
  state = {
    restroomList: [],
    currID: 0,
    isHidden: true,
    comment: ''
  }

  componentDidMount () {
    API.loadRestrooms()
    .then(res => this.setState({ restroomList: res.data }))
  }

  restroomLink = string => {
    let link = "https://www.google.com/maps/place/";
    link += string;
    return link;
  }

  handleCommentToggle = event => {
    event.preventDefault();
    this.setState({currID: event.target.value});
    if (this.state.isHidden) {
      this.setState({isHidden: false})
    } else {
      this.setState({isHidden: true})
    }
  }

  handleCommentSubmit = event => {
    event.preventDefault();
    console.log(this.state.currID)
    API.newComment(this.state.currID, this.state.comment)
    .then(res => console.log({ results: res.data }))
    .catch(err => console.log(err))
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render () {
    return (
      <div>
        <ListContainer>
          {this.state.restroomList.map(restroom => (
            <ListItem key={restroom._id}>
              <a href={'/restroom/' + restroom._id}>
              <h1><strong>{restroom.name}</strong></h1></a>
              <h3>
                <a href={this.restroomLink(restroom.location)}>
                  {restroom.location}
                </a>
              </h3>
              <div>
                <h2 style={{ float: 'left', marginRight: '40px' }}>
                  {restroom.category}
                </h2>
                <CommentButton
                  onClick={this.handleCommentToggle}
                  value={restroom._id}>
                </CommentButton>
              </div>
              <CommentContainer isHidden={this.state.isHidden}>
                <ListContainer >
                  {restroom.comments.map(comments =>
                    <ListItem
                      style={{ backgroundColor: '#dddddd', marginBottom: '5px' }}
                      key={comments._id}>
                      <h4>{comments.comment}</h4>
                    </ListItem>
                  )}
                </ListContainer>
                <Comment
                value={this.state.comment}
                placeholder='Leave comment here'
                name='comment'
                onChange={this.handleChange}
                 />
                <Btn onClick={this.handleCommentSubmit}> Add Comment </Btn>
              </CommentContainer>
            </ListItem>
          ))}
        </ListContainer>
      </div>
    )
  }
}

export default LandingList;
