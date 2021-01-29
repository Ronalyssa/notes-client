import React, { Component } from 'react';
import { Button, Segment } from 'semantic-ui-react'
import './App.css';
import { Input } from 'semantic-ui-react'

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
        <div>
            <Button inverted color='teal' size='massive'>New Note</Button>
            <form onSubmit={this.handleSubmit} >
            Title <input type='text' name='title' value={this.state.title} onChange={this.handleTitle} />
            Content <input type='text' name='content' value={this.state.content} onChange={this.handleContent} /> 
            <Input type='submit'  action={{color: 'teal', labelPosition: 'left',icon: 'book'}}/>
        </form>
        </div>

           
      );
    }
  }
  
  export default NotesForm;