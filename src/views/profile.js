/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './profile.css'

const Profile = () => {
    return (
        <div className="profile-container">
            <Helmet>
                <title>Profile - ByteLearn</title>
                <meta property="og:title" content="Profile - ByteLearn" />
            </Helmet>
            <div className="profile-image">
                <Header></Header>
                <img alt="image" src="/gray-vector.svg" className="profile-image1" />
                <div className="profile-bg"></div>
            </div>
            <div className="profile-container01">

                <div className="profile-container06">
                    <h3 className="profile-text Text2XL">Refund Policy</h3>

                    <div className="profile-container08">
                        <svg viewBox="0 0 1024 1024" className="profile-icon2">
                            <path d="M810.667 213.333h-597.333l64-85.333h469.333zM929.877 230.059l-127.744-170.325c-8.363-11.136-21.077-17.024-34.133-17.067h-512c-13.909 0-26.283 6.656-34.133 17.067l-127.744 170.325c-1.835 2.389-3.456 5.035-4.736 7.808-2.773 5.803-4.096 12.032-4.053 18.133v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-9.344-3.029-18.005-8.064-24.96-0.171-0.213-0.299-0.427-0.469-0.64zM170.667 298.667h682.667v554.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165zM640 426.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667c0 58.88 23.936 112.299 62.464 150.869s91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
                        </svg>
                        <span className="profile-text2 TextSM">
                            Thank you for shopping at ByteLearn.
                        </span>
                    </div>
                    <div className="profile-container09">

                    </div>
                    <div className="profile-container11"></div>
                    <span className="profile-text4">
                        <span className="profile-text5">
                            Non-tangible irrevocable goods ("Digital products").</span>
                        <span className="profile-text5">
                            We have a strict NO-REFUND policy for all our courses.</span>
                        <span className="profile-text5">
                            We recommend contacting us for assistance if you experience any issues receiving or downloading our products.</span>
                        <span className="profile-text5">
                            Contact us for any issues:
                            If you have any questions about our Returns and Refunds Policy, please contact us at: support@algoprep.in
                        </span>
                    </span>
                  
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Profile
