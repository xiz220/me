import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Me</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>I am a third-year CSE student and will graduate in May 2020 from Lehigh University.
                                                I work on Computer Vision and Deep Learning related research in the WiNS Laboratory under the supervision of Dr. Mooi Choo Chuah in summer.
                                                Besides, I have been the graders for many CSE courses and enjoy sharing ideas with others.
                                            </p>
                                            <p>For personal interests, JoJo's Bizarre Adventure and Fullmetal Alchemist are my favorite manga. 
                                                I like how reasonable the story flows and admire the persistence and courage of the main characters. 
                                                I also develop video games with Unity and use Blender to build 3D models.
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
