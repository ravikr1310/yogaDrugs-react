import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Header extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg fixed-top">
                <div class="container">

                    <a class="navbar-brand" href="index.html">Yoga Drugs</a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-lg-auto">
                            <li class="nav-item">
                                <a href="#home" class="nav-link smoothScroll">Home</a>
                            </li>

                            <li class="nav-item">
                                <a href="#about" class="nav-link smoothScroll">About Us</a>
                            </li>

                            <li class="nav-item">
                                <a href="#class" class="nav-link smoothScroll">Classes</a>
                            </li>

                            <li class="nav-item">
                                <a href="#schedule" class="nav-link smoothScroll">Schedules</a>
                            </li>

                            <li class="nav-item">
                                <a href="#experience" class="nav-link smoothScroll">Experience</a>
                            </li>

                            <li class="nav-item">
                                <a href="#gallery" class="nav-link smoothScroll">Gallery</a>
                            </li>

                            <li class="nav-item">
                                <a href="#contact" class="nav-link smoothScroll">Contact</a>
                            </li>
                        </ul>

                        <ul class="social-icon ml-lg-3">
                            <li><a href="https://fb.com/tooplate" class="fa fa-facebook"><FontAwesomeIcon icon={['fal', 'home']} fixedWidth /></a></li>
                            <li><a href="#" class="fa fa-twitter"></a></li>
                            <li><a href="#" class="fa fa-instagram"></a></li>
                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}

export default Header;