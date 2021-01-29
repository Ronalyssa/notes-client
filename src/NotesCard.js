import React, { Component } from 'react';
import ShowNote from './ShowNote'
import { Card, Icon } from 'semantic-ui-react'
import { Button, Segment } from 'semantic-ui-react'
import './App.css';


class NotesCard extends Component {


  state = {
    title: [],
    content: [],
    id: 0
  }

  handleView = () => {
    // console.log(this.props.note.id)
    

    const id = this.props.note.id

    fetch(`http://localhost:3000/notes/${id}`)
    .then(resp => resp.json())
    .then(note => {
    this.setState({
      title: note.title,
      content: note.content,
      id: note.id
    })
  })

  }



  handleEdit = () => {
  
    this.props.editState(this.props.note)
  //   const id = this.props.note.id
  //   fetch(`http://localhost:3000/notes/${id}`, { 
  //     method: 'PATCH',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //       title: noteInfo.title,
  //       content: noteInfo.content
  //     })
  //   })
  //   .then(resp => resp.json())
  //   .then(updateEntry => {
  //     this.setState({notes: [...this.state.notes, upDateEntry]})
  //   })
    
  }


  handleDelete = () => {

    const id = this.props.note.id

    fetch(`http://localhost:3000/notes/${id}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then(note => 
            this.props.deleteNote(this.props.note.id)
        )
    }

    render() {
      //console.log(this.state)

      return (
        <div>
         <Card >
          <Card.Content  header={this.props.note.title} />
          <Card.Content description={this.props.note.content} />
          <Card.Content extra>
          <Button onClick={this.handleView} inverted color='violet' size='large'>View</Button>
          <Button onClick={this.handleEdit} inverted color='purple' size='large' >Edit</Button>
          <Button onClick={this.handleDelete} inverted color='pink' size='large' >Delete</Button>

          </Card.Content>
        </Card>
         <ShowNote selectedNote={this.state} deleteNote={this.props.deleteNote}/>
        </div>
      );
    }
  }
  
  export default NotesCard;

  // {this.props.note.title}: 
  //        {this.props.note.content}
  //        <button onClick={this.handleView} > View </button>
  //        <button onClick={this.handleEdit}> edit</button>
