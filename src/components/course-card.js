import React from 'react'
import "./course-card.css"
import { openInNewTab } from '../helper';
const CourseCard = (props) => {

    const { rating, enrollments, title, subtitle, img, url } = props;
    return (
      <div className="card" onClick={()=>{openInNewTab(url)}} >
        <img src={img} alt="card-img" className="card-img" />
        <div className="rating">
          <span>
          {rating}/5 Rating
          </span>
          <span>
          {enrollments}+ Enrolled
          </span>
        </div>
        <div className="card-content">
          <div className="card-title">
            {title}
          </div>
          <div className="card-subtitle">
            {subtitle}
          </div>
          <div className="card-action">
            Learn More
          </div>
        </div>
      </div>
    );
}

export default CourseCard;
