import './NavBar.css';

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Blog App</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{ 
                    color: 'white', 
                    backgroundColor: '#f1356d',
                    borderRadius: '8px' 
                    }}
                    onMouseOver={(e) => { e.target.style.backgroundColor = '#d6304d'; }}  
                    onMouseOut={(e) => { e.target.style.backgroundColor = '#f1356d'; }} 
                    >New Blog</a>
            </div>
        </nav>
     );
}
 
export default NavBar;