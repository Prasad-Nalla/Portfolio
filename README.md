# 💻 Prasad Nalla | Professional Portfolio

Welcome to my portfolio! This website showcases my projects, skills, academic background, cybersecurity work (TryHackMe), and developers' profiles (LeetCode, GFG, GitHub, etc.) with real-time statistics integration.

Built with a premium dark-themed design system, smooth animations, and a fully mobile-responsive layout.

---

## 🚀 Key Features

* **Fully Responsive UI:** Adapts beautifully to mobile, tablet, and desktop screens.
* **Tech Arsenal Section:** Visual categorization and filtering of languages, frameworks, databases, and development tools.
* **Interactive Project Browser:** Custom mock browser display featuring screenshots and links for project verification.
* **Developer Presence Profiles:** Links to competitive coding accounts, including live stats badges from LeetCode and TryHackMe.
* **Virtual Internship Section:** Dedicated cards highlighting experience at EduSkills and Palo Alto Networks, complete with credential verification links.
* **EmailJS Integrated Contact Form:** Fully functional client-side email delivery system directly to inbox.

---

## 🛠️ Built With

* **Core Framework:** [React 19](https://react.dev/) + [Vite](https://vite.dev/)
* **Styling & Responsive Design:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
* **Contact Service:** [@emailjs/browser](https://www.emailjs.com/)

---

## 💻 Local Setup & Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Prasad-Nalla/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` or `.env.local` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📦 Deployment Suggestions

This project is a static React application ready to be hosted on Vercel or Netlify:
* Import your GitHub repository.
* Set the build command to `npm run build` and publish directory to `dist`.
* Add your `VITE_EMAILJS_` variables under the environment settings.
