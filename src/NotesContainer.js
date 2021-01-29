import React, { Component } from 'react';
import NotesCard from './NotesCard'


class NotesContainer extends Component {

   
    showSingleNote = (id) => {
        fetch(`http://localhost:3000/notes/${id}`)
        .then(resp => resp.json())
        .then(notesArr => {
        this.setState({
          notes: notesArr
        })
      })
    }
    renderNotes = () => {
        return this.props.notes.map(noteObj => {
            return <NotesCard key={noteObj.id} note={noteObj} />
        })
     }

    render() {
      return (
        <div>
            {this.renderNotes()}
            
        </div>
      );
    }
  }
  
  export default NotesContainer;