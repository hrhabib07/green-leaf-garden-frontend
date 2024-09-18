# Green Leaf Garden 🌿

Live Site: [Green Leaf Garden](https://green-garden-frontend.vercel.app/)

## Overview

Green Leaf Garden is an online nursery platform built with React, Redux, Tailwind CSS, and TypeScript. It provides users with a seamless experience to browse, search, and manage nursery products. The platform also includes secure online payment through Stripe and provides a clean user interface for product management.

## Project Information - first version

- **Completion Date**: July 14, 2024

## Features

### Public Routes

- All pages on the website are accessible without the need for user authentication.

### Product and Category Management

- **Product Table**: Products are displayed in a table format with columns for image, title, price, category, and action buttons (edit/delete).
- **Create, Update, Delete Products**: Users can manage products by adding new items, editing existing ones via modal forms, and deleting products with confirmation.

### Product Browsing

- **Filtering, Pagination, and Sorting**: Efficiently filter products by category, sort them by price or name, and paginate through the product list.
- **Search**: Users can search for specific items using the search bar.
- **Product Details**: Detailed product information including description, price, rating, and category is available.

### Shopping Cart

- **Add to Cart**: Users can add items to the shopping cart. The quantity is managed, and duplicates are handled.
- **Quantity Management**: Users can update the number of items in the cart, without exceeding stock levels.
- **Checkout**: Proceed to checkout and review the cart before payment.

### Checkout and Payment

- **Order Creation**: Collect customer details and handle order creation. Stock levels are automatically updated upon successful order.
- **Payment Integration**: Secure online payment using Stripe or choose Cash on Delivery (COD) as an alternative.

### UI/UX

- Clean, responsive, and intuitive user interface for easy navigation.
- Tailwind CSS is used to style the components efficiently.
- Product display and category section enhance the user experience.

## Bonus Features

- **Debounce API Calls**: Reduces unnecessary API calls during product search.
- **Page Refresh Warning**: Ensures that users are warned if they refresh the page with items in their cart.

## Technology Stack

- **Frontend**: React, Redux, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js

## State Management

- State management is handled using Redux, managing products, categories, and cart actions efficiently.

## References for Idea Generation

- The project concept was inspired by websites like Treevaly, Nursery Plants BD, and others.

## How to Run

1. Clone the repository
2. Install dependencies using `npm install`
3. Run the development server with `npm run dev`

This project is developed for educational purposes as part of learning web development using modern technologies.
