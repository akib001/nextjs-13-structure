import React from 'react';
import {log} from "util";

const fetchBlogs = async () => {
    let blogs;

    await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            blogs = json
        }).catch(error => console.log(error))

    return blogs
}

const Blog = async () => {

    const {userId, title, completed}: any = await fetchBlogs();

    return (
        <div style={{padding: '40px', display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'center', justifyContent: 'center'}}>
            <h2>Id: {userId}</h2>
            <h4>Title: {title}</h4>
            <h4>Completed: {completed}</h4>
        </div>
    );
};

export default Blog;