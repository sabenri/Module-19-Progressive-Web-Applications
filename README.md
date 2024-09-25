# Module-19-Progressive-Web-Applications

  ## Description 
 This is a simple, browser-based text editor built as a Progressive Web Application (PWA). It allows users to write, edit, and save text documents, even while offline. The app utilizes IndexedDB for storing data and features service worker integration to cache assets and enable offline functionality. The project is built with modern JavaScript, Webpack, and uses Workbox for service worker management.

  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Features](#Features)
  - [Contributor](#Contributor)
  - [license](#license)
  - [questions](#questions)

  ## Installation
Prerequisites
Please ensure that you have Node.js and npm installed on your machine. You can download them from Node.js official website.

Steps
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/text-editor-pwa.git
Navigate into the project directory:

bash
Copy code
cd text-editor-PWA
Install the required dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
This will start both the client and server on your local machine. The app will be available at http://localhost:3000.

  ##Usage
 Once the server is running, open a browser and navigate to http://localhost:3000.
Write or edit text in the editor. Your content will be automatically saved to IndexedDB when you click off the window or navigate away.
If you reopen the application, the content you saved will be retrieved from IndexedDB.
You can also install the app as a desktop PWA by clicking the "Install" button in the browser (if supported).

  ##Features
Offline Access: The app can be used offline, with the help of service workers and IndexedDB.

Automatic Saving: Text is saved to the IndexedDB when the user leaves the page or window.

PWA Installation: Users can install the application on their desktop.

Data Persistence: Content is saved and retrieved using IndexedDB to ensure that data persists between sessions.

Modern Webpack Build: Webpack bundles the application with production and development build modes.

Service Workers: The app uses Workbox to manage caching and offline functionality.


  ##Contributor
  there are no contributors to this project

  ##license
  this project is licensed with MIT License.

  ## Questions 
  If you have any questions, Please contact me at Enriquezsabely@gmail.com.
  you can find my work at [GitHub](http://github.com/sabenri).
