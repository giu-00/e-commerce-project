# E-Commerce Portfolio Project

**React + TypeScript**  

A frontend portfolio project built with **React**, **TypeScript**, and **PrimeReact** components, allowing users to browse and interact with a simulated e-commerce interface.

## Key Features

- Browse available products with detailed views and image galleries.  
- Add products to **favorites** and **cart** (login required).  
- User registration and login functionality.  
- View a **cart summary** without actual checkout.  

## Technologies Used

- **React**  
- **TypeScript**  
- **PrimeReact** (UI components)  
- **CSS / SCSS** for custom styling  

## Installation & Running Locally

1. Clone the repository:  
```bash
git clone https://github.com/giu-00/e-commerce-project.git
```
2. Navigate to the project folder
```bash
cd e-commerce-project
```
3. Install dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm run dev
```

## Project Structure

- `/src/components` – Main components (product cards, detail modal, login/register modal, buttons, etc.)  
- `/src/pages` – Main pages (Home, Cart, Favourites, Login/Register)
- - `/src/services` – API calls (getProducts, getCategories, etc.)  
- `/src/styles` – CSS files  

## Notes

- Adding products to the cart or favorites requires user login.  
- The project is **frontend-only**: the cart is simulated, no real purchases are made.
