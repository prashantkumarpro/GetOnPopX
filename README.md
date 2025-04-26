
---

# 🚀 GetOnPopX

GetOnPopX is a modern **React + Vite** project designed to create a clean, responsive, and accessible **account management** system — including **Login**, **Signup**, and **Profile** pages.  
It uses **TailwindCSS** for styling, **React Router** for routing, and **LocalStorage** for simple state persistence.

---

## 🧩 Folder Structure

```
GETONPOPX/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── BottomHeader.jsx
│   │   ├── CreateAccount.jsx
│   │   ├── FormInput.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Profile.jsx
│   │   └── ProtectedRoute.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── Root.jsx
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## ✨ Features

- ⚡ Built with **Vite** for ultra-fast performance
- 🎨 **TailwindCSS** for modern and clean UI
- 🔐 **Protected Routes** (only logged-in users can access profile page)
- 💾 **LocalStorage** for saving and persisting user form data
- 🔗 **React Router DOM** for seamless navigation
- ♿ Accessible form elements using `<fieldset>` and `<legend>`
- 🧹 Clean, reusable component structure
- 📱 Fully responsive mobile-first design

---

## 📥 Installation

1. **Clone the repository**:

```bash
git clone https://github.com/prashantkumarpro/GetOnPopX.git
```

2. **Navigate into the folder**:

```bash
cd GETONPOPX
```

3. **Install dependencies**:

```bash
npm install
# or
yarn install
```

4. **Start the development server**:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

---

## 🔧 Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## 📸 Screenshots

| Create Account | Login Page | Profile Page |
| :------------: | :---------: | :----------: |
| ![Signup Screenshot](./screenshots/signup.png) | ![Login Screenshot](./screenshots/login.png) | ![Profile Screenshot](./screenshots/profile.png) |

> *(Make sure to add screenshots inside a `screenshots/` folder in your repo)*

---

## 🚀 How It Works

- **Signup Page**: Users create an account; the form data is validated and saved to `localStorage`.
- **Login Page**: Checks credentials against saved data.
- **Protected Routes**: If a user is not logged in, they cannot access protected pages like `/profile`.
- **Profile Page**: Displays user information saved from localStorage.

---

## 📚 Future Plans

- Form validation using `React Hook Form` or `Formik`
- Password encryption (instead of plain text localStorage)
- Error handling and toast notifications
- Backend integration with APIs
- Deployment (Vercel, Netlify)

---

## 🤝 Contributing

Contributions are welcome! Please open an issue first to discuss what you would like to change.

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

**Made with 💜 by [Your Name]**

---

# 🎉 That's it!

---

