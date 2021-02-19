import React, { Component } from 'react';
import {sendPost} from '../actions/postAction';

export default class PostForm extends Component {

    constructor(props){

        super(props);

        this.state = {

            title: '',
            body: ''

        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e){

        this.setState({[e.target.name]: e.target.value});

    }

    onSubmit(e){

        e.preventDefault();

        const post = {

            title: this.state.title,
            body: this.state.body

        }

        this.props.sendPost(post)

    }

    render() {
        
        return (
            <form className="form" onSubmit={this.onSubmit}>

                <h2>Make a post</h2>

                <label htmlFor="title" className="formLabel">

                    Title:
                    <input name="title" type="text" id="title" onChange={this.onChange}/>

                </label>

                <label htmlFor="body" className="formLabel">
                    Body:
                    <textarea name="body" id="body" cols="30" rows="10" onChange={this.onChange}></textarea>
                </label>

                <button type="submit" className="btn_submit">submit</button>
                
            </form>
        )
    }
}
