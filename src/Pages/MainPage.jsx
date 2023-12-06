import { useState, useEffect } from "react";
import axios from 'axios';
import "../styles/Mainpage.css";

export default function Mainpage() {
    // const { user } = UserAuth();
    // const [email, setEmail] = useState(undefined);

    // useEffect(async () => {
    //     const jwt = user.accessToken;
    //     const config = {
    //         headers: {
    //             Authorization: "Bearer " + jwt,
    //             "Content-Type": "application/json",
    //         },
    //     };
    //     const response = await axios.get('http://localhost:3001/getEmail', config);
    //     setEmail(response);
    // }, [user]);

    return (
        <div className="body">
            {/* Landing Page Banner */}
            <div className="flex-container">
                <div className="half-width1">
                    <div className="left-padding">
                        <img src="Vector.png" alt="vector" className="vector-image" />
                        <h1 className="semi-bold"> Welcome to</h1>
                        <img src="/Union.png" alt="logo" className="logo1" />
                        <h1 className="first">WE DON'T JUST COVER. WE PROTECT.</h1>
                        <h1 className="second">At Brallium, we aim to create sustainable, reusable, and multi-functional nipple covers wearable by anyone and everyone.</h1>
                        <h1 className="second">Our nipple covers are made out of biodegradable and bacteria resistant material, protecting not just your skin, but the environment.</h1>
                    </div>
                    <div className="button">
                        <a href="/shop">
                            <button className="button-shop">
                                SHOP ALL
                            </button>
                        </a>
                        <a href="/about" >
                            <button className="button-about">
                                ABOUT US
                            </button>
                        </a>
                    </div>
                </div>
                <div className="half-width2">
                    <img src="landing.png" alt="landing" />
                </div>
            </div>
            <div className="container">
                <img src="/Vector (4).svg" alt="vector4" className="overlay-image" />
                <div className="divider overlay-divider">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="24" viewBox="0 0 1440 24" fill="none">
                        <path d="M-29.5 3C-4.4912 3 -4.4912 21 20.5176 21C45.5264 21 45.5264 3 70.5352 3C95.544 3 95.544 21 120.494 21C145.504 21 145.504 3 170.453 3C195.463 3 195.463 21 220.412 21C245.421 21 245.421 3 270.429 3C295.438 3 295.438 21 320.448 21C345.455 21 345.455 3 370.464 3C395.474 3 395.474 21 420.483 21C445.491 21 445.491 3 470.5 3C495.509 3 495.509 21 520.518 21C545.526 21 545.526 3 570.535 3C595.544 3 595.544 21 620.494 21C645.504 21 645.504 3 670.453 3C695.463 3 695.463 21 720.412 21C745.421 21 745.421 3 770.429 3C795.438 3 795.438 21 820.448 21C845.455 21 845.455 3 870.464 3C895.474 3 895.474 21 920.483 21C945.491 21 945.491 3 970.5 3C995.509 3 995.509 21 1020.52 21C1045.53 21 1045.53 3 1070.54 3C1095.54 3 1095.54 21 1120.49 21C1145.5 21 1145.5 3 1170.45 3C1195.46 3 1195.46 21 1220.41 21C1245.42 21 1245.42 3 1270.43 3C1295.44 3 1295.44 21 1320.45 21C1345.46 21 1345.45 3 1370.46 3C1395.47 3 1395.47 21 1420.48 21C1445.49 21 1445.49 3 1470.5 3" stroke="#81B0B2" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" />
                    </svg>
                    {/* <img src="divider.png" alt="divider" className="" /> */}
                </div>
            </div>
            {/*Sustainability Page */}
            <div className="sustainability">
                <div className="left-column">
                    <div className="column">
                        <img src="/Vector (10).svg" alt="vector10" className="icons" />
                        <h1 className="pledge">Biodegrade & Eco-Friendly</h1>
                    </div>
                    <div className="column">
                        <img src="/Frame 119.png" alt="vector12" className="icons" />
                        <h1 className="pledge">Reduce CO₂ Emissions</h1>
                    </div>
                    <div className="column">
                        <img src="/Vector (11).svg" alt="vector11" className="icons" />
                        <h1 className="pledge">Conserve Water</h1>
                    </div>
                </div>
                <div className="right-column">
                    <div>
                        <h1 className="pledge-main">
                            Brallium's pledge to sustainability.
                        </h1>
                        <h1 className="sub-pledge">
                            We’re dedicated to maintaining our planet’s health and natural resources by taking important steps.
                        </h1>
                    </div>
                    <button className="learn-more">
                        {/* <h1 className="learn-more-text">LEARN MORE</h1> */}
                        <img src="learnmore.png" alt="learnmore" className="" />
                    </button>
                </div>
            </div>
            <div className="divider">
                <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="24" viewBox="0 0 1440 24" fill="none">
                    <path d="M-29.5 3C-4.4912 3 -4.4912 21 20.5176 21C45.5264 21 45.5264 3 70.5352 3C95.544 3 95.544 21 120.494 21C145.504 21 145.504 3 170.453 3C195.463 3 195.463 21 220.412 21C245.421 21 245.421 3 270.429 3C295.438 3 295.438 21 320.448 21C345.455 21 345.455 3 370.464 3C395.474 3 395.474 21 420.483 21C445.491 21 445.491 3 470.5 3C495.509 3 495.509 21 520.518 21C545.526 21 545.526 3 570.535 3C595.544 3 595.544 21 620.494 21C645.504 21 645.504 3 670.453 3C695.463 3 695.463 21 720.412 21C745.421 21 745.421 3 770.429 3C795.438 3 795.438 21 820.448 21C845.455 21 845.455 3 870.464 3C895.474 3 895.474 21 920.483 21C945.491 21 945.491 3 970.5 3C995.509 3 995.509 21 1020.52 21C1045.53 21 1045.53 3 1070.54 3C1095.54 3 1095.54 21 1120.49 21C1145.5 21 1145.5 3 1170.45 3C1195.46 3 1195.46 21 1220.41 21C1245.42 21 1245.42 3 1270.43 3C1295.44 3 1295.44 21 1320.45 21C1345.46 21 1345.45 3 1370.46 3C1395.47 3 1395.47 21 1420.48 21C1445.49 21 1445.49 3 1470.5 3" stroke="#81B0B2" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" />
                </svg>
            </div>
            {/*Product Carousel */}
            <div className="product-wrapper">
                <div className="carousel">
                    <div className="title">
                        <h1 className="products">Our Products</h1>
                        <button className="details">
                            <img src="details.png" alt="details" className="" />
                        </button>
                    </div>
                    <div className="product-cards">
                        <div className="product-column">
                            <img src="product1.png" alt="product1" className="" />
                            <div className="skin-color">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                                    <circle cx="18" cy="17.5" r="12.5" fill="#EDD0AD" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                                    <circle cx="18" cy="17.5" r="12.5" fill="#D4B594" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                                    <circle cx="18" cy="17.5" r="12.5" fill="#B07F5B" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                                    <circle cx="18" cy="17.5" r="12.5" fill="#7D5645" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                                    <circle cx="18" cy="17.5" r="12.5" fill="#55321E" />
                                </svg>
                            </div>
                            <div className="text-section">
                                <div className="product-name">
                                    <h1 className="product-text">STANDARD NIPPLE COVER</h1>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                                            <path d="M7.31375 0L8.99761 5.18237H14.4467L10.0383 8.38525L11.7221 13.5676L7.31375 10.3647L2.90536 13.5676L4.58922 8.38525L0.180827 5.18237H5.6299L7.31375 0Z" fill="#FFBB56" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13" fill="none">
                                            <path d="M6.54175 11.996V9.21202H0.813751V8.38002L6.62175 0.796021H7.93375V7.96402H9.51775V9.21202H7.93375V11.996H6.54175ZM2.63775 7.96402H6.54175V2.76402L2.63775 7.96402Z" fill="#284855" />
                                            <path d="M12.112 12.204C11.8027 12.204 11.5413 12.0947 11.328 11.876C11.1147 11.6574 11.008 11.404 11.008 11.116C11.008 10.828 11.1147 10.572 11.328 10.348C11.5413 10.124 11.8027 10.012 12.112 10.012C12.4267 10.012 12.6907 10.124 12.904 10.348C13.1227 10.572 13.232 10.828 13.232 11.116C13.232 11.404 13.1227 11.6574 12.904 11.876C12.6907 12.0947 12.4267 12.204 12.112 12.204Z" fill="#284855" />
                                            <path d="M15.12 11.996C15.1307 10.7747 15.2453 9.61469 15.464 8.51602C15.6827 7.41202 16.032 6.33469 16.512 5.28402C16.9973 4.22802 17.6427 3.16402 18.448 2.09202H12.88V0.796021H20V2.06002C19.296 2.87069 18.72 3.72135 18.272 4.61202C17.824 5.49735 17.4747 6.38269 17.224 7.26802C16.9733 8.14802 16.7973 8.99335 16.696 9.80402C16.6 10.6094 16.5493 11.34 16.544 11.996H15.12Z" fill="#284855" />
                                        </svg>
                                    </div>
                                </div>
                                <h1 className="text1">The Original.</h1>
                                <h1 className="text2">Light, seamless, versatile.</h1>
                                <div className="price-container">
                                    <h1 className="price">$16.99</h1>
                                    <h1 className="package">PACK OF 5</h1>
                                    <button className="cart">ADD TO CART <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M5.28988 0.295797C5.19615 0.388761 5.12176 0.49936 5.07099 0.62122C5.02022 0.743079 4.99408 0.873785 4.99408 1.0058C4.99408 1.13781 5.02022 1.26851 5.07099 1.39037C5.12176 1.51223 5.19615 1.62283 5.28988 1.7158L8.58988 5.0058L0.999878 5.0058C0.734661 5.0058 0.480308 5.11115 0.292771 5.29869C0.105235 5.48623 -0.00012207 5.74058 -0.00012207 6.0058C-0.00012207 6.27101 0.105235 6.52537 0.292771 6.7129C0.480308 6.90044 0.734661 7.0058 0.999878 7.0058L8.58988 7.0058L5.28988 10.2958C5.10157 10.4841 4.99579 10.7395 4.99579 11.0058C4.99579 11.2721 5.10157 11.5275 5.28988 11.7158C5.47818 11.9041 5.73358 12.0099 5.99988 12.0099C6.26618 12.0099 6.52157 11.9041 6.70988 11.7158L11.7099 6.7158C11.8009 6.62069 11.8723 6.50855 11.9199 6.3858C11.9728 6.2661 12.0001 6.13667 12.0001 6.0058C12.0001 5.87493 11.9728 5.7455 11.9199 5.6258C11.8723 5.50304 11.8009 5.3909 11.7099 5.2958L6.70988 0.295797C6.61691 0.202069 6.50631 0.127673 6.38445 0.0769043C6.2626 0.0261354 6.13189 -1.90735e-06 5.99988 -1.90735e-06C5.86787 -1.90735e-06 5.73716 0.0261354 5.6153 0.0769043C5.49344 0.127673 5.38284 0.202069 5.28988 0.295797Z" fill="#FFFEFC" />
                                    </svg></button>
                                </div>
                            </div>
                        </div>
                        <div className="product-column">
                            <img src="product1.png" alt="product1" className="" />
                            <div className="skin-color">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                                    <circle cx="18" cy="17.5" r="12.5" fill="#EDD0AD" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                                    <circle cx="18" cy="17.5" r="12.5" fill="#D4B594" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                                    <circle cx="18" cy="17.5" r="12.5" fill="#B07F5B" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                                    <circle cx="18" cy="17.5" r="12.5" fill="#7D5645" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                                    <circle cx="18" cy="17.5" r="12.5" fill="#55321E" />
                                </svg>
                            </div>
                            <div className="text-section">
                                <div className="product-name">
                                    <h1 className="product-text">THICKENED NIPPLE COVER</h1>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                                            <path d="M7.31375 0L8.99761 5.18237H14.4467L10.0383 8.38525L11.7221 13.5676L7.31375 10.3647L2.90536 13.5676L4.58922 8.38525L0.180827 5.18237H5.6299L7.31375 0Z" fill="#FFBB56" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13" fill="none">
                                            <path d="M6.54175 11.996V9.21202H0.813751V8.38002L6.62175 0.796021H7.93375V7.96402H9.51775V9.21202H7.93375V11.996H6.54175ZM2.63775 7.96402H6.54175V2.76402L2.63775 7.96402Z" fill="#284855" />
                                            <path d="M12.112 12.204C11.8027 12.204 11.5413 12.0947 11.328 11.876C11.1147 11.6574 11.008 11.404 11.008 11.116C11.008 10.828 11.1147 10.572 11.328 10.348C11.5413 10.124 11.8027 10.012 12.112 10.012C12.4267 10.012 12.6907 10.124 12.904 10.348C13.1227 10.572 13.232 10.828 13.232 11.116C13.232 11.404 13.1227 11.6574 12.904 11.876C12.6907 12.0947 12.4267 12.204 12.112 12.204Z" fill="#284855" />
                                            <path d="M15.12 11.996C15.1307 10.7747 15.2453 9.61469 15.464 8.51602C15.6827 7.41202 16.032 6.33469 16.512 5.28402C16.9973 4.22802 17.6427 3.16402 18.448 2.09202H12.88V0.796021H20V2.06002C19.296 2.87069 18.72 3.72135 18.272 4.61202C17.824 5.49735 17.4747 6.38269 17.224 7.26802C16.9733 8.14802 16.7973 8.99335 16.696 9.80402C16.6 10.6094 16.5493 11.34 16.544 11.996H15.12Z" fill="#284855" />
                                        </svg>
                                    </div>
                                </div>
                                <h1 className="text1">Same quality, more protection.</h1>
                                <h1 className="text2">enhanced silhouette, high coverage.</h1>
                                <div className="price-container">
                                    <h1 className="price">$16.99</h1>
                                    <h1 className="package">PACK OF 5</h1>
                                    <button className="cart">ADD TO CART <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M5.28988 0.295797C5.19615 0.388761 5.12176 0.49936 5.07099 0.62122C5.02022 0.743079 4.99408 0.873785 4.99408 1.0058C4.99408 1.13781 5.02022 1.26851 5.07099 1.39037C5.12176 1.51223 5.19615 1.62283 5.28988 1.7158L8.58988 5.0058L0.999878 5.0058C0.734661 5.0058 0.480308 5.11115 0.292771 5.29869C0.105235 5.48623 -0.00012207 5.74058 -0.00012207 6.0058C-0.00012207 6.27101 0.105235 6.52537 0.292771 6.7129C0.480308 6.90044 0.734661 7.0058 0.999878 7.0058L8.58988 7.0058L5.28988 10.2958C5.10157 10.4841 4.99579 10.7395 4.99579 11.0058C4.99579 11.2721 5.10157 11.5275 5.28988 11.7158C5.47818 11.9041 5.73358 12.0099 5.99988 12.0099C6.26618 12.0099 6.52157 11.9041 6.70988 11.7158L11.7099 6.7158C11.8009 6.62069 11.8723 6.50855 11.9199 6.3858C11.9728 6.2661 12.0001 6.13667 12.0001 6.0058C12.0001 5.87493 11.9728 5.7455 11.9199 5.6258C11.8723 5.50304 11.8009 5.3909 11.7099 5.2958L6.70988 0.295797C6.61691 0.202069 6.50631 0.127673 6.38445 0.0769043C6.2626 0.0261354 6.13189 -1.90735e-06 5.99988 -1.90735e-06C5.86787 -1.90735e-06 5.73716 0.0261354 5.6153 0.0769043C5.49344 0.127673 5.38284 0.202069 5.28988 0.295797Z" fill="#FFFEFC" />
                                    </svg></button>
                                </div>
                            </div>
                        </div>
                        <div className="product-column">
                            <img src="product1.png" alt="product1" className="" />
                            <div className="skin-color">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                                    <circle cx="18" cy="17.5" r="12.5" fill="#EDD0AD" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                                    <circle cx="18" cy="17.5" r="12.5" fill="#D4B594" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                                    <circle cx="18" cy="17.5" r="12.5" fill="#B07F5B" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                                    <circle cx="18" cy="17.5" r="12.5" fill="#7D5645" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                                    <circle cx="18" cy="17.5" r="12.5" fill="#55321E" />
                                </svg>
                            </div>
                            <div className="text-section">
                                <div className="product-name">
                                    <h1 className="product-text">FRAGRANT NIPPLE COVER</h1>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                                            <path d="M7.31375 0L8.99761 5.18237H14.4467L10.0383 8.38525L11.7221 13.5676L7.31375 10.3647L2.90536 13.5676L4.58922 8.38525L0.180827 5.18237H5.6299L7.31375 0Z" fill="#FFBB56" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13" fill="none">
                                            <path d="M6.54175 11.996V9.21202H0.813751V8.38002L6.62175 0.796021H7.93375V7.96402H9.51775V9.21202H7.93375V11.996H6.54175ZM2.63775 7.96402H6.54175V2.76402L2.63775 7.96402Z" fill="#284855" />
                                            <path d="M12.112 12.204C11.8027 12.204 11.5413 12.0947 11.328 11.876C11.1147 11.6574 11.008 11.404 11.008 11.116C11.008 10.828 11.1147 10.572 11.328 10.348C11.5413 10.124 11.8027 10.012 12.112 10.012C12.4267 10.012 12.6907 10.124 12.904 10.348C13.1227 10.572 13.232 10.828 13.232 11.116C13.232 11.404 13.1227 11.6574 12.904 11.876C12.6907 12.0947 12.4267 12.204 12.112 12.204Z" fill="#284855" />
                                            <path d="M15.12 11.996C15.1307 10.7747 15.2453 9.61469 15.464 8.51602C15.6827 7.41202 16.032 6.33469 16.512 5.28402C16.9973 4.22802 17.6427 3.16402 18.448 2.09202H12.88V0.796021H20V2.06002C19.296 2.87069 18.72 3.72135 18.272 4.61202C17.824 5.49735 17.4747 6.38269 17.224 7.26802C16.9733 8.14802 16.7973 8.99335 16.696 9.80402C16.6 10.6094 16.5493 11.34 16.544 11.996H15.12Z" fill="#284855" />
                                        </svg>
                                    </div>
                                </div>
                                <h1 className="text1">Infused with the essence of Brallium.</h1>
                                <h1 className="text2">Perfumed, body odor masker, mood-booster.</h1>
                                <div className="price-container">
                                    <h1 className="price">$16.99</h1>
                                    <h1 className="package">PACK OF 5</h1>
                                    <button className="cart">ADD TO CART <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M5.28988 0.295797C5.19615 0.388761 5.12176 0.49936 5.07099 0.62122C5.02022 0.743079 4.99408 0.873785 4.99408 1.0058C4.99408 1.13781 5.02022 1.26851 5.07099 1.39037C5.12176 1.51223 5.19615 1.62283 5.28988 1.7158L8.58988 5.0058L0.999878 5.0058C0.734661 5.0058 0.480308 5.11115 0.292771 5.29869C0.105235 5.48623 -0.00012207 5.74058 -0.00012207 6.0058C-0.00012207 6.27101 0.105235 6.52537 0.292771 6.7129C0.480308 6.90044 0.734661 7.0058 0.999878 7.0058L8.58988 7.0058L5.28988 10.2958C5.10157 10.4841 4.99579 10.7395 4.99579 11.0058C4.99579 11.2721 5.10157 11.5275 5.28988 11.7158C5.47818 11.9041 5.73358 12.0099 5.99988 12.0099C6.26618 12.0099 6.52157 11.9041 6.70988 11.7158L11.7099 6.7158C11.8009 6.62069 11.8723 6.50855 11.9199 6.3858C11.9728 6.2661 12.0001 6.13667 12.0001 6.0058C12.0001 5.87493 11.9728 5.7455 11.9199 5.6258C11.8723 5.50304 11.8009 5.3909 11.7099 5.2958L6.70988 0.295797C6.61691 0.202069 6.50631 0.127673 6.38445 0.0769043C6.2626 0.0261354 6.13189 -1.90735e-06 5.99988 -1.90735e-06C5.86787 -1.90735e-06 5.73716 0.0261354 5.6153 0.0769043C5.49344 0.127673 5.38284 0.202069 5.28988 0.295797Z" fill="#FFFEFC" />
                                    </svg></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/Vector (7).svg" alt="vector7" className="vector7" />
            </div>
            {/*Customer Reviews */}
            <div className="reviews">
                <div className="reviews-column">
                    <img src="earth.png" alt="earth" className="earth" />
                </div>
                <div className="reviews-column-right">
                    <h1 className="reviews-title">What People Think About Us</h1>
                    <img src="Review.png" alt="review" className="review" />
                    <button className="product"> <img src="product.png" alt="product" className="" /></button>
                </div>
            </div>
            {/* footer
            <div className="newsletter">
                <div className="newsletter-column">
                    <h1 className="">Brallium</h1>
                    <h1 className="first">Sign up for our email newsletter!</h1>
                    <h1 className="newsletter-text1">Stay updated on the latest updates, deals, and more from Brallium.</h1>
                    <h1 className="newsletter-text2">No spam, we promise. Unsubscribe at any time.</h1>
                </div>
                <div className="newsletter-column">

                </div>
            </div> */}
        </div>
    )
}
