import React from 'react'

export default function Footer() {
    return (
        <div>
        <footer className='bg-dark'>
            <div className="footer-items">
                <div className="f-items">Contact Us
                    <ul>
                        <li><i className="fa-solid fa-user"></i> Aashir</li>
                        <li><i className="fa-solid fa-phone"></i> +91 7358728447</li>
                        <li><i className="fa-solid fa-envelope"></i> tmohamedaashir@gmail.com</li>
                    </ul>
                </div>
                <div className="f-items">Download App
                    <ul>
                        <li><a href="https://play.google.com/store/games?hl=en&gl=US" target='_blank'><i className="fa-brands fa-google-play"></i> Google Play</a></li>
                        <li><a href="https://www.apple.com/in/app-store/" target='_blank'><i className="fa-brands fa-app-store-ios"></i> App Store</a></li>
                    </ul>
                </div>
                <div className="f-items">Tech Stack
                    <ul>
                        <li><a href="https://legacy.reactjs.org/docs/getting-started.html" target="_blank">React</a></li>
                        <li><a href="https://getbootstrap.com/" target="_blank">Bootstrap</a></li>
                        <li><a href="https://newsapi.org/" target="_blank">NewscatcherAPI</a></li>
                    </ul>
                </div>
            </div>
            <div className="follow">
                <a href="https://www.instagram.com/mohamed_aashir_/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/aashxx/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/aashxx/" target="_blank"><i className="fa-brands fa-github"></i></a>
            </div>
        </footer>
        </div>
    )
}


