import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateBlog, deleteBlog } from '../../stores/actions/blog';
import BlogService from '../../configs/BlogService';

const BlogDetail = (props) => {
    const initialBlogState = {
        id: null,
        title: "",
        content: "",
    }

    const [currentBlog, setCurrentBlog] = useState(initialBlogState);
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();

    const getBlog = id => {
        BlogService.get(id)
        .then(response => {
            setCurrentBlog(response.data);
            console.log(response.data)
        })
        .catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {getBlog(props.match.params.id)}, [props.match.params.id])

    const inputChangeHandler = (event) => {
        const { name, value } = event.target;
        setCurrentBlog({ ...currentBlog, [name]: value });
    }

    const updateContent = () => {
        dispatch(updateBlog(currentBlog.id, currentBlog))
        .then(response => {
            console.log(response);

            setMessage("Blog updated successfully :)")
            // props.history.push("/blogs")
        })
        .catch(e => {
            console.log(e);
        });
    };

    const removeBlog = () => {
        dispatch(deleteBlog(currentBlog.id))
        .then(() => {
            
            props.history.push("/blogs")
        })
        .catch(e => {
            console.log(e);
        })
    }   

    return (
        <div>
            {currentBlog ? (
                <div className="edit-form">
                    <h3 className="text-light">Edit Blog</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="title" className="form-label text-white">Title</label>
                            <input type="text" className="form-control" id="title" name="title" value={currentBlog.title} onChange={inputChangeHandler}/>
                        </div>
                        <div className="form-group" >
                            <label htmlFor="content" className="form-label text-white">Content</label>
                            <textarea type="text" className="form-control" id="content" name="content" value={currentBlog.content} onChange={inputChangeHandler}/>
                        </div>
                    </form>
                    <div class="btn-toolbar justify-content-md-end mt-2" role="toolbar">
                        <button className="btn btn-success me-2" onClick={updateContent}>Edit</button>
                        <button className="btn btn-danger" onClick={removeBlog}>Delete</button>
                    </div>
                    <p className="text-white">{message}</p>
                </div>
                
            ) : (
                <div>
                    <br />
                    <p>Please click on a Blog...</p>
                </div>
            )}
        </div>
    )
}

export default BlogDetail;