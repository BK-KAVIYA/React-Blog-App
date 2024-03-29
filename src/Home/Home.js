import Blog from '../Blog/Blog';
import './Home.css';
import {useState,useEffect} from 'react';

const Home = () => {

    const [blogs,setBlog] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);


    useEffect(()=>{
        fetch('http://localhost:8000/blogsS')
        .then(res=>{
            if(!res.ok){
                throw Error('Could not fetch the data for that resource');
            }else{
                return res.json();
            }
            
        })
        .then((data)=>{
            setBlog(data);
            setIsPending(false);
            setError(null);
        })
        .catch((err)=>{
            setIsPending(false);
            setError(err.message);
        })
    },[]);


    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>Welcome to the Blog App</p>
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                { blogs && <Blog blogs={blogs} title="All the Blogs.."/>}
                {/* <Blog blogs={blogs.filter((blogs)=>blogs.author==='mario')} title="Mario's Blogs.."/>             */}
        </div>
     );
}
 
export default Home;