# BookBestie

## [See the App!](https://book-bestie.vercel.app/)

![App Logo](./src/assets/logo.png)

---

## Description

BookBestie is a book discovery and review web application that allows users to browse books, explore genres, and view detailed information about individual titles.

#### [Client Repo here](https://github.com/maylis-dev/BookBestie)
#### [Server Repo here](https://github.com/maylis-dev/bookserver)

---

## Technologies, Libraries & APIs used

- HTML5
- CSS3
- JavaScript (ES6+)
- React
- Vite
- React Router DOM
- Axios
- Node.js
- JSON Server
- npm
- Vercel (deployment)

---

## Backlog Functionalities

- User authentication (signup/login/logout)
- User profile page
- Book rating system
- Add, edit, and delete reviews
- Search bar with filters
- Favorites / Wishlist feature
- Pagination
- Dark mode
- Replace JSON Server with Express + real database
- JWT authentication
- Protected routes

---

# Client Structure

## User Stories

- **404** - As a user I want to see a 404 page when I navigate to a page that doesn’t exist so that I understand the page is invalid.
- **500** - As a user I want to see an error page if something goes wrong so that I know it is not my fault.
- **homepage** - As a user I want to access the homepage so that I understand what BookBestie is about.
- **browse books** - As a user I want to see a list of books so that I can explore available titles.
- **book details** - As a user I want to see detailed information about a specific book so that I can learn more about it.
- **genre filter** - As a user I want to filter books by genre so that I can easily find books matching my interests.
- **navigation** - As a user I want to navigate easily between pages using a navbar.
- **future auth** - As a user I want to create an account and log in so that I can manage my reviews (future feature).

---

## Client Routes

## React Router Routes (React App)

| Path              | Page         | Components        | Behavior                                              |
| ----------------- | ------------ | ----------------- | ----------------------------------------------------- |
| `/`               | Home         | Navbar, Footer    | Displays homepage with featured books                 |
| `/books`          | BookList     | BookCard          | Shows all books                                       |
| `/books/:id`      | BookDetails  |                   | Displays detailed information for a single book       |
| `/genres/:genre`  | GenrePage    | BookCard          | Displays books filtered by genre                      |
| `*`               | NotFound     |                   | Displays 404 page                                     |

---

## Other Components

- Navbar
- Footer
- BookCard
- Layout Wrapper

---

## Links

### Collaborators

Maylis  
https://github.com/maylis-dev

### Project

[Repository Link Client](https://github.com/maylis-dev/BookBestie)

[Repository Link Server](https://github.com/maylis-dev/bookserver)

[Deploy Link](https://book-bestie.vercel.app/)

### Trello

Add your Trello board link here

### Slides

Add your presentation slides link here
