import React, { useEffect } from "react";
import "../Pages/Page Styles/CoreValues.css";

const CoreValues = () => {
    useEffect(() => {
        let isDragging = false;
        let initialX = 0;
    
        const scrollContainer = document.getElementById("scroll-container");
    
        const handleMouseMove = (e) => {
          if (isDragging) {
            const deltaX = initialX - e.clientX; // Change the sign to go in the opposite direction
            scrollContainer.scrollLeft += deltaX;
            initialX = e.clientX;
          }
        };
    
        const handleMouseUp = () => {
          isDragging = false;
          document.removeEventListener("mousemove", handleMouseMove);
        };
    
        scrollContainer.addEventListener("mousedown", (e) => {
          isDragging = true;
          initialX = e.clientX;
          document.addEventListener("mousemove", handleMouseMove);
          document.addEventListener("mouseup", handleMouseUp);
        });
    
        // Cleanup event listeners on component unmount
        return () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
        };
      }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <>
      <div className="hero-container-core-values-container">
        <div className="titlepage">OUR CORE <br /> VALUES</div>
        <div className="overlap-title">OUR <br />VALUES</div>
        <br />
        <div className="description">Hold and drag to scroll</div>
        <br />
        <div className="scroll-container" id="scroll-container">
            <div className="scroll-item">
            <div className="core-number">01</div>
            <div>
                <div className="core-title">LOYALTY</div>
                <div className="core-description">Faithfulness</div>
            </div>
            </div>

            <div className="scroll-item">
            <div className="core-number">02</div>
            <div>
                <div className="core-title">INTEGRITY</div>
                <div className="core-description">Initiaitive & Innovation</div>
            </div>
            </div>

            <div className="scroll-item">
            <div className="core-number">03</div>
            <div>
                <div className="core-title">VIBRANT</div>
                <div className="core-description">Passionate & Dynamic</div>
            </div>
            </div>

            <div className="scroll-item">
            <div className="core-number">04</div>
            <div>
                <div className="core-title">EXELLENCE</div>
            </div>
            </div>

            <div className="scroll-item">
            <div className="core-number">05</div>
            <div>
                <div className="core-title">SERVANTHOOD</div>
                <div className="core-description">Synergy (Unity) & Stewardship</div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default CoreValues;