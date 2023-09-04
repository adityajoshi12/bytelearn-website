import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import {SVG, UDEMY_COURSE} from "../helper"
import Header from '../components/header'
import Label from '../components/label'
import MemberDetails from '../components/member-details'
import CourseCard from '../components/course-card'
import ServiceCard from '../components/service-card'
import SecondaryButton from '../components/secondary-button'
import Footer from '../components/footer'
import './home.css'
 

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>ByteLearn</title>
        <meta property="og:title" content="ByteLearn" />
      </Helmet>
      <div className="home-hero">
        <div className="home-bg"></div>
        <Header heading1="BYTELEARN" heading11="ByteLearn"></Header>
        <div className="home-container01">
          <div className="home-container02">
            <h1 className="home-text">
              Welcome to the ByteLearn learning Hub!
            </h1>
            <span className="home-text01">
              Empower yourself with the knowledge and skills to navigate the
              cutting-edge realms of Blockchain and Kubernetes through our
              comprehensive workshops and training programs.
            </span>
          </div>
          <img alt="image" src="/gray-vector.svg" className="home-image" />
          <img alt="image" src="/white-vector.svg" className="home-image1" />
        </div>
      </div>
      <div className="home-section1">
        <div className="home-container03">
          <div className="home-container04">
          <Label text="Blockchain Workshops"></Label>
            <h3 className="home-text03">
              Unlocking the Power of Decentralization
            </h3>
            <span className="home-text04">
              Immerse yourself in the revolutionary world of blockchain
              technology with our expert-led workshops. Whether you&apos;re a
              curious beginner or an experienced professional, our courses cater
              to all skill levels.
            </span>
          </div>
          <div className="home-cards-container">
            <div className="home-card1">
              <div className="home-container05">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M639.403 658.091l32 241.152-137.429-82.475c-13.269-7.851-29.995-8.363-43.904 0l-137.429 82.475 32.043-241.109c39.296 15.829 82.304 24.533 127.317 24.533s88.021-8.747 127.403-24.576zM654.165 554.283c-2.475 1.28-4.821 2.773-6.955 4.48-39.253 24.448-85.547 38.571-135.211 38.571-70.699 0-134.656-28.587-181.035-74.965s-74.965-110.336-74.965-181.035 28.587-134.656 74.965-181.035 110.336-74.965 181.035-74.965 134.656 28.587 181.035 74.965 74.965 110.336 74.965 181.035-28.587 134.656-74.965 181.035c-11.861 11.861-24.875 22.571-38.869 31.915zM304.64 612.48l-48.256 363.221c-3.115 23.339 13.312 44.8 36.693 47.915 9.984 1.323 19.669-0.939 27.563-5.717l191.36-114.816 191.403 114.816c20.224 12.117 46.421 5.589 58.539-14.635 5.205-8.661 6.955-18.389 5.717-27.563l-48.213-363.307c11.947-9.173 23.296-19.115 33.92-29.739 61.696-61.696 99.968-147.072 99.968-241.323s-38.272-179.627-99.968-241.365-147.115-99.968-241.365-99.968-179.627 38.272-241.365 99.968-99.968 147.115-99.968 241.365 38.272 179.627 99.968 241.365c10.667 10.667 22.016 20.608 33.963 29.781z"></path>
                </svg>
              </div>
              <h6 className="home-text05 TextXL">Expert Instructors</h6>
              <span className="home-text06">
                Our courses are led by industry experts with extensive
                experience in blockchain and Kubernetes. Learn from those
                who&apos;ve worked on real-world projects and can provide
                valuable insights.
              </span>
            </div>
            <div className="home-card2">
              <div className="home-container06">
                <svg
                  viewBox="0 0 1097.142857142857 1024"
                  className="home-icon02"
                >
                  <path d="M731.429 859.429c0 9.714-8.571 18.286-18.286 18.286h-548.571c-21.143 0-18.286-22.286-18.286-36.571v-329.143h-109.714c-20 0-36.571-16.571-36.571-36.571 0-8.571 2.857-17.143 8.571-23.429l182.857-219.429c6.857-8 17.143-12.571 28-12.571s21.143 4.571 28 12.571l182.857 219.429c5.714 6.286 8.571 14.857 8.571 23.429 0 20-16.571 36.571-36.571 36.571h-109.714v219.429h329.143c5.143 0 10.857 2.286 14.286 6.286l91.429 109.714c2.286 3.429 4 8 4 12zM1097.143 621.714c0 8.571-2.857 17.143-8.571 23.429l-182.857 219.429c-6.857 8-17.143 13.143-28 13.143s-21.143-5.143-28-13.143l-182.857-219.429c-5.714-6.286-8.571-14.857-8.571-23.429 0-20 16.571-36.571 36.571-36.571h109.714v-219.429h-329.143c-5.143 0-10.857-2.286-14.286-6.857l-91.429-109.714c-2.286-2.857-4-7.429-4-11.429 0-9.714 8.571-18.286 18.286-18.286h548.571c21.143 0 18.286 22.286 18.286 36.571v329.143h109.714c20 0 36.571 16.571 36.571 36.571z"></path>
                </svg>
              </div>
              <h6 className="home-text07 TextXL">Hands-on Learning</h6>
              <span className="home-text08">
                <span className="home-text09">
                  We believe in learning by doing. Our workshops and training
                  involve practical exercises, case studies, and projects that
                  simulate real industry scenarios.
                </span>
                <br></br>
                <br></br>
              </span>
            </div>
            <div className="home-card3">
              <div className="home-container07">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M636 938h-6q-92-24-158-90-38-38-65-103t-27-119q0-52 38-89t92-37 93 37 39 89q0 34 25 58t63 24 64-24 26-58q0-120-91-206t-219-86q-92 0-168 47t-114 125q-24 50-24 120 0 80 28 154 6 20-14 26t-26-12q-32-82-32-168 0-78 30-138 42-90 129-144t191-54q146 0 249 99t103 237q0 52-39 88t-93 36-92-36-38-88q0-34-26-59t-64-25-63 25-25 59q0 112 80 192 56 56 140 78 18 2 14 26-4 16-20 16zM530 626q0 74 55 128t137 54q4 0 18-2t23-2 18 3 11 13q4 22-18 26-24 4-52 4-80 0-132-38-102-70-102-186 0-22 22-22 20 0 20 22zM416 930q-8 0-14-6-54-54-86-114-46-80-46-184 0-94 71-162t171-68 171 68 71 162q0 20-22 20t-22-20q0-78-58-133t-140-55-140 55-58 133q0 96 38 164 26 46 80 104 16 14 0 30-6 6-16 6zM150 414q-22 0-22-20 0-4 4-12 64-92 160-140 100-52 220-52t220 52q98 48 160 138 4 8 4 12 0 14-16 20t-24-8q-60-82-144-124-92-46-200-47t-200 47q-90 46-146 126-6 8-16 8zM760 190q-8 0-10-2-118-60-238-60-130 0-238 60-10 6-20 0t-10-18q0-14 10-20 116-64 258-64 130 0 258 64 18 10 8 28-8 12-18 12z"></path>
                </svg>
              </div>
              <h6 className="home-text12"> Networking Opportunity </h6>
              <span className="home-text13">
                Stay ahead of the curve by mastering technologies that are
                reshaping industries. Blockchain and high demand across various
                sectors, and our programs are designed to make you
                industry-ready.
              </span>
            </div>
          </div>
          <div className="home-work-with-us">
            <div className="home-container08">
              <div className="home-container09">
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M384 554q64 0 140 18t139 60 63 94v128h-684v-128q0-52 63-94t139-60 140-18zM640 512q-26 0-56-10 56-66 56-160 0-38-16-86t-40-76q30-10 56-10 70 0 120 51t50 121-50 120-120 50zM214 342q0-70 50-121t120-51 120 51 50 121-50 120-120 50-120-50-50-120zM712 560q106 16 188 59t82 107v128h-172v-128q0-98-98-166z"></path>
                </svg>
              </div>
              <h3 className="home-text14">
                Unlocking the Power of Decentralization
              </h3>
              <span className="home-text15">
                <span>
                  Immerse yourself in the revolutionary world of blockchain
                  technology with our expert-led workshops. Whether you&apos;re
                  a curious beginner or an experienced professional, our courses
                  cater to all skill levels.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Learn how blockchain works, explore its various applications
                  beyond cryptocurrency, and grasp the potential to transform
                  industries such as finance, supply chain, healthcare, and
                  more. Our hands-on approach ensures you not only understand
                  the theory but can also apply your knowledge to real-world
                  scenarios.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container10">
              <div className="home-container11">
                <img alt="image" src="/blue_wave.svg" className="home-image2" />
              </div>
              <div className="home-container12">
                <h4 className="home-text20">Unlocking Opportunities</h4>
                <span className="home-text21">
                  One Block at a Time: Unleash Your Potential with Our
                  Blockchain Workshop
                </span>
              </div>
            </div>
          </div>
        </div>
        <img alt="image" src="/white-vector.svg" className="home-image3" />
      </div>
      <div className="home-section2">
        <div className="home-container13">
          <Label text="Kubernetes Training"></Label>
          <h2 className="home-text22"> Mastering Container Orchestration</h2>
          <span className="home-text23">
            Discover the key to efficient and scalable software deployment with
            our Kubernetes training program.As containerization continues to
            reshape the way software is developed and deployed, mastering
            Kubernetes has become essential. Our training takes you from the
            fundamentals of containers to advanced Kubernetes concepts
          </span>
        </div>
        <div className="home-growing-company-section">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
            className="home-image4"
          />
          <div className="home-container14">
            <div className="home-container15">
              <svg viewBox="0 0 967.4605714285714 1024" className="home-icon08">
                <path d="M822.857 256c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM950.857 91.429c0 189.714-52.571 316-188 452-33.143 32.571-70.857 66.286-111.429 100.571l-11.429 216.571c-0.571 5.714-4 11.429-9.143 14.857l-219.429 128c-2.857 1.714-5.714 2.286-9.143 2.286-4.571 0-9.143-1.714-13.143-5.143l-36.571-36.571c-4.571-5.143-6.286-12-4.571-18.286l48.571-157.714-160.571-160.571-157.714 48.571c-1.714 0.571-3.429 0.571-5.143 0.571-4.571 0-9.714-1.714-13.143-5.143l-36.571-36.571c-5.714-6.286-6.857-15.429-2.857-22.286l128-219.429c3.429-5.143 9.143-8.571 14.857-9.143l216.571-11.429c34.286-40.571 68-78.286 100.571-111.429 142.857-142.286 252-188 450.857-188 10.286 0 19.429 8 19.429 18.286z"></path>
              </svg>
            </div>
            <h3 className="home-text24">Mastering Container Orchestration</h3>
            <span className="home-text25">
              Our training takes you from the fundamentals of containers to
              advanced Kubernetes concepts. Gain insights into deploying,
              managing, and scaling containerized applications effortlessly.
              Whether you&apos;re an IT professional, developer, or system
              administrator, our Kubernetes training equips you with the skills
              needed to thrive in modern DevOps environments.
            </span>
          </div>
        </div>
        <div className="home-container16">
          <h4 className="home-text26">Our Highest Rated Courses</h4>
          <h3 className="home-text27">Elevate your expertise</h3>
          <span className="home-text28">
          Our courses are an excellent way for you to learn the most in-demand skills from industry experts.
          </span>
        </div>
        <div className="home-team">
          <div className="home-container17">
            
              
           {
            UDEMY_COURSE.map((course, index)=>{
                return (
<CourseCard key={index}
rating={course.rating} 
url={course.url} 
enrollments={course.enrollments} 
title={course.name} 
img={course.img}></CourseCard>
                )
            })
           }
                
            
           
           
 
          
          </div>
        </div>
      </div>
      <div className="home-section3">
        <div className="home-container22">
          {/* <h6 className="home-text29 TextSM">
            <span>ON THE COASTLINE</span>
          </h6> */}
          <h3 className="home-text31">
            Why Choose ByteLearn
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h3>
          <span className="home-text32">
            <span>
              Explore our course offerings, and take the first step toward
              becoming a proficient Blockchain and Kubernetes professional. Join
              us today and shape the future of technology!
            </span>
            <br className="TextXL"></br>
          </span>
          <div className="home-services">
            <ServiceCard
              text="Stay ahead of the curve by mastering technologies that are reshaping industries. Blockchain and Kubernetes are in high demand across various sectors, and our programs are designed to make you industry-ready."
              heading="Industry Relevance"
              SVG={SVG.TROPHY}
            ></ServiceCard>
                        <ServiceCard
              text="Our courses are led by industry experts with extensive
              experience in Blockchain and Kubernetes. Learn from those
              who&apos;ve worked on real-world projects and can provide
              valuable insights."
              heading="Expert Instructors"
              SVG={SVG.BULB}
            ></ServiceCard>

<ServiceCard
              text="Receive recognized certifications upon completion of our
              workshops and training. Showcase your expertise to potential
              employers or clients."
              heading="Certification"
              SVG={SVG.GRAPH}
            ></ServiceCard>
          </div>
          <form id="contactus" action="https://formsubmit.co/51c750c80a8d802760e8530d3eb67c53" method="POST">
          <div className="home-contact">
            <Label text="MESSAGE US"></Label>
            <h2 className="home-text39">Connect with Us</h2>
            <span className="home-text40">
              For any inquiries, feel free to contact us. Your future in
              technology starts here.
            </span>
            <div className="home-form">
              <h1 className="home-text41">
                We&apos;re delighted to connect with you
              </h1>
              {/* <span className="home-text42 TextL">
                Complete this form and we will get back to you in 24 hours.
              </span> */}
              <span className="home-text43 TextXS">FULL NAME</span>
              <input
                type="text"
                name='name'
                placeholder="Full Name"
                className="home-textinput TextSM input"
              />
              <span className="home-text44 TextXS">EMAIL</span>
              <input
                type="text"
                name='email'
                placeholder="Email"
                className="home-textinput1 TextSM input"
              />
              <span className="home-text45 TextXS">MESSAGE</span>
              <textarea
                cols="80"
                rows="4"
                name='message'
                // disabled="true"
                placeholder="Type a message"
                className="home-textarea TextSM textarea"
              ></textarea>
              <div className="home-container27">
                <SecondaryButton
                  button="Send message"
                  rootClassName="secondary-button-root-class-name"
                ></SecondaryButton>
              </div>
            </div>
          </div>
          </form>
        </div>
        <img alt="image" src="/gray-vector.svg" className="home-image5" />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
