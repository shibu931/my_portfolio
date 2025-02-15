import { Label } from "./ui/label";

const ContactForm = () => {
  return (
        <div className="bg-neutral-100 dark:bg-slate-700 shadow-lg max-w-xl p-6 rounded-md">
          <form id="contactForm" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-base font-medium text-neutral-700 dark:text-neutral-200 mb-2" >Name <span className="text-red-600 text-xl">&#42;</span></label>
                <input type="text" id="name" name="name" required className="input-field" placeholder="Your Name"/>
              </div>
              <div>
                <label className="block text-base font-medium text-neutral-700 dark:text-neutral-200 mb-2" >Email< span className="text-red-600 text-xl">&#42;</span></label>
                <input type="email" id="email" name="email" required className="input-field" placeholder="your@email.com"/>
              </div>
            </div>

            <div>
              <label className="block text-base font-medium text-neutral-700 dark:text-neutral-200 mb-2" >Subject <span className="text-red-600 text-xl">&#42;</span></label>
              <input type="text" id="subject" name="subject" required className="input-field" placeholder="How can we help?"/>
            </div>

            <div>
              <label className="block text-base font-medium text-neutral-700 dark:text-neutral-200 mb-2" >Message <span className="text-red-600 text-xl">&#42;</span></label>
              <textarea id="message" name="message" rows={4} required className="input-field" placeholder="Your message..."></textarea>
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all duration-300 transform hover:scale-[1.02]">
              Send Message
              <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </button>
          </form>
        </div>
  );
};

export default ContactForm;
