import React, {useState, useEffect} from 'react'
import './style.css'
import Card from '../UI/Card'
import blogPost from '../../data/blog.json'
import { NavLink } from 'react-router-dom'
/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

  const[post, setPost] = useState([])
    useEffect(()=>{
      // const postId = props.match.params.postId;
      const post = blogPost.data
      setPost(post);
    }, post);

  return(
    <div className="sidebarContainer">
        <Card style={{marginBottom:"20px",padding:'20px', boxSizing:'border-box'}}>
          <div className="cardHeader">
              <span>About Us</span>
          </div>
          <div className="profileImageContainer">
            <img src={require('../../blogPostImanges/maxresdefault.jpg')} />
          </div>
          <div className="cardBody">
            <p className="personalBio">My name is Dao, I am a developer speciallzation in Front end developement</p>
          </div>
        </Card>

        <Card style={{marginBottom:"20px",padding:'20px', boxSizing:'border-box'}}>
          <div className="cardHeader">
              <span>Social Network</span>
          </div>
        </Card>

        <Card style={{marginBottom:"20px",padding:'20px', boxSizing:'border-box'}}>
          <div className="cardHeader">
              <span>Recent Posts</span>
          </div>

          <div className="recentPosts">
              {
                post.map(post =>{
                  return (
                    <NavLink to={`/post/${post.id}`}>
                        <div className="recentPost">
                          <div className="recentPost">
                              <h3>{post.blogTitle}</h3>
                              <span>{post.postedOn}</span>
                          </div> 
                        </div>
                    </NavLink>
                  );
                })
              }
          </div>
        </Card>
    </div>
   )
 }

export default Sidebar