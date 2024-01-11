import { useState } from "react";
import "./Component Styles/faq.css"
function FAQ() {
  const [expandedItem, setExpandedItem] = useState(null);

  function toggleAccordion(index) {
    setExpandedItem((prevItem) => (prevItem === index ? null : index));
  }

  return (
    <div className="container">
      <h2>Frequently Asked Questions</h2>
      <div className="accordion">
        {[1, 2, 3, 4, 5].map((index) => (
          <div className="accordion-item" key={index}>
            <button
              id={`accordion-button-${index}`}
              aria-expanded={expandedItem === index}
              onClick={() => toggleAccordion(index)}
            >
              <span className="accordion-title">
                {FAQData[index - 1].question}
              </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div
              className={`accordion-content ${
                expandedItem === index ? "visible" : ""
              }`}
            >
              <p>{FAQData[index - 1].answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const FAQData = [
  {
    question: "Why is the moon sometimes out during the day?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
  {
    question: "Why is the sky blue?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
  {
    question: "Will we ever discover aliens?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
  {
    question: "How much does the Earth weigh?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
  {
    question: "How do airplanes stay up?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
];

export default FAQ;
