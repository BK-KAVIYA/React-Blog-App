import Blog from '../Blog/Blog';
import './Home.css';
import {useState,useEffect} from 'react';

const Home = () => {

    const [blogs,setBlog] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3},
        {title: 'Web Technology', body: 'lorem ipsum...', author: 'vimudya', id: 4},
    ]);

    const handleDelete = (id) => {
        console.log(id);
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlog(newBlogs);
    }

    useEffect(()=>{
        
    });


    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>Welcome to the Blog App</p>
                <Blog blogs={blogs} title="All the Blogs.." handleDelete={handleDelete}/>
                {/* <Blog blogs={blogs.filter((blogs)=>blogs.author==='mario')} title="Mario's Blogs.."/>             */}
        </div>
     );
}
 
export default Home;