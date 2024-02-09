import React from 'react';
import './Css/Studio.css';

function Studio() {
  const saImg = "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e2_Studio%2520Image-p-500.jpg";
  return (
    <>
      <div className='studio-header'>
        <div className='studio-content'>
          <p>turning</p>
          <p>ideas into</p>
          <p>reality</p>
        </div>
        <div className="glow-effect1">
          <div className="first"></div>
          <div className="second"></div>
        </div>
        <div className='studio-about'>
          <div className='sa-content'>
            <div className='imgBox'>
              <img src={saImg} alt="" />
            </div>
            <div className='imgContent'>
              <h6>We love creating experiences from idea to install, but are also comfortable jumping into a project at any point in the process, from Creative, to Design, to Project Management and Implementation.</h6>
            </div>
          </div>
        </div>
      </div>



      <div className='creation'>
        <h5>Create</h5>
        <div className='creation-content'>
          <div className='cc-left'>
            <p>Crafting the concepts and experiences. Connecting the dots and amplifying the story.</p>
          </div>
          <div className='cc-right'>
            <p>Strategy & Ideation</p>
            <p>Concept Development</p>
            <p>Environmental Design</p>
            <p>Graphic Design</p>
            <p>Visual Merchandising</p>
            <p>3D Renderings</p>
            <p>Consumer Experience</p>

          </div>
        </div>

      </div>
      <div className='creation2'>
        <h5>produce</h5>
        <div className='creation-content2'>
          <div className='cc-left'>
            <p>Production, strategy, partnership, and materials. The end point is more than the sum of its parts.</p>
          </div>
          <div className='cc-right'>
            <p>Project Management</p>
            <p>Budget Ownership</p>
            <p>Technical Drawings</p>
            <p>Digital & Technology Integration</p>
            <p>Custom Fabrication</p>
            <p>Graphics Production</p>
            <p>Material Samples & Prototyping</p>

          </div>
        </div>

      </div>
      <div className='creation3'>
        <h5>Implement</h5>
        <div className='creation-content3'>
          <div className='cc-left'>
            <p>Onsite guidance, installation and oversight to take each project through to the finish line.</p>
          </div>
          <div className='cc-right'>
            <p>Onsite Project Management</p>
            <p>Installation Oversight</p>
            <p>Sustainability Consulting</p>
            <p>Site Survey/Permitting</p>
            <p>Onsite Logistics</p>
            <p>Photography & Videography</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Studio
