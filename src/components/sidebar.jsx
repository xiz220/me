import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{ backgroundImage: 'url(images/about.png)' }} />
              <h1 id="colorlib-logo"><a href="index.html">Lihao Zhu</a></h1>
              <span className="email"><i className="icon-mail"></i> lihaozhu2020@gmail.com</span>
              <br />
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#about" data-nav-section="about">About Me</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  {/* <li><a href="#carousels" data-nav-section="carousels">carousels</a></li> */}
                  {/* <li><a href="#" data-nav-section="blog">Blog</a></li> */}
                  {/* <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li> */}
                  <img src={'images/to_be_continued.png'} alt='to be continued' style={{'max-height': "25%", 'max-width': "25%"}} />
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/lihao-zhu-lehigh2020/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/liz2020" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            {/* <div className="colorlib-footer">
              <img src={'images/to_be_continued.png'} alt='to be continued' style={{'max-height': "35%", 'max-width': "35%"}} />
            </div> */}
          </aside>
        </div>
      </div>
    )
  }
}
