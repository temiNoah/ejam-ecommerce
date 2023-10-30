import React, { useState } from 'react'
import { Container, Row, Col, Nav, NavItem, NavLink, Button } from "reactstrap";


function Content() {
    const [isCompleted, setIsCompleted] = useState(false);
    const stars = [1, 2, 3, 4, 5]
    return (
        <Container style={{ display: 'flex', width: '100%', border: '0px solid #fff', padding: 0, flexDirection: 'column', gap: '10px', marginBottom: '10%' }} >
            <Row className="" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '20px', border: '0px solid #000' }} lg='12'>
                <Col xs="12" lg="12" style={{ display: 'flex', border: '0px solid #000', justifyContent: 'space-between' }} >
                    <img src={require('../../assets/images/Clarifion_Logo.png')} alt="logo" className='logo mobile-logo' />
                    <div style={{ display: 'flex', gap: '20px' }} className='security-img mobile-security-img'>
                        <img src={require('../../assets/images/McAfee__Secure.png')} alt="shield" className='mcafee mobile-mcafee' />
                        <img src={require('../../assets/images/Norton-Logo-2019.png')} alt="shield" className='norton mobile-norton' />
                    </div>
                </Col>
            </Row>

            <Row style={{ width: '100%', }}>
                <Col>
                    <div><h3>Wait! Your Order In Progress.</h3></div>
                    <div style={{ fontWeight: '100' }}>Lorem ipsum dolor sit amet consectetur adipisicing. </div>
                </Col>
            </Row>

            <Row style={{ border: '0px solid #000', display: 'flex', justifyContent: 'center' }}>
                <div style={{ border: '0px solid #000', alignContent: 'center', width: 'auto' }}>
                    <Nav style={{ border: '0px solid #000' }}>
                        <NavItem>
                            <NavLink active href="#">
                                {isCompleted ? <i class="ri-checkbox-circle-line" ></i> : <span className='stage-bullet'>1</span>} <span className='mobile-steps'>Step 1:</span><span className='mobile-step-name'>Cart Review</span>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="#">
                                {isCompleted ? <i class="ri-checkbox-circle-line" ></i> : <span className='stage-bullet'>2</span>} <span className='mobile-steps'>Step 2:</span> <span className='mobile-step-name'>Checkout</span>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="#">
                                {isCompleted ? <i class="ri-checkbox-circle-line" ></i> : <span className='stage-bullet'>3</span>} <span className='mobile-steps'> Step 3:</span><span className='mobile-step-name'>Special Offer</span>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink disabled href="#">
                                {isCompleted ? <i class="ri-checkbox-circle-line" ></i> : <span className='stage-bullet'>4</span>} <span className='mobile-steps'>Step 4:</span> <span className='mobile-step-name'>Confirmation</span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Row>

            <Row style={{ display: 'flex', justifyContent: 'center', }}>
                <div style={{ display: 'flex', width: '80%', border: '0px solid #000', gap: '20px' }} className='mobile-content-pane'>

                    <div style={{ border: '0px solid #000', flex: '1' }} className='mobile-left-pane'>
                        <img src={require('../../assets/images/image 4.png')} alt="logo" className='tiny_image' style={{ width: "100%", heigh: '100%' }} />
                        <div>
                            <div className="cellWithIm" style={{ display: 'flex', }}>
                                <img className="cellImg" src={require('../../assets/images/profile-picture-1.jpg')} alt="avatar" style={{ width: "32px", height: "32px", borderRadius: '50%', objectFit: "cover", marginRight: "20px" }} />
                                <div>
                                    {stars.map((d, index) => <i class="ri-star-line" key={index} style={{ color: '#FFD700', }}></i>)}
                                    <div>
                                        kent. T <span style={{ fontWeight: '300', fontSize: '12px', color: 'green' }}> <i class="ri-verified-badge-fill"></i> verified customer</span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ fontSize: '12px', fontWeight: '200' }}>
                                "As soon as the Clarifions arrived I put one in my bedroom.This was late in the afternoon .When I went to the bed in the evening it smelled clean.When I went to bed I felt I could breathe better.Wonderful. "
                            </div>
                        </div>
                    </div>

                    <div style={{ flex: '1', justifyContent: 'space-between' }} className='mobile-left-pane'>
                        <div>
                            <span style={{ textTransform: 'uppercase' }}>one time only</span> Special Price 6 Extra Clarifion For Only $14 Each ($84.00)Total!
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ backgroundColor: 'rgb(43, 127, 248)', borderRadius: '20px' }}>
                                <img src={require('../../assets/images/image-removebg.png')} alt="logo" className='tiny_image' style={{ widt: '50px', heigh: '30px' }} />
                            </div>
                            <div style={{ margin: '10px 0px 0px 10px', width: '100%' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', border: '0px solid #000' }} >
                                    <div> Clarifion Air Ionizer</div>
                                    <div>
                                        <span style={{ fontWeight: '200' }}>$180</span><span style={{ color: 'rgb(43, 127, 248)' }}>$84</span>
                                    </div>
                                </div>
                                <div style={{ border: '0px solid #000', display: 'flex', textAlign: 'start' }}>
                                    {stars.map((d, index) => <i class="ri-star-line" key={index} style={{ color: '#FFD700', }}></i>)}
                                </div>
                                <div style={{ border: '0px solid #000', display: 'flex', textAlign: 'start' }}>
                                    <span style={{
                                        border: '0px solid #000', padding: '3px', backgroundColor: 'rgb(43, 127, 248)', borderRadius: '50%', height: "5px", width: "5px"
                                    }}></span>12 left in stock
                                </div>
                            </div>
                        </div>
                        <div>
                            Simply plug a Clarifion into any standard outlet and replace bulky,expensive air purifiers with a simple.
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            {
                                <ul style={{ listStyleType: 'none', textWrap: 'nowrap', justifyContent: 'start', fontWeight: '300' }} className='item-benefits'>
                                    <li >
                                        <span><i class="ri-check-line" style={{ color: 'rgb(43, 127, 248)' }}></i></span>Negative Ion Technology may <span style={{ fontWeight: '500' }}>help with allergens</span>
                                    </li>
                                    <li>
                                        <span><i class="ri-check-line" style={{ color: 'rgb(43, 127, 248)' }}></i></span>Designed for <span style={{ fontWeight: '500' }}>air rejuvenation</span>
                                    </li>
                                    <li>
                                        <span><i class="ri-check-line" style={{ color: 'rgb(43, 127, 248)' }}></i></span><span style={{ fontWeight: '500' }}>Perfect for every room</span> in all types of places
                                    </li>
                                </ul>
                            }
                        </div>

                        <div style={{ backgroundColor: 'rgb(237, 243, 253)', marginTop: '30px', fontWeight: '300' }}>
                            <span className='' style={{ border: '0px solid #000', borderRadius: '50%', backgroundColor: 'rgb(43, 127, 248)', color: 'white', padding: '5px' }}>%</span> Save <span style={{ color: 'rgb(43, 127, 248)' }}>53%</span> and get <span style={{ color: 'rgb(43, 127, 248)' }}>6 extra clarifision</span> for only <span style={{ color: 'rgb(43, 127, 248)' }}>$14 Each</span>.
                        </div>

                        <div style={{ marginTop: '30px' }}>
                            <Button
                                color="primary"
                                style={{ borderRadius: '12px', width: '100%', backgroundColor: 'rgb(90, 174, 67)', border: 'none' }}
                            >
                                Yes - CLAIM MY DISCOUNT <i class="ri-arrow-right-line"></i>
                            </Button>
                        </div>

                        <div style={{ fontSize: '10px', border: '0px solid #000' }}>
                            <span>Free Shipping</span>
                            <span>|</span>
                            <span><i class="ri-lock-line"></i> Secure 256-Bit SSL Encryption</span>
                            <span>|</span>
                            <span>
                                <ul className='psp-group'>
                                    <li><img src={require('../../assets/images/visa.png')} alt="logo" className='tiny_image' style={{ width: '50px', height: '30px' }} /></li>
                                    {/* <li> <img src={require('../../assets/images/.png')} alt="logo" className='tiny_image' style={{ width: '50px', height: '30px' }} /></li> */}
                                    <li> <img src={require('../../assets/images/paypal2.jpeg')} alt="logo" className='tiny_image' style={{ width: '50px', heigh: '30px' }} /></li>
                                    <li> <img src={require('../../assets/images/mastercard.png')} alt="logo" className='tiny_image' style={{ width: '50px', heigh: '30px' }} /></li>
                                    <li><img src={require('../../assets/images/googlePay.png')} alt="logo" className='tiny_image' style={{ width: '50px', heigh: '30px' }} /></li>
                                    <li><img src={require('../../assets/images/applePay.png')} alt="logo" className='tiny_image' style={{ width: '50px', heigh: '30px' }} /></li>
                                    <li><img src={require('../../assets/images/amex.png')} alt="logo" className='tiny_image' style={{ width: '50px', heigh: '30px' }} /></li>
                                </ul>
                            </span>
                        </div>
                        <div >
                            <a href='#' style={{ color: 'red', textDecoration: 'underline', fontSize: '13px', fontWeight: '300' }}>NO THANKS,I DON'T WANT THIS.</a>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', fontSize: '12px', fontWeight: '200', marginTop: '20px' }}>
                            <div>
                                <img src={require('../../assets/images/image6.png')} alt="logo" className='tiny_image' style={{ width: '50px', heigh: '30px' }} />
                            </div>
                            <div>
                                If you are not completely thrilled with your Clarifion - We have a <span style={{ fontWeight: '500' }}>30 day satisfaction guarantee</span>.Please refer to our return policy at the bottom of the page
                                for more detailes.
                                Happy Shopping!
                            </div>
                        </div>

                    </div>


                </div>

            </Row>
        </Container>
    )
}

export default Content