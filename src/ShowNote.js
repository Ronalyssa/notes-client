import React, { Component } from 'react';




class ShowNote extends Component {

    handleBack = () => {
    
    }

    handleEdit = () => {
        const id = this.props.selectedNote.id

    fetch(`http://localhost:3000/notes/${id}`)
    .then(resp => resp.json())
    .then(note => {
    this.setState({
      title: note.title,
      content: note.content
    })
  })
    
    }


    render() {
      //console.log(this.props.selectedNote.id)
        return(
            <div>
                {/* <button onClick={this.handleBack}> Back to All Notes </button>
                <button onClick={this.handleEdit}> Edit </button>
                <button onClick={this.handleDelete}> Delete Note </button> */}
            </div>
        )
    }
}


export default ShowNote;