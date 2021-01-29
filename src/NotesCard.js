import React, { Component } from 'react';
import ShowNote from './ShowNote'
import { Card, Icon } from 'semantic-ui-react'


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

  deleteNote = (id) => {
    console.log(this.state)
   this.setState({
      title:[],
      content: [],
      id: 0
    })
    // return updatedNote  const updatedNote =
  }



  handleEdit = () => {
    console.log("I want to be updated")
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

    render() {
      //console.log(this.state)

      return (
        <div>
         <Card>
          <Card.Content header={this.props.note.title} />
          <Card.Content description={this.props.note.content} />
          <Card.Content extra>
          <button onClick={this.handleView} > View </button>
          <button onClick={this.handleEdit}> edit</button>
          </Card.Content>
        </Card>
         <ShowNote selectedNote={this.state} deleteNote={this.deleteNote}/>
        </div>
      );
    }
  }
  
  export default NotesCard;

  // {this.props.note.title}: 
  //        {this.props.note.content}
  //        <button onClick={this.handleView} > View </button>
  //        <button onClick={this.handleEdit}> edit</button>
