# Real-Time Form Submission App

This is a real-time form submission app that uses **WebSockets** and **Express** to send and receive form data dynamically between the client and server. The app captures user information (Name, Phone Number, Email, and Gender) and displays it in a list. When multiple clients are opened, the list is synchronized and displays the updated data across all clients.
This project uses **Express** to create the web server and **WebSocket** (via the socket.io library) for real-time communication between the server and clients

## Features
- **Real-time updates**: The list of submitted data is updated dynamically when new form entries are submitted.
- **Responsive Design**: The application is mobile-friendly and adapts to different screen sizes.
- **User-Friendly Form**: A clean form interface with validations for name, phone number, and email.
- **WebSocket Communication**: Uses WebSockets to send data to the server and receive updates in real-time.

## Technologies Used
- **HTML/CSS**: For structure and styling the form and display.
- **JavaScript (Client-side)**: For handling form submission and data display.
- **Node.js**: Backend server built with Node.js using Express.
- **Socket.io**: For real-time communication between the client and server.

## How to Set Up Locally

### Prerequisites & Installation
Before running the app locally, ensure you have **Node.js** and **npm** installed.

1. Install Node.js from the [official website](https://nodejs.org/).

2. Clone the repository: Clone or download the project to your local machine:
   ```bash
   git clone https://github.com/bassanttamer3/Iot_Lab.git
   ```
3. Navigate to the project directory and install the required dependencies:

   ```bash
   npm install
   ```
4. Start the server:

    ```bash
    npm start
    ```
the following message should appear in the log:

    The app will run on http://localhost:4402.


### Folder Structure
- **FormTask/**: Contains the HTML, CSS, and JavaScript files for the frontend.
  - **main.html**: Main HTML page that contains the form and submission display.
  - **style.css**: Stylesheet for the layout and design.
  - **script.js**: JavaScript that handles form submission and WebSocket communication.
  
- **index.js**: Backend server using Express and Socket.io to handle real-time data transmission.
  
- **package.json**: Project metadata and dependencies.

## How It Works

1. **Frontend (Client-side)**:

- The user fills out a form with their name, phone number, email, and gender.
- Upon form submission, the data is sent to the server using WebSockets via Socket.io.
- The list of submissions is updated dynamically on the page without needing a page reload.

2. **Backend (Server-side)**:

- The server listens for incoming form submissions through WebSockets.
- When a new submission is received, it is added to the submissions array.
- The server sends the updated list of submissions to all connected clients in real-time.
