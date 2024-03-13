import { useEffect } from "react";
import { useState } from "react";
import SingleBlog from "../Single-Blog/SingleBlog";


const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
        
    },[])
    return (
        <div className="w-2/3">
            <h1>Blogs : {blogs.length}</h1>
            {
                blogs.map(blog => <SingleBlog 
                    key={blog.id}
                    blog={blog}
                ></SingleBlog>)
            }
        </div>
    );
};

export default Blog;