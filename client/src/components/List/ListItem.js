import React, { Component } from 'react';
import { ListContainer,  CommentContainer, CommentButton , CommentItem} from "../../components/List";
import { Btn, Comment } from '../../components/Form';
import API from '../../utils/API';

class ListItem extends Component {
  constructor (props){
    super(props);
    this.state = {
      isHidden: true,
      comment: '',
      currID: 0
    }
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

  render(){
    return (
      <li className="list-group-item tile" key={this.props.id}>
        <h1><strong>{this.props.locationName}</strong></h1>
        <h3>
          <a href={this.props.href}>
            {this.props.location}
          </a>
        </h3>
        <h2>{this.props.category}</h2>
        <CommentButton
          onClick={this.handleCommentToggle}
          value={this.props.id}>
        </CommentButton>
        <br />
        <CommentContainer isHidden={this.state.isHidden}>
          <ListContainer >
            {this.props.commentArray.map(comments =>
              <CommentItem key={comments._id}>
                <h4>{comments.comment}</h4>
              </CommentItem>
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
      </li>
    )
  }
}

export default ListItem;
