import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <>
        <div>
            <div className="text-center">
              <h1>Cjache Kang</h1>
              </div>
            <div>
              <h5 className="text-center">
                  <a href="https://linkedin.com/in/cjache21" target="_blank" rel="noopener noreferrer">Linkedin</a>
              </h5>
              <p className="text-center">
                <small>
                More stuff coming soon !!
                </small>
              </p>
        </div>
      </div>
      <aside className="border js-fullheight"></aside>
      </>
    )
  }
}

export default Header;