import "./Header.css"

const Header = () => {
  return (
      <div className="header-container ">
          <div className="head-top ">
              <h5>Free Shipping Over RS.1000</h5>
              <h5>Help Line:+91 9876543210</h5>
          </div>
          <div className="header-searchbar d-flex justify-content-between align-items-center p-2">
              <div>
                  <h3>Easy Buy</h3>
              </div>
              <div>
                  <nav className="navbar" >
                      <div className="container-fluid">
                          <form className="d-flex" role="search">
                              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "400px" }} />
                                  <button className="btn btn-outline-success" type="submit">Search</button>
                          </form>
                      </div>
                  </nav>
              </div>
              <div className="d-flex">
                  <i className="bi bi-heart"></i>
                  <h4>Favourite wishlist</h4>
              </div>
              <div className="d-flex " >
                  <i className="bi bi-person"></i>
                  <button className="btn btn-secondary">Login</button>
              </div>
              <div className="d-flex">
                  <i className="bi bi-cart4"></i>
                  <h4>Cart</h4>
              </div>
          </div>
          <div className="header-navbar d-flex align-items-center">
              <div className="dropdown-center" style={{width:"40%"}}>
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor:"#162232",width:"300px"}}>
                     Shop By Categery
                  </button>
                  <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">All</a></li>
                      <li><a className="dropdown-item" href="#">Ear Buds</a></li>
                      <li><a className="dropdown-item" href="#">headPhone</a></li>
                      <li><a className="dropdown-item" href="#">Speakers</a></li>
                      <li><a className="dropdown-item" href="#">Mobile</a></li>
                      <li><a className="dropdown-item" href="#">Laptop</a></li>
                  </ul>
              </div>
              <div className="nav-heed  " style={{ width: "60%"}}>
                  <ul className="d-flex justify-content-evenly">
                      <li><a href="">HOME</a></li>
                      <li><a href="">STORE</a></li>
                      <li><a href="">MY ORDERS</a></li>
                      <li><a href="">CONTACT</a></li>
                  </ul>
                
              </div>
          </div>
      
    </div>
  )
}

export default Header
