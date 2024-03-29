import Blog from '../Blog/Blog';
import './Home.css';
import {useState,useEffect} from 'react';

const Home = () => {

    const [blogs,setBlog] = useState(null);

    const handleDelete = (id) => {
        console.log(id);
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlog(newBlogs);
    }

    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res=>{
            return res.json();
        })
        .then((data)=>{
            setBlog(data);
        })
    },[]);


    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>Welcome to the Blog App</p>
                { blogs && <Blog blogs={blogs} title="All the Blogs.." handleDelete={handleDelete}/>}
                {/* <Blog blogs={blogs.filter((blogs)=>blogs.author==='mario')} title="Mario's Blogs.."/>             */}
        </div>
     );
}
 
export default Home;