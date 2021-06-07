import { CREATE_BLOG, RETRIVE_BLOG, UPDATE_BLOG, DELETE_BLOG } from "../actions/actionTypes";

import BlogService from '../../configs/BlogService';

export const createBlog = (title, content) => async (dispatch) => {
    try {
        const res = await BlogService.create({ title, content });

        dispatch({
            type: CREATE_BLOG,
            payload: res.data,
        })

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const retrieveBlog = () => async (dispatch) => {
    try {   
        const res = await BlogService.getAll();

        dispatch({type: RETRIVE_BLOG, payload: res.data})

    } catch (err) {
        console.log(err);
    }
}

export const updateBlog = ( id, data ) => async ( dispatch ) => {
    try {
        const res = await BlogService.update( id, data )

        dispatch({type: UPDATE_BLOG, payload: data});
        Promise.resolve(res.data);
    } catch (err) {
        Promise.reject(err);
    }
}

export const deleteBlog = ( id ) => async ( dispatch ) => {
    try {
        const res = await BlogService.remove(id);
        dispatch({type: DELETE_BLOG, payload: res.data})
    } catch (err){
        console.log(err);
    }
}
