import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postAction';

class Posts extends Component {

    componentDidMount(){

        this.props.fetchPosts();

    }

    componentWillReceiveProps(nextProps){

        if(nextProps.newPost){

            this.props.posts.unshift(nextProps.newPost)

        }

    }

    render() {

        const postItems = this.props.posts.map(post=> (

            <div className="post" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>

        ))

        return (
            <div>
                <h2>Posts</h2>
                {postItems}
            </div>
        )
    }
}

function mapStateToProps(state){

    return(

       {

            posts: state.posts.items,
            newPost: state.posts.item

       }

    )

}

export default connect(mapStateToProps, {fetchPosts})(Posts)