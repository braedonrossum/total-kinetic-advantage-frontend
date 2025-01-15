# Total Kinetic Advantage - Frontend

The **Total Kinetic Advantage** application helps users generate personalized fitness programs based on their fitness level, desired frequency, and goals. This repository contains the React-based frontend that powers the user interface and interactions.

View the deployed site here: [Total Kinetic Advantage](https://totalkineticadvantage.com/)

## Features

- **Personalized Fitness Programs**: Input your preferences and receive a structured workout plan.
- **Exercise Library**: Browse and explore a library of exercises by body part and difficulty.
- **Responsive Design**: Optimized for mobile and desktop devices.
- **Video Integration**: View detailed exercise instructions and demonstration videos.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/braedonrossum/total-kinetic-advantage-frontend.git
   cd total-kinetic-advantage-frontend` 

2.  **Install Dependencies**:
    
    bash
    
    Copy code
    
    `npm install` 
    
3.  **Start the Development Server**:
    
    bash
    
    Copy code
    
    `npm start` 
    
    The app will be available at `http://localhost:3000`.
    

## API Integration

The frontend interacts with the [Total Kinetic Advantage Backend](https://github.com/braedonrossum/total-kinetic-advantage-backend), which provides data for exercise programs, user input, and video details. Ensure the backend is running and properly configured.

## Scripts

-   `npm start`: Start the development server.
-   `npm test`: Run tests.
-   `npm run build`: Build the project for production.
-   `npm run lint`: Lint the codebase.

## Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/             # Page-level components
├── services/          # API service functions
├── styles/            # SCSS styles
├── assets/            # Images and static files
└── App.js             # Main application file
```

## Technologies Used

-   **React**: UI framework for building components.
-   **React Router**: Navigation and routing.
-   **Axios**: API data fetching.
-   **SCSS**: Styling with support for variables and mixins.

## Contributing

Contributions are welcome! To contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bugfix.
3.  Commit your changes and open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

----------

For more information, visit the [backend repository](https://github.com/braedonrossum/total-kinetic-advantage-backend).
