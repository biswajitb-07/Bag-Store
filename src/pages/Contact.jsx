import React from 'react'
import contact from "../../api/contact.json";
import { ScrollToTop } from '../component/Layout/ScrollToTop.jsx';

export const Contact = () => {
  return (
    <div className='bg-[#F0F1F3]'>
      <ScrollToTop />
      <div className='pt-8 max-w-[78rem] mx-auto px-6 py-10'>
        <h1 className='text-2xl md:text-4xl font-black grid place-items-center'>CONTACT US</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center pt-16">
          {contact.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-5">
              <div className="flex items-center justify-center w-16 h-16 bg-[#FFCD05] rounded-full">
                <img src={item.icon} alt="" className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold">{item.type}</h2>

              <div className="text-sm text-gray-600 text-center">
                {item.details.map((detail, i) => (
                  <p key={i} className='text-lg text-center'>{detail}</p>
                ))}
              </div>

            </div>
          ))}
        </div>

        <div className="flex flex-col gap-10 md:flex-row pt-[5rem]">
          {/* Left Side: Google Map */}
          <div className="flex-1 order-2 md:order-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193559.44137061434!2d120.97956705732403!3d14.599512362196496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7b489dc4e9b%3A0x52bdfc6d3e09fa7!2sQuezon%20City%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sph!4v1697571250283!5m2!1sen!2sph"
              width="100%"
              height="500px"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right Side: Contact Form */}
          <div className="flex-1 flex flex-col order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">We'd love To Hear From You!</h2>
            <form className="space-y-4">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700"
                >
                  First & Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Your Email"
                  required
                />
              </div>

              {/* Subject Input */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-lg font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Subject"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700"
                >
                  Comment or Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
