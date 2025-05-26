# Complaint Management System

A Web-based platform designed using React, MongoDB, and Node.js. This system helps to manage user complaints and track them efficiently.

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with server.js
- **Database**: MongoDB
- **Package Manager**: npm

## 📋 Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB** - [Download here](https://www.mongodb.com/try/download/community) or use MongoDB Atlas
- **Git** (optional) - [Download here](https://git-scm.com/)

## 📁 Project Structure

```
complaint-management-system/
├── backend/              # Backend server files
├── public/              # React public files
├── src/                 # React source code
├── .gitignore          # Git ignore file
├── README.md           # Project documentation
├── package.json        # Frontend dependencies
├── package-lock.json   # Lock file for dependencies
└── git                 # Git configuration
```

## 🚀 Step-by-Step Setup Instructions

### Step 1: Clone/Download the Project

```bash
# If using Git
git clone https://github.com/Lalitha216/complaint-management-system.git
cd complaint-management-system

# Or download the ZIP file and extract it
```

### Step 2: Install Frontend Dependencies

```bash
# In the root directory (where package.json is located)
npm install
```

This will install all the React dependencies listed in your `package.json` file.

### Step 3: Set Up MongoDB Database

#### Option A: Local MongoDB Installation

1. **Install MongoDB** on your system
2. **Start MongoDB service**:
   ```bash
   # On Windows
   net start MongoDB
   
   # On macOS
   brew services start mongodb/brew/mongodb-community
   
   # On Linux
   sudo systemctl start mongod
   ```

3. **Create the database** with required collections:
   - Open MongoDB Compass or use MongoDB shell
   - Create a new database called `complaint_management`
   - Create the following collections: `users`, `complaints`, `admin`, `status`

#### Required Database Collections:

**1. users** collection:
```json
{
  "_id": "ObjectId",
  "username": "String",
  "email": "String",
  "password": "String (hashed with bcrypt)",
  "__v": "Number (version key)"
}
```

**2. complaints** collection:
```json
{
  "_id": "ObjectId",
  "username": "String",
  "complaintText": "String",
  "date": "Date (complaint date)",
  "location": "String",
  "subLocation": "String",
  "roomNo": "String (can be empty)",
  "status": "String (Yet to Begin/In Progress/Resolved/Closed)",
  "createdAt": "Date",
  "updatedAt": "Date",
  "__v": "Number (version key)"
}
```

**3. admin** collection:
```json
{
  "_id": "ObjectId",
  "username": "String",
  "email": "String (should contain @admin.com)",
  "password": "String (hashed with bcrypt)",
  "__v": "Number (version key)"
}
```

**4. status** collection:
```json
{
  "_id": "ObjectId",
  "complaintId": "ObjectId (reference to complaints)",
  "complaintText": "String",
  "location": "String",
  "subLocation": "String",
  "status": "String (Yet to Begin/In Progress/Resolved/Closed)",
  "updatedAt": "Date",
  "__v": "Number (version key)"
}
```

#### Option B: MongoDB Atlas (Cloud)

1. **Sign up** at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. **Create a cluster**
3. **Get connection string** and update it in your backend configuration
4. **Create the same collections** as mentioned above

### Step 4: Configure Backend

1. **Navigate to backend folder**:
   ```bash
   cd backend
   ```

2. **Install backend dependencies** (if package.json exists in backend folder):
   ```bash
   npm install
   ```

3. **Create environment configuration** (create `.env` file in backend folder):
   ```env
   MONGODB_URI=mongodb://localhost:27017/complaint_management
   JWT_SECRET=your_secret_key_here
   PORT=5000
   NODE_ENV=development
   ```

### Step 5: Start the Backend Server

```bash
# Make sure you're in the backend directory
cd backend

# Start the server
node server.js
```

You should see a message like:
```
Server running on port 5000
MongoDB connected successfully
```

### Step 6: Start the Frontend Application

```bash
# Open a new terminal and navigate to the root directory
cd /path/to/your/project

# Start the React development server
npm start
```

The application will automatically open in your browser at [http://localhost:3000](http://localhost:3000).

## ✅ Verification Steps

### Check if everything is running:

1. **MongoDB**: Verify MongoDB is running and accessible
2. **Backend**: Visit [http://localhost:5000](http://localhost:5000) - should show API status
3. **Frontend**: Visit [http://localhost:3000](http://localhost:3000) - should show your React app

### Test the connection:
- Try registering a new user
- Submit a test complaint
- Check if data is being saved in MongoDB

## 🐛 Troubleshooting

### Common Issues:

**1. MongoDB Connection Error:**
```bash
# Check if MongoDB is running
# Windows: Task Manager > Services > MongoDB
# Mac/Linux: ps aux | grep mongod
```

**2. Port Already in Use:**
```bash
# Kill process on port 3000 (frontend)
npx kill-port 3000

# Kill process on port 5000 (backend)
npx kill-port 5000
```

**3. Package Installation Issues:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

**4. Backend Server Won't Start:**
- Check if `server.js` exists in the backend folder
- Verify all required dependencies are installed
- Check console for error messages

## 📱 Usage

### For Users:
1. **Register** a new account
2. **Login** with your credentials
3. **Submit complaints** using the complaint form
4. **Track status** of your complaints
5. **Provide feedback** once complaints are resolved

### For Administrators:
1. **Login** with admin credentials
2. **View all complaints** in the dashboard
3. **Update complaint status** (pending → in-progress → resolved → closed)
4. **Assign complaints** to team members
5. **Generate reports** and analytics

## 🔧 Available Scripts

### Frontend Scripts:
```bash
npm start          # Start development server
npm test           # Run tests
npm run build      # Build for production
npm run eject      # Eject from Create React App
```

### Backend Scripts:
```bash
node server.js     # Start backend server
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

---

**🎉 You're all set! Happy coding!**

For any issues, please check the troubleshooting section or create an issue in the repository.
