import React, { useState } from 'react';
import { GURDWARA_ADDRESS, GURDWARA_PHONE, MAPS_URL, formatPhoneNumber } from '../utils/accommodation.ts';

export const ContactSection: React.FC = () => {
  const phone = formatPhoneNumber(GURDWARA_PHONE);

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.phone.trim() || !formState.message.trim()) {
      setError('Please provide your name, phone number, and message.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormState({
      name: '',
      phone: '',
      email: '',
      subject: 'General Enquiry',
      message: '',
    });
  };

  return (
    <section id="contact" className="w-full bg-white border-b-2 border-black py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title Bar */}
        <div className="border-b-2 border-black pb-3 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-black bg-[#FF8800] px-2 py-0.5 inline-block mb-1">
            Get in Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-black m-0">
            Contact Us
          </h2>
          <p className="text-sm font-bold text-[#444444] mt-1 mb-0">
            We welcome devotees and visitors with respect and warmth.
          </p>
        </div>

        {/* Traditional Sikh Salutation Banner */}
        <div className="bg-[#FFFFEE] border-2 border-[#CC5500] p-4 text-center mb-8">
          <div className="text-xl sm:text-2xl font-black text-[#993D00] tracking-wide">
            Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh!
          </div>
          <div className="text-xs sm:text-sm font-bold text-black mt-1">
            ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖ਼ਾਲਸਾ, ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਹਿ!
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Official Contact Card */}
          <div className="space-y-6">
            <div className="border-2 border-black bg-[#F9F9F9] p-5">
              <h3 className="text-lg font-black text-black border-b border-black pb-2 mb-4">
                Gurdwara Sikh Sangat, Howrah
              </h3>

              <div className="space-y-4 text-sm text-black">
                <div>
                  <strong className="block text-xs uppercase text-[#666666]">Phone:</strong>
                  <a
                    href={phone.href}
                    className="text-lg font-black text-black underline hover:text-[#CC5500]"
                  >
                    {GURDWARA_PHONE}
                  </a>
                  <span className="text-xs text-[#555555] block mt-0.5">
                    (Click to dial directly from your mobile device)
                  </span>
                </div>

                <div>
                  <strong className="block text-xs uppercase text-[#666666]">Address:</strong>
                  <p className="font-bold text-black mt-0.5 mb-0">
                    {GURDWARA_ADDRESS}
                  </p>
                  <p className="text-xs text-[#555555] mt-1 mb-0">
                    Located near Howrah Junction Railway Station, West Bengal.
                  </p>
                </div>

                <div>
                  <strong className="block text-xs uppercase text-[#666666]">Timings:</strong>
                  <p className="text-xs font-bold text-black mt-0.5 mb-0">
                    Gurudwara open daily for Sangat, Nitnem prayers, Langar & Sarai inquiries.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#CCCCCC] flex flex-wrap gap-2">
                <a
                  href={phone.href}
                  className="btn-orange text-xs sm:text-sm uppercase font-bold"
                >
                  📞 Call Office Now
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs sm:text-sm uppercase font-bold"
                >
                  🗺️ View Map
                </a>
              </div>
            </div>

            {/* Note on Inquiries */}
            <div className="border border-black bg-white p-4 text-xs text-black">
              <h4 className="font-bold uppercase text-black mb-1">Accommodation & Seva Note</h4>
              <p className="m-0 leading-relaxed">
                For room bookings (₹150/day) or urgent train passenger arrival inquiries at Howrah Station, we recommend calling the Gurudwara office directly at <strong>033 3291 4166</strong> for immediate confirmation.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="border-2 border-black bg-white p-5">
            <h3 className="text-base font-bold text-black border-b-2 border-black pb-2 mb-4">
              Send an Enquiry / Message
            </h3>

            {submitted ? (
              <div className="bg-[#EEFFEE] border-2 border-[#008800] p-4 text-black">
                <div className="font-black text-lg text-[#006600] mb-2">
                  Message Sent Successfully!
                </div>
                <p className="text-xs sm:text-sm leading-relaxed mb-3">
                  Thank you for reaching out to <strong>Gurdwara Sikh Sangat, Howrah</strong>. Your message has been received.
                </p>
                <div className="bg-white border border-[#008800] p-3 text-xs mb-3">
                  <div><strong>From:</strong> {formState.name}</div>
                  <div><strong>Contact:</strong> {formState.phone}</div>
                  <div><strong>Subject:</strong> {formState.subject}</div>
                </div>
                <p className="text-xs font-bold text-[#333333] mb-4">
                  For immediate confirmation or same-day accommodation requests, please call directly at <strong>033 3291 4166</strong>.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-orange text-xs uppercase font-bold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-[#FFEEEE] border border-[#CC0000] p-2.5 text-xs text-[#990000] font-bold">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase text-black mb-1">
                    Your Name <span className="text-[#CC0000]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full border border-black p-2 text-sm text-black bg-white focus:outline-2 focus:outline-[#FF8800]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase text-black mb-1">
                      Phone Number <span className="text-[#CC0000]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="e.g. 033 3291 4166"
                      className="w-full border border-black p-2 text-sm text-black bg-white focus:outline-2 focus:outline-[#FF8800]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-black mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. devotee@example.com"
                      className="w-full border border-black p-2 text-sm text-black bg-white focus:outline-2 focus:outline-[#FF8800]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject-select" className="block text-xs font-bold uppercase text-black mb-1">
                    Subject / Purpose <span className="text-[#CC0000]">*</span>
                  </label>
                  <select
                    id="contact-subject-select"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full border border-black p-2 text-sm text-black bg-white focus:outline-2 focus:outline-[#FF8800]"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Accommodation / Room Booking">Accommodation / Room Booking (₹150/day)</option>
                    <option value="Langar & Seva Contribution">Langar & Seva Contribution</option>
                    <option value="Ardas / Prayers Request">Ardas / Prayers Request</option>
                    <option value="Gurpurab / Diwan Timings">Gurpurab / Diwan Timings</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-black mb-1">
                    Message <span className="text-[#CC0000]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Write your inquiry or message here..."
                    className="w-full border border-black p-2 text-sm text-black bg-white focus:outline-2 focus:outline-[#FF8800]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-orange w-full text-sm font-bold uppercase tracking-wider py-2.5"
                >
                  Send Message to Gurudwara
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
