import React from 'react';


const BlogContentleft = (props) => {
    return (
        <div className="paperclsleft">
            <h3 className="basictext" style={{ textAlign: "centre", width: "inherit" }}>{props.Heading}</h3>
            <p className="text-center"> {props.body} </p>

        </div>

    );
}
export default BlogContentleft