import React from 'react'
import './style.css'
import Card from '../UI/Card'
/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
  return(
    <div className="blogPostContainer">
        <Card>
            <div className="blogHeader">
            <span className="blogCategory">Featured</span>
            <h1 className="postTitle">Beautiful is aways beautuful</h1>
            <span className="postBy">posted on July 21, 2020 by Sora Blogging Tips</span>
            </div>
        </Card>
    </div>
   )
 }

export default BlogPost