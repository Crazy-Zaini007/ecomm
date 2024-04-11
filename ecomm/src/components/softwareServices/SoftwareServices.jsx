import React from 'react'
import webicon from '../../assets/web icon.png'
import idea from '../../assets/icons/idea.png'
import businesIcon from '../../assets/icons/business-analysis.png'
import uiux from '../../assets/icons/ui-ux icon.png'
import codeicon from '../../assets/icons/codeicon.png'
import aiicon from '../../assets/icons/ai-icon.png'
import webdevelopmenticon from '../../assets/icons/web-development-icon.png'
import appdevelopmenticon from '../../assets/icons/mobile-application-icon.png'
import enterpriseicon from '../../assets/icons/interprise-icon.png'
import saasicon from '../../assets/icons/saas-icon.png'
import {Link} from 'react-router-dom'
import webimage1 from '../../assets/web-image.jpg'
import appleicon from '../../assets/icons/apple_icon.png'
import androidicon from '../../assets/icons/androidicon.png'
import appdevelopmentimage from '../../assets/development.jpg'


export default function SoftwareServices() {
  return (
    <div className='main_soft'>
     <div className="container-fluid software_solutions">
        <div className="row ">
        <div className="col-md-12 main_soft_top text-center py-5">
            <h2>Software Development Services</h2>     
            </div>
        </div>
        </div> 
        <div className="container">
        <div className="row pt-md-5 pt-4 main_soft_intro ">
            <h4 className='text-center'>Why Choose Our Software Development Servcies?</h4>
            <div className="col-md-6 left py-md-3 py-2 px-md-5 px-2">
                <p>We help you design and develop the future of your company's digital products and business.</p>
            </div>
            <div className="col-md-6 right py-md-3 py-2">
                <p>We offer <span className='blue_span'>enterprise-grade software</span>, <span className='info_span'>websites</span>, <span className='info_span'>ecommerce design</span>, <span className='blue_span'>prototyping</span>, <span className='blue_span'>UI/UX design and development</span>, <span className='info_span'>product development</span>, in a <strong>SaaS Applictation model</strong> that always meets your needs while allowing you to focus on running your business.</p>
            </div>
        </div>
        <div className="row pt-md-5 pt-4 web_icon ">
            <div className="col-md-4 left py-md-3 py-2 px-md-5 px-2 ">
               <h4><img src={webicon} alt="" /><span className='me-1'> Web</span>Applications</h4>
            </div>
            <div className="col-md-8 right py-md-3 py-2">
                <h5>What We Offers? <span >We combine creativity and pragmatism to develop custom solutions for you!</span></h5>
            </div>
        </div>
        
        </div>
        <div className="container-fluid">
        <div className="row bottom my-5 justify-content-center ">
          <div className="col-md-5 px-md-5 px-4 py-md-4 py-3 my-auto">
            <h5 className='my-4'>Solutions that are enterprise-ready, flexible, scalable, and built for future technologies.</h5>
          </div>
          <div className="col-md-6 px-md-5 px-2 py-4 my-auto">
            <div className="text  my-auto">
              <div className="row py-4 px-3  m-0 ">
                <div className="col-md-6 p-3 border_col">
                <img src={idea} alt="" />
                  <h4 className='mt-2'>The Idea</h4>
                  <p>is to develop complete solution for businesses looking to get the most out of their investment.
                  </p></div>
                <div className="col-md-6 p-3 ">
                <img src={businesIcon} alt="" />
                  <h4 className='mt-2'>Business Analysis</h4>
                  <p>We offer enterprises the data-driven insights they need to stay competitive.</p></div>
                  <hr className='my-3 px-5'/>
                <div className="col-md-12 p-3">
                <img src={uiux} alt="" />
                  <h4 className='mt-2'>UI Design/ User Experience</h4>
                  <p>Provides an intuitive way for you to experiment and explore various product design concepts before going into production.</p>
                  </div>
                  <hr className='my-3 px-5'/>
                <div className="col-md-12 p-3  rounded">
                <img src={codeicon} alt="" />
                  <h4 className='mt-2'>Support Service</h4>
                  <p>With the proliferation of so many new technologies and advancements in the field of technology, Our software solutions will save you a lot of time and money. These solutions are enterprise-ready, flexible, scalable, and built for future technologies.</p>
                    </div>

              </div>
            </div>
          </div>
        </div>  
        </div>
        <div className="container my-4 soft_expertise">
            <div className="row justify-content-center software_development">

                <div className="col-md-12 text-center">
                    <h4 ><span>Software</span> Development</h4>
                    <h6 className='mb-5'>Development Expertise</h6>
                    <ul className='my-5 mx-auto'>
                        <li className='mx-2 '>
                            <img src={aiicon} className='mt-3 mb-2' alt="" />
                            <h6 className='py-3'>Artificial <br /> Intelligence</h6>
                        </li>
                        <li className='mx-2 '>
                            <img src={webdevelopmenticon} className='mt-3 mb-2' alt="" />
                            <h6 className='py-3'>Web <br /> Development</h6>

                        </li>
                        <li className='mx-2 '>
                            <img src={appdevelopmenticon} className='mt-3 mb-2' alt="" />
                            <h6 className='py-3'>Mobile App <br /> Development</h6>

                        </li>
                        <li className='mx-2 '>
                            <img src={enterpriseicon} className='mt-3 mb-2' alt="" />
                            <h6 className='py-3'>Enterprise <br /> Solutions</h6>

                        </li>
                        <li className='mx-2 '>
                            <img src={saasicon} className='mt-3 mb-2' alt="" />
                            <h6 className='py-3'>SaaS <br /> Application</h6>

                        </li>
                    </ul>

                    <h2 className='mt-md-5 mt-3 mb-2'>Together we'll create your vision, no matter how complicated it may seem!</h2>
                    <p>Uncover better ways to developing software by doing it and helping others do it as well. Development phase includes continuous process of testing for Quality Assurance for a stabilized working software version.</p>
                </div>
               
            </div>
            <div className="row justify-content-center our_products py-4 mt-md-5 mt-3 px-md-3 mx-2">
              <Link className='text-center mb-md-5 mb-3 my-auto'>EXPLORE OUR PRODUCTS <i className="fas fa-arrow-right ms-2"></i></Link>
            <div className="col-md-5 col-sm-12 text-center px-1">
                  <h6 className='text-start'>We help you build your dream app or website. <span className='blue_span'>Increase Revenue</span> & <span className='info_span'>Reduce Costs</span> by making us your development partner.</h6>
                  <button className='btn mt-5 py-2 mb-4'>Get a Quote Now</button>
                  </div>
                  <div className="col-lg-6 col-md-7">
                  <img src={webimage1} alt="" />
                  </div>
                 
            </div>

            <div className="row app_development justify-content-center mt-md-5 mt-4 px-lg-5">
              <div className="col-md-12 text-center mt-4 px-lg-5">
                <div className="top_images px-lg-5">
                  <img src={appdevelopmenticon} alt="" />
                  <h4 className='my-2'><span>App</span> Development</h4>
                  <h5 className='mb-3 mt-4'>We Create a custom mobile app tailored for your business needs.</h5>
                 <div className="other_images px-lg-5">
                 <img src={appleicon} alt="" className='mx-2' />
                  <img src={androidicon} alt="" className='mx-2' />
                  <p className='mt-4'>One-stop shop for all your mobile app needs. Whether you want to build a simple social networking app or an enterprise level e-commerce solution, we’ve got you covered! You get a single point of contact for all.</p>
                 </div>
                </div>
              </div>
              <div className="col-md-12 ">
                <div className="row justify-content-center py-4 mt-md-5 mt-3 px-lg-3 app_solution">
                  <div className="col-md-5">
                    <h5>Mobile App Solutions</h5>
                    <p className="high-p mt-4"><i className="fa-solid fa-check me-2" aria-hidden="true"></i><span>Integrate</span> Web Application to Mobile App</p>
                    <p className="high-p mt-2"><i className="fa-solid fa-check me-2" aria-hidden="true"></i>Flexibility for <span>iOS</span> and <span>Android</span> Platforms</p>
                    <p className="high-p mt-2"><i className="fa-solid fa-check me-2" aria-hidden="true"></i><span>Hybrid</span>, Stand-Alone Mobile App</p>
                    <p className="high-p mt-2"><i className="fa-solid fa-check me-2" aria-hidden="true"></i><span>Simplified</span> App building, testing & maintenance</p>
                  </div>
                  <div className="col-lg-6 col-md-7">
                    <img src={appdevelopmentimage} alt="" />
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="container-fluid ">
          <div className="row justify-content-center px-2 bottom_solutions shadow py-5">
            <div className="col-lg-9 col-md-10 col-sm-11 bottom_col py-md-4 py-0 mx-2 my-auto">
              <div className="row py-0 justify-content-center">
                <div className="col-xl-6 col-12 order-lg-first order-last">
                  <div className="row px-2">
                    <div className="col-auto col-lg-6 py-md-5 py-3 px-3 border-end border-bottom ">
                      <h5><span>E-Commerce Apps</span></h5>
                    </div>
                    <div className="col-auto col-lg-6  py-md-5 py-3 px-3 border-bottom">
                    <h5>Social Networking Apps</h5>

                    </div>
                    <div className="col-auto col-lg-6  py-md-5 py-3 px-3 border-bottom border-end">
                      <h5>Internal Corporate Solutions</h5>
                    </div>
                    <div className="col-auto col-lg-6 py-md-5 py-3 px-3 border-bottom">
                      <h5><span>News & Informative Apps</span></h5>
                    </div>
                    <div className="col-auto col-lg-6 py-md-5 py-3 px-3 border-end">
                      <h5><span>App Integrations</span></h5>
                    </div>
                    <div className="col-auto col-lg-6 py-md-5 py-3 px-3 px-4">
                      <h5>Fintech Apps</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-md-12  order-lg-last order-first text-center ">
                  <h6 className='text-center mt-3'>Affordable all-in-one mobile solution</h6>
                  <p className='mt-md-5 mt-4 text-start'>If you want to build an app for your business, but don’t want to break the bank, then we have the perfect solution for you!</p>
                  <button className='btn mt-5 py-2 mb-4'>Get a Quote Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row bottom_bg justify-content-center ">
            <div className="col-lg-9 col-ms-12 bottom_bg_text">
              <div className="row">
                <div className="col-md-3 ">
                  <h4>Ideate Automate</h4>
                </div>
                <div className="col-md-8">
                  <Link className='mx-2'>Analyse</Link>
                  <Link className='mx-2'><i className="fas fa-circle"></i> Prototype</Link>
                  <Link className='mx-2'><i className="fas fa-circle"></i> Develop</Link>
                  <Link className='mx-2'><i className="fas fa-circle"></i> Test</Link>
                  <Link className='mx-2'><i className="fas fa-circle"></i> Deploy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
