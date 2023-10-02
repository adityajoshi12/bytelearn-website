/* eslint-disable react/prop-types */
import React from 'react'

import PropTypes from 'prop-types'
import { SVG } from "../helper"

import './service-card.css'

const ServiceCard = (props) => {
    return (
        <div className="service-card-container">
            <div className="service-card-container1">
                {(() => {
                    if (props.SVG == SVG.TROPHY) {
                        return (
                            <svg viewBox="0 0 1024 1024" className="home-icon12">
                            <path d="M726 726v-172h-86v172h86zM554 726v-428h-84v428h84zM384 726v-300h-86v300h86zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h596z"></path>
                          </svg>
                        )
                    } else if (props.SVG == SVG.BULB) {
                        return (
                          

<svg viewBox="0 0 1024 1024" className="service-card-icon">
<path d="M512 86q124 0 211 87t87 211q0 150-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
</svg>
                        )
                    }
                    else if (props.SVG == SVG.GRAPH) {
                        return (

                    
                                    <svg viewBox="0 0 1024 1024" className="home-icon10">
                                        <path d="M832 192v-128h-640v128h-192v128c0 106.038 85.958 192 192 192 20.076 0 39.43-3.086 57.62-8.802 46.174 66.008 116.608 113.796 198.38 130.396v198.406h-64c-70.694 0-128 57.306-128 128h512c0-70.694-57.306-128-128-128h-64v-198.406c81.772-16.6 152.206-64.386 198.38-130.396 18.19 5.716 37.544 8.802 57.62 8.802 106.042 0 192-85.962 192-192v-128h-192zM192 436c-63.962 0-116-52.038-116-116v-64h116v64c0 40.186 7.43 78.632 20.954 114.068-6.802 1.246-13.798 1.932-20.954 1.932zM948 320c0 63.962-52.038 116-116 116-7.156 0-14.152-0.686-20.954-1.932 13.524-35.436 20.954-73.882 20.954-114.068v-64h116v64z"></path>
                                    </svg>
                            

                        )
                    } 
                })()}


            </div>
            <h1 className="service-card-text TextXL">{props.heading}</h1>
            <span className="service-card-text1">{props.text}</span>
        </div>
    )
}

ServiceCard.defaultProps = {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    heading: 'Excelent services',
}

ServiceCard.propTypes = {
    text: PropTypes.string,
    heading: PropTypes.string,
}

export default ServiceCard
