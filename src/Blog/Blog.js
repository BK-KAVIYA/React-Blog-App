import './Blog.css';

const Blog = ({blogs,title,handleDelete}) => {
    
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h3>{ blog.title }</h3>
                        <p>Written by { blog.author }</p>
                    </div>
                ))}
        </div>
     );
}
 
export default Blog;