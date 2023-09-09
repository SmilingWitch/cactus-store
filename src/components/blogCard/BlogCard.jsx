import "./BlogCard.css"


function BlogCard( {imgURL, text, date, title}) {
    return (
        <div className="blogCard">
            <div className="imgCardBlog">
                <img src={imgURL} alt="" />
            </div>
            <div className="date">
                {date}
            </div>
            <div className="title">
                {title}
            </div>
            <div className="text">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt alias nesciunt rerum laborum, placeat fuga velit, a eius laudantium sapiente ad harum quae, eveniet optio odio iusto sequi delectus nam.</p>
            </div>
            <div className="btnRead">
                Read More
            </div>
        </div>
    );
}

export default BlogCard ;