import React, { Component } from 'react';

class NotesForm extends Component {

   state = {
            title: '',
            content: ''
        }
   

    handleTitle= (e) => {
       this.setState({
        title: e.target.value
       })
    }

    handleContent= (e) => {
        this.setState({
         content: e.target.value
        })
     }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.postNote(this.state)
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            Title <input type='text' name='title' value={this.state.title} onChange={this.handleTitle} /> 
            Content <input type='text' name='content' value={this.state.content} onChange={this.handleContent} /> 
            Submit<input type='submit' />
        </form>
      );
    }
  }
  
  export default NotesForm;