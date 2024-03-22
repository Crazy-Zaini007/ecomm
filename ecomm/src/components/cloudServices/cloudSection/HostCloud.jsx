import React from 'react'
import MainCloud from './MainCloud'
import host from '../../../assets/icons/hosting.png'
import hosting from '../../../assets//hosting.jpg'
import { Link } from 'react-router-dom'
export default function HostCloud() {
  return (
    <>
      <MainCloud></MainCloud>

      <div className="container-fluid my-2 host_cloud">
        <div className="row mx-2 mx-lg-0 ">
        <h4 className='text-center'><img src={host} alt="" /><span>Host</span></h4>
          <h6 className='text-center mb-3'>Your clients recognizes by your Business ID (Internet Domain)!</h6>
          <div className="col-lg-6 col-sm-12 px-md-5 px-4 py-5  content bg-white my-2 mx-lg-0 my-auto shadow">
            <h4>Empower Your Online Presence with Reliable and Secure Web Hosting Solutions.</h4>
            <div className="buttons  mx-md-5 mb-2">
                <Link className='btn bg m-1 '>9.95% Uptime</Link>
                <Link className='btn no-bg m-1 '>Affordable Rates</Link>
                <Link className='btn bg m-1 '>Free SSL Certificates</Link>
                <Link className='btn no-bg m-1 '>Firewall</Link>
                <Link className='btn  no-bg m-1 '>C-Panel Access</Link>
                <Link className='btn bg m-1 '>Hosting Support</Link>

            </div>
            <p>Standard Packages are available for Individual Accounts, our Business Model encourages Resellers for every service. cPanel Account Management is available to Resellers. <br /><br />Prices are exclusive of all types of applicable taxes.</p>
          </div>
          <div className="col-md-6 d-lg-block d-none">
            <div className="image my-auto">
                <img src={hosting} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
