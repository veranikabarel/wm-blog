import React from 'react';
import './style.scss';
import BlogPostTemplate from '../../components/blogPostTemplate';
import BlogPost from '../../components/blogPost';
import Sidebar from '../../components/sidebar';

const Post = () => {
    return (
        <div>
            <BlogPostTemplate>
                <BlogPost/>
                <Sidebar/>
            </BlogPostTemplate>
        </div>
    );
}

export default Post;
