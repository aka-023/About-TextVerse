import React from 'react'

export default function About() {
  return (
    <div style={{border: '2px solid black', margin: '4rem'}}>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Our Mission
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Revolutionizing Text-Based Solutions for a Connected World:</strong>
        TextVerse is committed to revolutionizing text-based solutions globally. With cutting-edge technology and unwavering commitment, we empower businesses with unparalleled innovation, driving transformative change in how we interact with textual data. Our mission extends beyond borders, shaping a more connected world where the power of text enhances communication and drives progress across diverse industries and communities.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Our Commitment to Excellence
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Delivering Top-Notch Solutions Globally:</strong>
        At TextVerse, our commitment to excellence knows no bounds. We strive to deliver top-notch text-based solutions globally, surpassing expectations with rigorous research, unparalleled expertise, and unwavering dedication. Our goal is to make a meaningful impact and exceed the needs of our clients worldwide.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Innovation in Action
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Transforming Industries Across Continents and Borders:</strong>
        Explore how TextVerse's innovative technologies are reshaping industries across continents. With groundbreaking solutions, we're paving the way for a more connected and efficient future, redefining communication and driving transformative change on a global scale. Join us in shaping tomorrow's world today.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
