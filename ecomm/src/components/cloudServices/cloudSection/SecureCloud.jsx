import React from 'react'
import MainCloud from './MainCloud'
import secure from '../../../assets/icons/secure.png'
export default function SecureCloud() {
  return (
    <>
      <MainCloud></MainCloud>
      <div className="container my-2 secure_cloud">
        <div className="row">
        <h4 className='text-center'><img src={secure} alt="" className='me-1'/><span>Secure</span></h4>
          <h6 className='text-center mb-3'>Refers to a secure method in IT or data protection.</h6>
        </div>
        <div className="row bottom justify-content-end ">
            <div className="col-lg-6 col sm-12 my-auto content px-md-5 px-3">
                <div className="section my-1 py-3">
                  <h4 className='mt-2'>Firewalls</h4>
                  <p>Multiple level of Firewalls, VPN, IP Blacklisting, User Authentication & Policies secure platform from un authorized access and intrusions.</p>
                </div>
                <div className="section my-1 py-3">
                  <h4 className='mt-2'>Security Alerts</h4>
                  <p>Clients can setup their own thresholds to generate alerts, System automatically triggers alarms if those thresholds are met.</p>
                </div>
                <div className="section my-1 py-3">
                  <h4 className='mt-2'>SMS & Email Alerts</h4>
                  <p>These alerts are available to the client over SMS or emails. It is a chargeable service.</p>
                </div>
              
            </div>
        </div>
      </div>
    </>
  )
}
