const ContactForm = () => {
  return (
    <form
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
      "
    >
      <h3 className="mb-8 text-2xl font-bold">
        Send a Message
      </h3>

      <input
        type="text"
        placeholder="Your Name"
        className="
          mb-5
          w-full
          rounded-xl
          border
          border-white/10
          bg-[#0E1628]
          px-5
          py-4
          outline-none
          focus:border-orange-500
        "
      />

      <input
        type="email"
        placeholder="Your Email"
        className="
          mb-5
          w-full
          rounded-xl
          border
          border-white/10
          bg-[#0E1628]
          px-5
          py-4
          outline-none
          focus:border-orange-500
        "
      />

      <textarea
        rows={6}
        placeholder="Your Message"
        className="
          mb-6
          w-full
          rounded-xl
          border
          border-white/10
          bg-[#0E1628]
          px-5
          py-4
          outline-none
          resize-none
          focus:border-orange-500
        "
      />

      <button
        className="
          rounded-full
          bg-orange-500
          px-8
          py-4
          font-semibold
          transition-all
          hover:bg-orange-600
        "
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;