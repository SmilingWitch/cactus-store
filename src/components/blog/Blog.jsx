import BlogCard from "../blogCard/BlogCard";
import "./Blog.css"


function Blog() {
    return (
       <div className="blogBx">
        <div className="blogHeader">
            <span>BLOG</span>
            <div className="imgBlog">
                <img src="pngegg(1).png" alt="" />
            </div>
        </div>
        <div className="blogContent">
            <BlogCard imgURL = "pexels-valeriia-miller-2516658.jpg" date = "31 agosto 2023" title = "How to manage a home garden"/>
            <BlogCard imgURL = "pexels-skylar-kang-6431929.jpg" date = "31 agosto 2023" title = "How to manage a home garden"/>
            <BlogCard imgURL = "pexels-lisa-fotios-1314133.jpg" date = "31 agosto 2023" title = "How to manage a home garden"/>

        </div>
        <div className="contactInfo">
            <div className="bsInfo">
                <span>Plant Desert.</span>
                <p>Plant Desrt gives you best plant to engage more to all customer. Collaborate with friends and family</p>
            </div>
            <div className="contact">
                <span> Contact</span>
                <p>34366 Wuuuu</p>
            </div>
            
        </div>
            
       </div>
    );
}

export default Blog ;