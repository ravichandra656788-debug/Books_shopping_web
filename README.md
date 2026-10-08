# Online Book Shopping Website

A simple online book shopping website developed using **ReactJS, Vite, JavaScript, HTML, CSS, React Router, and Supabase**.

The application allows users to browse books, search for books, view book details, compare books, manage a shopping cart, and proceed to checkout.

---

## 1. Problem Statement

Readers need an online platform where they can easily:

- Search for books
- Browse available books
- View book details
- Compare books
- Add books to a shopping cart
- Proceed to checkout
- Manage their profile

The project provides a simple web-based platform to support these requirements.

---

## 2. Project Objective

The main objective is to develop a user-friendly online book shopping platform using ReactJS.

The project focuses on:

- Simple and responsive interface
- Book browsing and searching
- Book details
- Book comparison
- Shopping cart
- Checkout
- User login and profile
- Database connectivity using Supabase

---

## 3. Technology Stack

| Technology | Purpose |
|---|---|
| ReactJS | Frontend development |
| Vite | React project setup |
| JavaScript | Application logic |
| JSX | React components |
| HTML | Page structure |
| CSS | Styling |
| React Router | Page navigation |
| Supabase | Database and backend services |
| Node.js | JavaScript runtime |
| npm | Package management |
| Git | Version control |
| GitHub | Code collaboration |
| Vercel | Deployment |

---

## 4. Project Structure

```text
book-shopping/
│
├── public/
│   └── images/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SearchBar.jsx
│   │   └── BookCard.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Books.jsx
│   │   ├── BookDetails.jsx
│   │   ├── Compare.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Login.jsx
│   │   └── Profile.jsx
│   │
│   ├── services/
│   │   └── supabase.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── index.html
├── package.json
└── README.md
```

---

## 5. Installation

### Prerequisites

- Node.js
- npm
- Git
- VS Code

Check the installation:

```bash
node --version
npm --version
git --version
```

---

## 6. Clone the Project

```bash
git clone <GitHub-Repository-URL>
```

```bash
cd book-shopping
```

Open the project in VS Code:

```bash
code .
```

---

## 7. Install Dependencies

```bash
npm install
```

Install React Router and Supabase if required:

```bash
npm install react-router-dom @supabase/supabase-js
```

---

## 8. Run the Project

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite, normally:

```text
http://localhost:5173
```

---

## 9. GitHub Workflow

Pull the latest project:

```bash
git pull origin main
```

After making changes:

```bash
git add .
git commit -m "Updated project"
git push origin main
```

---

## 10. Vercel Deployment

Build the project:

```bash
npm run build
```

The production output directory is:

```text
dist
```

### Deployment Steps

1. Push the latest code to GitHub.
2. Import the repository into Vercel.
3. Use the Vite build settings.
4. Add required environment variables.
5. Deploy the project.

---

## 11. Live Website

https://books-shopping-web-wd3v.vercel.app/

---

## 12. Testing Checklist

- [ ] Home page works
- [ ] Navigation works
- [ ] Books page works
- [ ] Search works
- [ ] Book details page works
- [ ] Compare page works
- [ ] Cart works
- [ ] Checkout page works
- [ ] Login page works
- [ ] Profile page works
- [ ] Supabase connection works
- [ ] Website works after deployment

---

## 13. Common Commands

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Create production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Pull latest code

```bash
git pull origin main
```

### Push changes

```bash
git add .
git commit -m "Updated project"
git push origin main
```

---

## 14. Conclusion

The **Online Book Shopping Website** provides a simple platform for users to browse, search, compare, and manage books through a ReactJS web application.

The project uses ReactJS and Vite for the frontend, React Router for navigation, Supabase for database services, GitHub for collaboration, and Vercel for deployment.