# 📝 Task Management Application

A modern and responsive task management application that allows users to add, edit, delete, and reorder tasks using a drag-and-drop interface. Tasks are categorized into **To-Do, In Progress, and Done**, with real-time synchronization to maintain persistence.

## 🚀 Live Demo  
🔗 [Live Application](https://task-management-scic.netlify.app)  

## 📂 Table of Contents  
- [Features](#-features)  
- [Technologies Used](#-technologies-used)  
- [Installation](#-installation)  
- [Backend API Endpoints](#-backend-api-endpoints)  
- [Dependencies](#-dependencies)  
- [Folder Structure](#-folder-structure)  
- [Future Enhancements](#-future-enhancements)  
- [Contributors](#-contributors)  
- [License](#-license)  

---

## ✅ Features  
- **User Authentication**: Google Sign-in via Firebase.  
- **Task Management**: Add, edit, delete, and reorder tasks in different categories.  
- **Drag & Drop**: Seamlessly move tasks across categories and reorder within them.  
- **Real-Time Synchronization**: Uses **MongoDB Change Streams/WebSockets** for instant updates.  
- **Modern UI**: Clean, minimalistic design with a responsive layout.  
- **Persistent Data**: All changes are saved instantly in the database.  
- **Mobile-Friendly**: Works on both desktop and mobile devices.  

---

## 🛠 Technologies Used  
### **Frontend:**  
- React (Vite.js)  
- Firebase Authentication  
- React Beautiful DnD (or similar library)  
- Tailwind CSS / Styled Components  

### **Backend:**  
- Node.js with Express.js  
- MongoDB (with Mongoose ORM)  
- WebSockets / Change Streams for real-time updates  

---

## ⚙️ Installation  

### Clone the Repository  
```sh
git clone https://github.com/yourusername/task-manager.git  
cd task-manager
