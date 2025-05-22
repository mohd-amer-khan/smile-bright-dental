const FAQ = () => (
  <div className="container my-5">
    <h2 className="text-center mb-4">Frequently Asked Questions</h2>
    <div className="accordion" id="faqAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
            What are your office hours?
          </button>
        </h2>
        <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
          <div className="accordion-body">Monday to Friday, 9 AM - 5 PM.</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
            Do you accept insurance?
          </button>
        </h2>
        <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div className="accordion-body">Yes, we accept most major insurance plans.</div>
        </div>
      </div>
    </div>
  </div>
);

export default FAQ;