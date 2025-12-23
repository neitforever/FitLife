# FitLife - Fitness & Nutrition App

FitLife is a modern, responsive web application for fitness tracking, workout programs, and nutrition planning. Built with React and TypeScript, it provides a comprehensive platform for managing your fitness journey.

## Features

-   **Workouts**: Browse and join various workout programs (Weight loss, Muscle gain, Yoga, Pilates, etc.)
-   **Nutrition**: Get personalized meal plans, recipes, and calculate daily calorie needs
-   **Profile Dashboard**: Track your progress, weight, measurements, and achievements with visual charts
-   **Community**: Connect with other users, join challenges, and participate in forum discussions
-   **Progress Tracking**: Monitor your transformation with before/after photos and detailed statistics
-   **Responsive Design**: Optimized for mobile and desktop devices

## Tech Stack

-   **React** (Vite) - Modern React framework with fast HMR
-   **TypeScript** - Type-safe development
-   **Tailwind CSS** - Utility-first CSS framework
-   **Recharts** - Beautiful and responsive charts for data visualization
-   **Lucide React** - Modern icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/neitforever/FitLife.git
    cd FitLife
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Project Structure

```
FitLife/
├── src/
│   ├── components/          # React components and pages
│   │   ├── HomePage.tsx
│   │   ├── WorkoutsPage.tsx
│   │   ├── NutritionPage.tsx
│   │   ├── ProfilePage.tsx
│   │   ├── CommunityPage.tsx
│   │   └── ui/              # Reusable UI components
│   ├── styles/             # Global styles and Tailwind configuration
│   │   └── globals.css
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── public/                  # Static assets
├── package.json
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## License

MIT
