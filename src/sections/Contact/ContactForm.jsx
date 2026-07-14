const ContactForm = () => {
  return (
    <form
      className="
        rounded-2xl
        sm:rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        sm:p-8
        backdrop-blur-xl
      "
      aria-label="Contact form"
    >
      <h3 className="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold">
        Send a Message
      </h3>

      <div className="mb-4 sm:mb-5">
        <label htmlFor="name" className="sr-only">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          required
          className="
            w-full
            rounded-lg
            sm:rounded-xl
            border
            border-white/10
            bg-[#0E1628]
            px-4
            sm:px-5
            py-3
            sm:py-4
            text-sm
            sm:text-base
            outline-none
            transition-colors
            focus:border-orange-500
            focus:ring-2
            focus:ring-orange-500/20
            placeholder:text-slate-500
          "
          aria-required="true"
        />
      </div>

      <div className="mb-4 sm:mb-5">
        <label htmlFor="email" className="sr-only">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          required
          className="
            w-full
            rounded-lg
            sm:rounded-xl
            border
            border-white/10
            bg-[#0E1628]
            px-4
            sm:px-5
            py-3
            sm:py-4
            text-sm
            sm:text-base
            outline-none
            transition-colors
            focus:border-orange-500
            focus:ring-2
            focus:ring-orange-500/20
            placeholder:text-slate-500
          "
          aria-required="true"
        />
      </div>

      <div className="mb-6 sm:mb-6">
        <label htmlFor="message" className="sr-only">
          Your Message
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder="Your Message"
          required
          className="
            w-full
            rounded-lg
            sm:rounded-xl
            border
            border-white/10
            bg-[#0E1628]
            px-4
            sm:px-5
            py-3
            sm:py-4
            text-sm
            sm:text-base
            outline-none
            resize-none
            transition-colors
            focus:border-orange-500
            focus:ring-2
            focus:ring-orange-500/20
            placeholder:text-slate-500
          "
          aria-required="true"
        />
      </div>

      <button
        type="submit"
        className="
          w-full
          sm:w-auto
          rounded-full
          bg-orange-500
          px-8
          py-3
          sm:py-4
          text-sm
          sm:text-base
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-orange-600
          hover:scale-105
          focus:outline-none
          focus:ring-2
          focus:ring-orange-500
          focus:ring-offset-2
          focus:ring-offset-transparent
          active:scale-95
        "
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;