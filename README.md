# veenERP

> **The enterprise resource planning platform built for modern, growing businesses.**

![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-blue?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-007ACC?logo=typescript&logoColor=white)

## Overview

**veenERP** is a comprehensive, enterprise-grade Operations and Resource Planning suite designed to systematize business processes. Built with cutting-edge web technologies, it features a highly modular architecture that enables seamless management of teams, finances, client relationships, and inventory all in one centralized platform.

Our design philosophy strictly adheres to a professional, high-end corporate SaaS aesthetic, ensuring a polished and intuitive user experience right out of the box.

## Core Modules

veenERP is divided into high-impact operational modules tailored for different departments:

- **☑️ Planning / Tasks**: Keep track of organizational roadmaps, sprints, and daily task management with deep tracking and overdue alerts.
- **👥 CRM (Customer Relationship Management)**: Monitor deal pipelines, analyze conversion stages, and manage strategic customer interactions.
- **🧑‍💼 HR Management**: Visualize expansive organizational structures, manage attendance, process payroll, and handle employee leave requests.
- **💲 Finance**: Oversee expenditures, track revenue, handle incoming invoices, and compute net profitability metrics.
- **📄 Contracts**: Manage vendor MSAs, track SaaS license expirations, and securely record legal retainers.
- **📦 Warehouse**: Monitor inventory SKUs in real-time, anticipate stock shortages, and manage inbound/outbound transit.
- **📖 LMS (Learning Management System)**: Scale employee onboarding and training by tracking internal corporate course completion and compliance.

## Internationalization (i18n)

veenERP is natively designed for multinational enterprise deployments. It features a fully hardcoded, high-performance dictionary translation architecture supporting the following locales:

- **🇺🇸 English** (`en`)
- **🇵🇭 Filipino** (`ph`)
- **🇯🇵 日本語 / Japanese** (`jp`)
- **🇰🇷 한국어 / Korean** (`kr`)
- **🇨🇳 中文 / Chinese Simplified** (`cn`)

## Tech Stack

- **Framework**: [Next.js App Router](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Inter (Latin) & Noto Sans CJK (Asian Languages)

## Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/veenerp.git
   cd veenerp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Launch the application:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Design System

The application utilizes a fully custom CSS schema strictly configured in `app/globals.css`. It implements:
- A standardized blue corporate design vocabulary (`#3b82f6` primary axis)
- Fluid scaling typographies
- Highly legible semantic color tokens for success/danger/warning states.
- Reusable React components built per module specifications.

## License

Copyright © 2024 veenERP Team. All rights reserved.
Proprietary and confidential. Unauthorized copying of this project, via any medium, is strictly prohibited.
