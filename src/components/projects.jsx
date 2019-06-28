import React, { Component } from 'react'

export default class Projects extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{ backgroundImage: 'url(images/LehighMap.png)' }}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/liz2020/LehighMap" target="_blank" rel="noopener noreferrer">LehighMap</a></h3>
											<span>Android + Node.js</span>
											<span>Android App together with a Nodejs Server so that user can take a picture of buildings at Lehigh University and the CNN model will tell its name. It utilize tflite and a model trained from my own dataset.</span>
											<p className="icon">
												<span><a href="https://docs.google.com/document/d/1oVOr9hQvrv_vdq-Syg-xkYvHOELBWBJH-bYpQOVZoww/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="icon-book" /></a></span>
												<span><a href="https://github.com/liz2020/LehighMap" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{ backgroundImage: 'url(https://media.geeksforgeeks.org/wp-content/cdn-uploads/machineLearning3.png)' }}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/liz2020/ML-starter-kit" target="_blank" rel="noopener noreferrer">Machine Learning starter-kit</a></h3>
											<span>Python + Keras</span>
											<span>With detailed instruction about enviroment setup and how to use the kit, anyone can use this repo to train image classification models.  </span>
											<p className="icon">
											<span><a href="https://github.com/liz2020/ML-starter-kit" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{ backgroundImage: 'url(images/ER_diagram.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/liz2020/cse241_final" target="_blank" rel="noopener noreferrer">Oracle sql database design</a></h3>
											<span>Java</span>
											<span>I took the database class when I was a sophomore. This backup of my final project simulates the sales of a company, keeping track of the user, employee, store, items, and order information.</span>
											<p className="icon">
											<span><a href="https://github.com/liz2020/cse241_final" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
