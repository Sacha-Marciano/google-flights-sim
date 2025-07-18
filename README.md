# Google Flights Simulator ✈️

A modern, responsive web application that simulates the Google Flights experience. Search, compare, and view details for flights worldwide, with a clean UI inspired by Google, built using React, Vite, Material UI, Styled Components, and Tailwind CSS.

---

## 🚀 Features

- **Flight Search:**
  - Search for round-trip or one-way flights between any two airports.
  - Filter by number of passengers, cabin class (Economy, Premium, Business), and sort by best, fastest, or price.
  - Autocomplete for airport selection with live suggestions.
- **Flight Results:**
  - View a list of available flights with price, duration, stops, and codes.
  - Click any flight to see detailed segment and layover information, including times and flight numbers.
- **Booking Simulation:**
  - Simulate booking a flight (no real purchase).
- **Dark/Light Mode:**
  - Toggle between light and dark themes. Theme preference is saved.
- **Responsive Design:**
  - Fully responsive and mobile-friendly.
- **Hotel Search (Coming Soon):**
  - Placeholder for future hotel search functionality.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, React Router 7, Vite
- **UI:** Material UI (MUI), Styled Components, Emotion, Tailwind CSS
- **State Management:** React Context API, Hooks
- **API:** [Sky-Scrapper API on RapidAPI](https://rapidapi.com/skyscanner/api/sky-scrapper)
- **Build & Tooling:** Vite, ESLint, PostCSS, Tailwind, Autoprefixer

---

## 📦 Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/google-flights-sim.git
   cd google-flights-sim
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173/google-flights-sim](http://localhost:5173/google-flights-sim) by default.

---

## 🌐 Deployment

- **Build for production:**
  ```sh
  npm run build
  ```
- **Preview production build:**
  ```sh
  npm run preview
  ```
- **Deploy to GitHub Pages:**
  ```sh
  npm run deploy
  ```
  (Make sure to set the correct `base` in `vite.config.js` for GitHub Pages.)

---

## 🔑 API Key & Configuration

- This project uses the [Sky-Scrapper API](https://rapidapi.com/skyscanner/api/sky-scrapper) via RapidAPI.
- **Note:** The API key is currently hardcoded in `src/api/rapidapi.js` for demonstration purposes. For production or public use, you should:
  1. [Sign up for your own RapidAPI key](https://rapidapi.com/).
  2. Replace the value of `x-rapidapi-key` in `src/api/rapidapi.js` with your own key.
  3. (Optional) Move the key to an environment variable for security.

---

## 🖼️ Branding & Assets

- Favicon: `public/airplane.svg` (from [SVG Repo](https://www.svgrepo.com/))
- Banner: `src/assets/banner.png`

---

## 👨‍💻 Credits

- Developed by **Sacha M. Marciano** for **Spotter**.
- UI inspired by Google Flights.
- Powered by [Sky-Scrapper API](https://rapidapi.com/skyscanner/api/sky-scrapper).

---

## 📄 License

This project is for educational and demonstration purposes. Please check API provider terms for commercial use.

---

## 📝 Notes

- Hotel search is a placeholder and not yet implemented.
- For any issues or suggestions, please open an issue or pull request.
