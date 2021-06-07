import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveBlog } from '../../stores/actions/blog';
import { Link } from "react-router-dom";

const Blog = () => {

    const blogs = useSelector(state => state.blogs);
    const dispatch = useDispatch();

    useEffect(() => {dispatch(retrieveBlog())});

    return (
        <div className="row">
            <h1 className="text-white">Blog</h1>
            {blogs && blogs.map((blog) => (
            <div className="col-sm-16" key={blog.id}>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">{blog.title}</h3>
                        <p className="card-text">{blog.content}</p>
                        <Link to={"/blogs/" + blog.id} className="btn btn-primary ">Edit</Link>      
                    </div>
                </div>
                <br/>
            </div>
            ))}
        </div>
    )
}

export default Blog;