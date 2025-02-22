# 📝 JSONPlaceholder Blog - Next.js App

A **Next.js** application that fetches and displays blog posts from the **JSONPlaceholder API**.  
Optimized for **fast performance, SEO, and scalability**

---

## 🚀 Features
✅ **Fetches and displays posts** from the JSONPlaceholder API  
✅ **Reusable components for maintainability**  
✅ **Styled with Tailwind CSS for a clean UI**    

---

## 📂 Folder Structure
```
jsonplaceholder-app/
│── components/           # Reusable UI components
│   ├── PostList.js       # Component for listing posts
│   ├── PostItem.js       # Component for a single post
│── pages/                # Next.js pages (routes)
│   ├── post/             # Dynamic route for post details
│   │   ├── [id].js       # Post details page
│   ├── _app.js           # Global wrapper (for preloading fonts)
|   ├── _document.js      #
│   ├── index.js          # Homepage (list of posts)
│── styles/               # Global styles
│   ├── globals.css       # Tailwind CSS styles
│── .gitignore            # Ignore node_modules, .next, etc.
│── package.json          # Dependencies and scripts
│── tailwind.config.mjs   # Tailwind config
│── next.config.mjs       # Next.js config
│── README.md             # Project instructions
```

---

## 🛠 **Setup & Run Locally**
### **1️⃣ Clone the repository**
```sh
git clone 
cd mod-takehome
```

### **2️⃣ Install dependencies**
```sh
npm install
```

### **3️⃣ Start the development server**
```sh
npm run dev
```
- Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---