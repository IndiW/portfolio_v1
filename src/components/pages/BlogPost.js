import React from 'react';

function BlogPost(props) {
    return (
        <>
            <div className='blog--posts'>
                <p>{props.content}</p>
            </div>
            <p>____________</p>
        </>
    );
}

export default BlogPost;