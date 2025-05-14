# 📚 Book Management API

A RESTful API for managing a collection of books, built with **Node.js**, **Express**, and **TypeScript**. It supports CRUD operations and CSV-based bulk import of books.

---

## ✨ Features

- Full **CRUD** functionality (Create, Read, Update, Delete)
- Unique **UUID-based identifiers** for each book
- **CSV import** functionality using Multer
- Centralized **error handling middleware**
- **Request logging** using Morgan
- Built with **TypeScript** for type safety
- **Environment configuration** via dotenv

---

## 🛠️ Tech Stack

| Category     | Technology          |
|--------------|---------------------|
| Runtime      | Node.js             |
| Language     | TypeScript          |
| Framework    | Express             |
| File Uploads | Multer              |
| Logging      | Morgan              |
| UUID         | uuid                |
| Testing      | Jest, Supertest     |

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### 📥 Installation

```bash
  git clone https://github.com/Dante-eraa/book-management-api
```

Go to the project directory

```bash
  cd book-management-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
## 📘 Postman Collection

You can use Postman to test the Book Management API.

### 🧾 Import Collection

1. Open **Postman**
2. Click **Import**
3. Select the file:  
   ```bash
   postman/book-management.postman_collection.json 
   ```
   ## 🌐 API Endpoints

### Method: `GET /books`
- **Description**: Get all books
- **Response**:
  - Status: `200 OK`
  - Body: List of books (empty array if no books are present)

### Method: `GET /books/:id`
- **Description**: Get a book by ID
- **Parameters**: 
  - `id` (UUID): ID of the book
- **Response**:
  - Status: `200 OK`
  - Body: Book object
  - Example: 
    ```json
    {
      "id": "abb77649-898b-4e89-a77b-d511d3bca5b1",
      "title": "Test Book",
      "author": "Test Author",
      "publishedYear": 2020
    }
    ```

### Method: `POST /books`
- **Description**: Create a new book
- **Body**:
  - Content-Type: `application/json`
  - Example:
    ```json
    {
      "title": "Clean Code",
      "author": "Robert C. Martin",
      "publishedYear": 2008
    }
    ```
- **Response**:
  - Status: `201 Created`
  - Body: Created book object

### Method: `PUT /books/:id`
- **Description**: Update a book by ID
- **Parameters**:
  - `id` (UUID): ID of the book
- **Body**:
  - Content-Type: `application/json`
  - Example:
    ```json
    {
      "title": "Updated Book Title",
      "author": "Updated Author",
      "publishedYear": 2021
    }
    ```
- **Response**:
  - Status: `200 OK`
  - Body: Updated book object

### Method: `DELETE /books/:id`
- **Description**: Delete a book by ID
- **Parameters**:
  - `id` (UUID): ID of the book
- **Response**:
  - Status: `200 OK`
  - Body: Confirmation message
    ```json
    {
      "message": "Book deleted successfully"
    }
    ```

### Method: `POST /books/import`
- **Description**: Bulk import books via CSV
- **Body**:
  - Content-Type: `multipart/form-data`
  - Attach a CSV file with the following columns: `title`, `author`, `publishedYear`
- **Response**:
  - Status: `200 OK`
  - Body: Success message
    ```json
    {
      "message": "Books imported successfully"
    }
    ```

# Hi, I'm Hariharan! 👋
i am Batman 🤫

## 🚀 About Me
- 🌱 I’m currently learning **MERN Stack**

- 👨‍💻 All of my projects are available at [https://hacktechno.ccbp.tech/](https://hacktechno.ccbp.tech/)

- 📫 How to reach me **hariharansundarrajan123@gmail.com**


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://hacktechno.ccbp.tech/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/hacktechno)


## Authors

- [@Dante-eraa](https://github.com/Dante-eraa)


## Tech Stack

**Client:** React, Redux, TailwindCSS, ShadeCN

**Server:** Firebase, Cleark

## 🛠 Skills
Javascript, Typescript, HTML, CSS, Python, React, MongoDB, SQL...

