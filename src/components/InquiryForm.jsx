import React, { useState } from "react";

function InquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "Business website",
    budget: "Not sure yet",
    details: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = `Project inquiry from ${form.name || "your website"}`;
    const body =
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Project type: ${form.projectType}\n` +
      `Budget range: ${form.budget}\n\n` +
      `Details:\n${form.details}`;
    window.location.href = `mailto:briannamclaurinn@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
      </div>
      <div className="form-row form-row-split">
        <div>
          <label htmlFor="projectType">Project type</label>
          <select id="projectType" name="projectType" value={form.projectType} onChange={handleChange}>
            <option>Business website</option>
            <option>Web app</option>
            <option>E-commerce</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget">Budget range</label>
          <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
            <option>Not sure yet</option>
            <option>Under $500</option>
            <option>$500 – $1,500</option>
            <option>$1,500+</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <label htmlFor="details">What are you looking for?</label>
        <textarea
          id="details"
          name="details"
          rows={4}
          required
          value={form.details}
          onChange={handleChange}
          placeholder="Tell me a bit about your business and what you need."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Send Inquiry
      </button>
      {sent && (
        <p className="form-note">
          Opening your email client — send it over and I'll follow up with a scope and pricing.
        </p>
      )}
    </form>
  );
}

export default InquiryForm;