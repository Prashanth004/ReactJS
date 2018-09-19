import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';
import PropType from  'prop-types';

class Posts extends Component {
  componentWillMount (){
    this.props.fetchPosts(); 
  }
  componentWillReceiveProps (nextProps){
    if(nextProps.newPost){
      this.props.posts.unshift(nextProps.newPost);
    }
    else{
      console.log("i am not working!!!!!!!!!!!!!!!!!!")
    }
  }
   
  render() {
    const postItem = this.props.posts.map(post =>(
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
    ));
    
    return (
      <div>
       <h1> Posts  </h1> 
       {postItem}
      </div>
    )
  }
  
}
Posts.PropType={
  fetchPosts:PropType.func.isRequired,
  posts:PropType.array.isRequired,
  newPost:PropType.object
}; 
const mapStateToProps = state =>({
  posts:state.posts.items,
  newPost:state.posts.item
})

export default connect(mapStateToProps,{fetchPosts})(Posts)
