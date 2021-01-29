import React, { Component} from 'react'


class EditForm extends Component {
    render() {
        return(
            <form>
                <input name='title'></input>
                <input name='content'></input>
                <input type='submit'> </input>
            </form>
        )
    }
}

export default EditForm;