import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Header, Segment } from 'semantic-ui-react'

class NavBar extends Component {
    render() {
      return (
    
        <div>
            <Segment clearing >
                <Header as='h2' floated='right'>
                    New Note
                </Header>
                <Header as='h2' floated='right'>
                   Sign In
                </Header>
                <Header as='h2' floated='left'>
                    FlatNote
                </Header>
            </Segment>
        </div>
      );
    }
  }
  
  export default NavBar;

//   <div className={'ui inverted blue menu'}> 
//   <Link className="ui header" to='/notes'>
//       {/* <i className= {`${this.props.icon} icon`} />
//       <div className="content">{this.props.title}</div>
//       <div className="sub header">{this.props.description}</div> */}
//       FlatNote
//   </Link>
//   <div className="right menu">
//       <Link className="item" to='/login'>
//           Sign In
//       </Link>
//       <br></br>
//       <Link className="item" to='/notes/new'>
//           New Note
//       </Link>
//   </div>