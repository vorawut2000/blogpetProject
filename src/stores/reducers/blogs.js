import { CREATE_BLOG, RETRIVE_BLOG, UPDATE_BLOG, DELETE_BLOG } from "../actions/actionTypes";

const initialState = [];

const blogReducer = ( blogs = initialState, action ) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_BLOG:
            return [...blogs, payload];
        
        case RETRIVE_BLOG:
            return payload;

        case UPDATE_BLOG:
            return blogs.map((blog) => {
                if (blog.id === payload.id) {
                    return {
                        ...blog,
                        ...payload,
                    };
                } else {
                    return blog;
                }
            });
        
        case DELETE_BLOG:
            return blogs.filter(({ id }) => id !== payload.id )
            
        default:
            return blogs;
    }
};

export default blogReducer;