import Navbar from "../../components/navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 md:p-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
          Contact Me
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xjgwwndk"
            method="POST"
            className="grid grid-cols-1 gap-6"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Write your message..."
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition-colors w-full"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Optional Contact Info */}
          <div className="mt-8 text-center text-gray-700">
            <p>
              Email:{" "}
              <a
                href="mailto:pranavsthapit35@gmail.com"
                className="text-blue-600 hover:underline"
              >
                pranavsthapit35@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+9779860325050"
                className="text-blue-600 hover:underline"
              >
                +977-9860325050
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
