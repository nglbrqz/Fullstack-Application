import { useState } from "react";
import "./Component Styles/faq.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="faq-titles">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="faq-container">
        {FAQData.map((faq, index) => (
          <div
            className={`faq ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <h3 className="faq-title">{faq.question}</h3>
            <p className="faq-text">{faq.answer}</p>
            <button
              className="faq-toggle"
              onClick={() => toggleAccordion(index)}
            >
              <svg
                className="chevron w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 8"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                />
              </svg>
              <svg
                className="close w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

const FAQData = [
  {
    question: "How many services do you have??",
    answer:
      "We have 10:30 am, 1:30 pm, 3:30 pm, and 5:30 pm services on Sundays. We also have Midweek services on Wednesdays every 6:30 pm and Youth services on Saturdays every 4:30 pm.",
  },
  {
    question: "Who are your Pastors?",
    answer:
      "Our Lead Pastor is Pastor James Magat, and our Co-lead Pastor is Pastora Grace Magat. We also invite speakers and pastors from other New Life branches to share the Word.",
  },
  {
    question: "Where is your church located?",
    answer:
      "Our church is located on the 3rd Level of Southwoods Mall in Southwoods City Binan, Laguna.",
  },
  {
    question: "How can I get involved in the church community?",
    answer:
      "There are various ways to get involved, such as joining a connect groups, volunteering, or attending church events. Feel free to reach out to our welcoming community for more details.",
  },
  {
    question: "How can I stay updated on church events and announcements?",
    answer:
      "Stay connected by following our social media channels or checking our website regularly for the latest updates and announcements.",
  },
];

export default FAQ;
