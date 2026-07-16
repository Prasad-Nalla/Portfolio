import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials are missing in environment variables.");
      setStatus("error");
      setIsSending(false);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Prasad Nalla",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send message via EmailJS:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
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

      {status === "success" && (
        <div className="mb-5 rounded-lg bg-green-500/10 p-4 text-sm text-green-400 border border-green-500/20">
          Message sent successfully! I'll get back to you soon.
        </div>
      )}

      {status === "error" && (
        <div className="mb-5 rounded-lg bg-red-500/10 p-4 text-sm text-red-400 border border-red-500/20">
          Failed to send the message. Please check the setup or try again.
        </div>
      )}

      <div className="mb-4 sm:mb-5">
        <label htmlFor="name" className="sr-only">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          required
          disabled={isSending}
          value={formData.name}
          onChange={handleChange}
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
            disabled:opacity-50
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
          disabled={isSending}
          value={formData.email}
          onChange={handleChange}
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
            disabled:opacity-50
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
          disabled={isSending}
          value={formData.message}
          onChange={handleChange}
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
            disabled:opacity-50
          "
          aria-required="true"
        />
      </div>

      <button
        type="submit"
        disabled={isSending}
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
          disabled:opacity-50
          disabled:cursor-not-allowed
          disabled:hover:scale-100
          disabled:hover:bg-orange-500
        "
      >
        {isSending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;