import '../assets/css/TopNav.css';

function TopNav() {
    return (
        <div className="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#about">About</a>
            <input type="text" placeholder="Search"></input>
        </div>
    );
}

export default TopNav;