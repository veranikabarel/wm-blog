import React from 'react';
import './style.scss';
import Card from '../../components/card';
import BlogPost from '../../components/blogPost';
import Sidebar from '../../components/sidebar';

const Post = () => {
    return (
        <div>
            <Card>
                <BlogPost/>
                <Sidebar/>
            </Card>
        </div>
    );
}

export default Post;
