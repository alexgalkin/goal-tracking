# Bimbink Web App

Bimbink is a Web application that utilizes Firebase for backend services.

Most of the code was generated with `Github Copilot` to check its capabilities during `24-hours` challenge.

The main purpose the app is the `track personal goals`, periodically `remind about them`, `capture wishes`, `score different areas of your life`  to understand the progress better and to allow you to `transform your lifestyle` to `be happier`.

## Project Structure

```
bimbink-web-app
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

- Open your browser and navigate to `http://localhost:9000` to view the application.
- Modify the components in the `src/components` directory to customize the app.

## Contributing

- Feel free to submit issues or pull requests for improvements or bug fixes.
- NOTE: Current `Development` notes can be found under the `./docs` folder (e.g. [Favicon generator](../docs/DEVELOPMENT.md) )

## License

This project is licensed under the MIT License.

## Next Steps

1. Configure `Github Actions` for `CI/CD`.
2. Register and configure custom domain.
3. Investigate the options to encrypt the data stored.
4. Collect feedback.
5. Improve `UI/UX`.
6. Add section for `Reminders` to setup reminder emails regarding your goals.
7. Add cookies consent and check analytics.
