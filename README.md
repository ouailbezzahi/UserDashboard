# User Dashboard

## Concept & Story

User Dashboard is a clean and interactive React application designed to manage, search, and view user profiles seamlessly. As a developer or manager, you enter a central dashboard where you can browse through a network of contacts, quickly filter through team members, and inspect detailed profiles. Your ultimate goal is to find and manage user information efficiently in real-time.

---

## Overview

The dashboard connects directly to an external REST API to retrieve user data. Data is presented dynamically, allowing you to quickly locate specific people, inspect their details, and handle network errors gracefully.

---

## Core Components

### Search Bar (Interactive Filter)
At the top of the dashboard, you will find a real-time search input. As you type, the user list dynamically updates to show matching profiles.

**Description:**
* Clean and responsive input field
* Real-time filtering by user name
* Case-insensitive search mechanism

---

### User Card (Overview Item)
In the main view, every user is rendered inside their own card displaying high-level information.

**Appearance:**
* **Name:** User's full name
* **Email:** Primary contact email address
* **Company:** Organization or company name
* **Action:** Direct button to inspect full details

---

### User Details (Expanded View)
When clicking on a user's "Bekijk details" button, an expanded card or modal appears with deep-dive contact information.

**Description:**
* Displays phone number, website, and city location
* Easily dismissible with a dedicated close button
* Conditionally rendered only when a user is selected

---

## Application Structure & Flow

* **Step 1: Data Fetching**
  * Automatically fetches 10 user profiles from the JSONPlaceholder REST API on launch.
* **Step 2: Searching & Filtering**
  * Filter through the retrieved profiles instantaneously using the search bar.
* **Step 3: Inspecting Details**
  * Click on any user card to toggle their detailed information panel.

---

## Controls & Usage

* **Mouse / Touch:** Click buttons to inspect user details or close the detail view.
* **Keyboard:** Type into the search input to automatically filter the list.

---

## Features

* Single Page Application (SPA) built with **React** and **Vite**
* Asynchronous data fetching using `useEffect` and `fetch`
* Dynamic state management with `useState`
* Real-time search and array filtering (`.filter()`, `.map()`)
* Modular component-based architecture (`SearchBar`, `UserList`, `UserDetails`)
* Loading indicators and user-friendly error handling

---

## Goal

Fetch user data, seamlessly filter contacts in real-time, and view expanded user profiles efficiently!
