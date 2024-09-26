# Image Gallery App

This is an Image Gallery App built with React, allowing users to upload images via URL and display them in a responsive grid layout. The app demonstrates a component-based structure and state management using React's `useState` hook.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [How It Works](#how-it-works)
- [Future Improvements](#future-improvements)
- [Challenges and Learnings](#challenges-and-learnings)
- [Contributing](#contributing)

## Demo

You can view a live demo of the project [here](#).

## Features

- Upload images by providing image URLs.
- Display images in a responsive grid layout.
- Real-time addition of images to the gallery.
- Simple, intuitive UI for image management.

## Technologies Used

- React (for building the UI)
- JavaScript/JSX (for logic and structure)
- CSS Grid (for responsive layout)
- Vite (for fast development environment)

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

Ensure that Node.js and npm are installed on your machine. If not, you can download them from [here](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Jiteshiyu/Image-gallery-app.git
   cd Image-gallery-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Project Structure

```bash
├── public/
│   ├── icon.png
│   ├── bear.jpg
│   ├── bird.jpg
│   ├── mountain.jpg
├── src/
│   ├── components/
│   │   ├── Gallery.jsx
│   │   ├── ImageGrid.jsx
│   │   ├── ImageItem.jsx
│   │   └── Uploader.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   ├── index.css
├── index.html
├── package.json
└── vite.config.js
└── README.md
```

- `App.jsx`: The main application component that renders the `Gallery` component.
- `Gallery.jsx`: Manages the list of images and image upload functionality.
- `Uploader.jsx`: Handles image URL input and adding images to the gallery.
- `ImageGrid.jsx`: Displays the images in a responsive grid layout.
- `ImageItem.jsx`: Renders each image with styling.
- `index.css`: Contains the global styles for the app.

## Available Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build locally.

## How It Works

The app is built with React and uses the `useState` hook for managing the state of the image list. Here’s a breakdown of its functionality:

1. Image Upload: Users can enter the URL of an image and upload it by clicking the "Upload Image" button. The image is then added to the gallery.
2. Image Display: Images are displayed in a grid layout using CSS Grid, with responsiveness for different screen sizes.
3. Real-Time Updates: Once an image is added, it instantly appears in the gallery without requiring a page refresh.

## Future Improvements

- Drag-and-Drop Upload: Allow users to upload images by dragging them into the app.
- Image Deletion: Add functionality to remove images from the gallery.
- Image Upload via File: Allow users to upload images from their local file system instead of just via URL.

## Challenges and Learnings

- State Management: Using React’s `useState` to dynamically update the list of images and properly re-render the components.
- CSS Grid: Learning to implement a responsive grid system that adjusts to various screen sizes.
- Componentization: Structuring the app into reusable components like `Uploader`, `ImageGrid`, and `ImageItem` to maintain clean and maintainable code.

## Contributing

Contributions are welcome! If you have any ideas for new features or improvements, feel free to submit a pull request or open an issue.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

---
