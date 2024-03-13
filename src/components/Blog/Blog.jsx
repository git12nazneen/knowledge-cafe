import { useEffect } from "react";
import { useState } from "react";
import SingleBlog from "../Single-Blog/SingleBlog";
import PropTypes from 'prop-types'

const Blog = ({handleAddToBookMark}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
        
    },[])
    return (
        <div className="w-2/3">
            <h1 className="text-3xl font-bold my-5">Blogs : {blogs.length}</h1>
            {
                blogs.map(blog => <SingleBlog 
                    key={blog.id}
                    blog={blog}
                    handleAddToBookMark={handleAddToBookMark}
                ></SingleBlog>)
            }
        </div>
    );
};

Blog.propTypes ={
    handleAddToBookMark: PropTypes.func
}

export default Blog;