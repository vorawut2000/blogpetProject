import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBlog } from '../../stores/actions/blog'

const AddBlog = (props) => {
    const initialBlogState = {
        id: null,
        title: "",
        content: "",
    };

    const [ blog, setBlog ] = useState(initialBlogState);
    const [ submitted, setSubmitted ] = useState(false);

    const dispatch = useDispatch();

    const inputChangeHandler = (event) => {
        const { name, value } = event.target;
        setBlog({ ...blog, [name]: value });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const { title, content } = blog;

        dispatch(createBlog(title, content))
            .then(data =>{
                setBlog({
                    id: data.id,
                    title: data.title,
                    content: data.content,
                })
                setSubmitted(true);
                // props.history.push("/blogs")
                console.log(data);
            })
            .catch(e => {
                console.log(e);
            })
    }

    const newBlog = () => {
        setBlog(initialBlogState);
        setSubmitted(false)
    }

    const blogPage = () => {
        props.history.push("/blogs")
    }

    return (
        
        <div className="submit-form"> 
            {submitted ? (
            <div>
                <h3 className="text-white">Add Blog successfully!</h3>
                <div className="btn-toolbar justify-content-md-start mt-2" role="toolbar">
                    <button className="btn btn-primary me-2" onClick={blogPage}>
                        Go to Blog 
                    </button>
                    <button className="btn btn-success" onClick={newBlog}>
                        Add new
                    </button>
                </div>
            </div>
            ) : (
            <div>
                <div className="form-group">
                    <h4 html="title" className="form-label text-white">Title</h4>
                    <input type="text" className="form-control" id="title" required name="title" value={blog.title} onChange={inputChangeHandler}/>
                    
                </div>
                <div className="form-group">
                    <h4 html="title" className="form-label text-white">Content</h4>
                    <textarea type="text" className="form-control" row="3" id="content" required name="content" value={blog.content} onChange={inputChangeHandler}/>
                </div>
                <br />
                <button className="btn btn-success" onClick={submitHandler}>Submit</button>
            </div> )}
        </div>
        
    )
}

export default AddBlog;