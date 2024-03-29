import Blog from '../Blog/Blog';
import useFetch from '../CustomHook/useFetch';
import './Home.css';


const Home = () => {
    const{data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs');

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