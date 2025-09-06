# Release v1.0.0 - JB SQUARE Bio-Portal

**Release Date:** September 6, 2025

## Introduction

This is the inaugural release of the **JB SQUARE Bio-Portal**, a comprehensive, single-page application designed to serve as a central hub for the Jeonbuk bio-industry. This platform connects companies, researchers, and investors by providing up-to-date information on news, events, policies, and regional technologies.

## Key Features

This release includes a wide range of features to create a complete and engaging user experience:

### 1. Modern Single-Page Application (SPA) Architecture
- Built as a fast and responsive SPA using Vite, React, and TypeScript for a seamless user experience without page reloads.
- The entire project is structured as a runnable NPM package.

### 2. Full Internationalization (i18n)
- **Bilingual Support:** The entire application is available in both **English** and **Korean**.
- **Dynamic Content Switching:** Users can toggle the language instantly, which translates all UI text, including all dynamic content like announcements, company descriptions, and event details.

### 3. Rich, Component-Based UI
- The application is broken down into clean, reusable components for each section:
  - **Hero Section:** A visually striking introduction.
  - **Stats Section:** Key metrics about the Jeonbuk bio-industry.
  - **Announcements, Events, Companies:** Dynamic, card-based sections to display the latest information.
  - **Support Organizations:** A directory of key ecosystem partners.
  - **Policy & Investment:** A tabbed view of real-world government support policies and investment fund information.
  - **Tech & Patents:** A showcase of regional technologies and intellectual property.
  - **Footer:** With navigation and contact information.

### 4. Advanced Animations and UX
- **Polished Motion Design:** Fluid animations, powered by Framer Motion, are used throughout the application to enhance user engagement.
- **Dynamic Navigation:** The header features animated dropdown menus for easy navigation through the site's information architecture.

### 5. Realistic & Researched Content
- The "Policy & Investment" section features **real-world support programs and tax incentives** researched from official Jeonbuk and Saemangeum government sources.
- The "Support Organizations" section lists **real, relevant agencies, universities, and research institutes** that are part of the Jeonbuk bio-ecosystem.

## Technical Stack
- **Framework:** React v18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Internationalization:** react-i18next

## Getting Started

To run the project locally:

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.
