import React, { Component } from 'react';
import '../Login/Login.css';
import API from '../../utils/API';
import { ListContainer, CommentContainer, CommentButton } from "../../components/List";
import ListItem from '../../components/List/ListItem.js'
import { Btn, Comment } from '../../components/Form';

export class LandingList extends Component {
  state = {
    restroomList: [],
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


  render () {
    return (
      <div>
        <ListContainer>
          {this.state.restroomList.map(restroom => (
            <ListItem
              key={restroom._id}
              href={this.restroomLink(restroom.location)}
              category={restroom.category}
              locationName={restroom.name}
              location={restroom.location}
              commentArray={restroom.comments}
              id={restroom._id}
            />
          ))}
        </ListContainer>
      </div>
    )
  }
}

export default LandingList;

{/* <h1><strong>{restroom.name}</strong></h1>
<h3>
  <a href={this.restroomLink(restroom.location)}>
    {restroom.location}
  </a>
</h3>
<h2>{restroom.category}</h2>
<CommentButton
  onClick={this.handleCommentToggle}
  value={restroom._id}>
  Comments
</CommentButton>
<CommentContainer isHidden={this.state.isHidden}>
  <ListContainer >
    {restroom.comments.map(comments =>
      <ListItem key={comments._id}>
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
</CommentContainer> */}
