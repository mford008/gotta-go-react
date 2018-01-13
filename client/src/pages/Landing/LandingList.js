import React, { Component } from 'react';
import '../Login/Login.css';
import API from '../../utils/API';
import { ListContainer } from "../../components/List";
import ListItem from '../../components/List/ListItem.js';

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
