import React from "react";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import Image from "next/image";

function Footer() {
    return (
        <footer>
            <div className='info'>
                <div>
                    <h2>Explore</h2>
                    <ul>
                        <li>Documentation</li>
                        <li>Blog</li>
                        <li>Showcase</li>
                        <li>Roadmap</li>
                        <li>Languages</li>
                    </ul>
                </div>
                <div>
                    <h2>Company</h2>
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Support</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div>
                    <h2>Products</h2>
                    <ul>
                        <li>Templates</li>
                        <li>Blog</li>
                        <li>Showcase</li>
                        <li>Vision</li>
                    </ul>
                </div>
                <div>
                    <h2>Service</h2>
                    <ul>
                        <li>Event</li>
                        <li>Business</li>
                        <li>Agency</li>
                        <li>Start-up</li>
                    </ul>
                </div>
                <div>
                    <h2>Contact Info</h2>
                    <ul>
                        <li>
                            <MapOutlinedIcon /> 44 Main Street, New York, NY 25442
                        </li>
                        <li>
                            <LocalPhoneOutlinedIcon /> +2-777-555-124/-2-596-888-542
                        </li>
                        <li>
                            <DraftsOutlinedIcon /> e-commerce@example.com
                        </li>
                        <li>
                            <EventNoteOutlinedIcon /> 9am-6pm Monday/Saturday
                        </li>
                    </ul>
                </div>
            </div>
            <div className='social'>
                <p>Copyright@Aziz Chebbi</p>
                <div className='icons'>
                    <a href='https://www.facebook.com/profile.php?id=100005962092615'>
                        <Image
                            src='/images/icons/facebook.png'
                            width={30}
                            height={30}
                            alt='facebook'
                        />
                    </a>
                    <a href='https://github.com/azizChebbi'>
                        <Image src='/images/icons/github.png' width={30} height={30} alt='github' />
                    </a>
                    <a href='https://www.linkedin.com/in/mohamed-aziz-chebbi-0387381b8/'>
                        <Image
                            src='/images/icons/linkedin.png'
                            width={30}
                            height={30}
                            alt='linkedin'
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
