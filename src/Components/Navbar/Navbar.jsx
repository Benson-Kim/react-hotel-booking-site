import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-container">
        <span className="logo">lamabooking</span>
        <div className="nav-items">
          <button className="navbtn">Register</button>
          <button className="navbtn">Login</button>
        </div>
      </div>
    </div>
  )
}
