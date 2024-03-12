import { useEffect } from "react";
import { useState } from "react";


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
        </div>
    );
};

export default Blog;