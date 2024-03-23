import React from 'react'
import image1 from '../images/language.jpg';
import image2 from '../images/language.jpg';
import image3 from '../images/language.jpg';

export default function AboutTeam() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '6rem' }}>
  <div className="card" aria-hidden="true" style={{ width: '18rem', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', boxShadow: '0.5rem 0 1.2rem #052e58', transition: 'all 0.4s', margin: '1rem' }}>
    <img src={image1} className="card-img-top" style={{height: '12rem'}} />
    <div className="card-body">
      <h5 className="card-title placeholder-glow">
        <span className="col-6">Akanksha Mishra</span>
      </h5>
      <p className="card-text">
        <span>Tech prodigy, driving innovation at TextVerse with expertise in data analytics and machine learning.</span>
        {/* <span className="placeholder col-7"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-6"></span>
        <span className="placeholder col-8"></span> */}
      </p>
      <a href="https://github.com/aka-023" target='_blank' className="btn btn-primary col-6">Git Repo</a>
    </div>
  </div>
  <div className="card" aria-hidden="true" style={{ width: '18rem', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', boxShadow: '0.5rem 0 1.2rem #052e58', transition: 'all 0.4s', margin: '1rem' }}>
    <img src={image2} className="card-img-top" style={{height: '12rem'}} />
    <div className="card-body">
      <h5 className="card-title placeholder-glow">
        <span className="col-6">Tanisha</span>
      </h5>
      {/* <p className="card-text placeholder-glow"> */}
      <p className="card-text">
          <span> Language aficionado, spearheading TextVerse's Language Translator service with precision.</span>
        {/* <span className="placeholder col-7"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-6"></span>
        <span className="placeholder col-8"></span> */}
      </p>
      <a href="https://github.com/aka-023" target='_blank' className="btn btn-primary col-6">Git Repo</a>
    </div>
  </div>
  <div className="card" aria-hidden="true" style={{ width: '18rem', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', boxShadow: '0.5rem 0 1.2rem #052e58', transition: 'all 0.4s', margin: '1rem' }}>
    <img src={image3} className="card-img-top" style={{height: '12rem'}} />
    <div className="card-body">
      <h5 className="card-title placeholder-glow">
        <span className="col-6">Thanusha</span>
      </h5>
      <p className="card-text">
      {/* <p className="card-text placeholder-glow"> */}
      <span>Visionary developer, architecting TextVerse's platforms for seamless user experiences and global impact.</span>
        {/* <span className="placeholder col-7"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-6"></span>
        <span className="placeholder col-8"></span> */}
      </p>
      <a href="https://github.com/aka-023" target='_blank' className="btn btn-primary col-6">Git Repo</a>
    </div>
  </div>
</div>

  )
}
