# Bimbink Web App

Bimbink is a Web application that utilizes Firebase for backend services.

Most of the code was generated with Github Copilot to check its capabilities during 24-hours challenge.

The main purpose the app is the track personal goals, periodically remind about them, captures wishes, score different areas of your life  to understand the progress better and to allow you to transform your lifestyle to be happier.

## Project Structure

```
my-web-app
├── public
│   ├── index.html        # Main HTML file
│   └── styles.css       # CSS styles for the application
├── src
│   ├── app.js           # Main JavaScript file
│   ├── firebase.js      # Firebase configuration and services
│   └── components
│       └── ExampleComponent.js # Sample React component
├── package.json          # npm configuration file
├── .firebaserc          # Firebase project configuration
├── firebase.json        # Firebase Hosting configuration
└── README.md            # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd bimbink-goal-tracker
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up Firebase:
   - Create a Firebase project in the Firebase console.
   - Update the `src/firebase.js` file with your Firebase configuration.

5. Run the application:
   ```
   npm start
   ```

## Usage

- Open your browser and navigate to `http://localhost:3000` to view the application.
- Modify the components in the `src/components` directory to customize the app.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.
