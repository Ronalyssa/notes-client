import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React, { Component } from 'react';

import NotesContainer from './NotesContainer';
import NavBar from './NavBar'
import NotesForm from './NotesForm'
import LogIn from './LogIn'
import EditForm from './EditForm'


class App extends Component {
  
  state = {
    notes: [],
    editNote: true
  }

  // addNote = (addedNote) => {
  //     this.setState({
  //       notes: [...this.state.notes, addedNote]
  //     })
  //   }


  editState = () => {
    console.log("hello")
  }

  deleteNote = (id) => {
  
    const updatedNote = this.state.notes.filter(note => note.id !== id)
   this.setState({
      notes: updatedNote
    })
    // return updatedNote  const updatedNote =
  }


  componentDidMount() {
    fetch('http://localhost:3000/notes')
    .then(resp => resp.json())
    .then(notesArr => {
        this.setState({
          notes: notesArr
        })
      })
    }

  postNote = (noteInfo) => {
    fetch('http://localhost:3000/notes', { 
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: noteInfo.title,
        content: noteInfo.content
      })
    })
    .then(resp => resp.json())
    .then(newEntry => {
      this.setState({notes: [...this.state.notes, newEntry]})
    })
  }

  render() {
    return (
     <Router>
        <div className="App">
          <header className="App-header">
            <LogIn />
            <NavBar notes={this.state.notes}/>
            {/* <Route exact component={NotesContainer} path={'/notes'} />
            <Route exact component={NotesForm} path={'/notes/new'} /> */}
            <NotesForm postNote={this.postNote}/>
            { this.state.editNote ? <h2> Edit Form </h2> : null} <br></br>
            <NotesContainer notes={this.state.notes} deleteNote={this.deleteNote} editState={this.editState}  />
      
          </header>
        </div>
      </Router>
    );
  }
}

export default App;


