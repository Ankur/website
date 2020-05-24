import React from 'react'

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <div>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo">Cjache Kang</h1>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  <a href="https://linkedin.com/in/cjache21" target="_blank" rel="noopener noreferrer">Linkedin</a>
              </small></p>
              <p><small>
                More stuff coming soon !!
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}

export default Sidebar;