# Realtime Document Editor

Welcome to realtime document editor. Here you can create your own document, can edit it in realtime and can share it with anyone who are signed in with this application, and also revoke their access. You can change your document access type (public, private) and share it to everyone.

## Video Demonstration

[Screencast from 11-03-24 01:57:42 AM IST.webm](https://github.com/asheshmandal2003/American_Elite_Market_Assignment/assets/116034358/c46945b9-a3df-4963-ba9c-1204f4917395)

## Work Flow:

The workflow of this application is very easy. When somene creates a document or open a document a socket connection will be established. Using this socket connection I'm sending my changes to the backend socket server. To detect and send changes I'm using React "useEffect" hook and to detect changes I'm using Quill js. Every 2 seconds interval I'm sending the changes to the backend (If any changes detected and also if websocket is connected) and saving it to the database by updating the whole content. That's how I'm persisiting the data. Also when a user first opens any document a "load-document" message has sent to the socket server to find the document and load it. If the document exists or the document data is received then only user can edit the document, either it will be disabled. That's main workflow behind the realtime text editor.

## Features

- **User Registration and Authentication**: Users can sign up, log in, and securely manage their accounts using Passport.js for authentication.

- **Document Management**: Registered users can add new document, also document can be shared only with the registered users.

- **Text Editor**: The editor is built up using Quill js. Here you can find various type of document editing features.

- **Add Collaborators**: You can add collaborators in your document with "read-only" and "write" policy, "read-only" users are not allowed to edit the document the can only read the document.

- **Document Access Policy**: You can set your document as public, where anyone can view it (who are logged in), or you can set it as private and share it only with people you know.

- **JWT Security**: Users can only access the backend resources if he/she is authorized using jsonwebtoken.

- **Simple Design**: The whole application is built up with Material UI for the best user experience.

## Technologies Used

- Socket.io
- Node.js
- Express.js
- React.js
- Redux.js for frontend data persistency
- Quill js for text editor
- MongoDB (with Mongoose ODM)
- Passport.js for user authentication
- Material UI

## Installation and Setup

## Setup Locally:

1. Clone the GitHub repository:

   ```shell
   git clone https://github.com/asheshmandal2003/American_Elite_Market_Assignment.git
   ```

2. Navigate to the project directory:

   ```shell
   cd American_Elite_Market_Assignment

   ```

3. Navigate to the server directory:

   ```shell
   cd server
   ```

4. Install backend dependencies:

   ```shell
   yarn
   ```

5. Create a `.env` file using the `.example.env` file.(If you want to run the application using docker then no need to change anything just craete your own env file and paste everything.)

6. Run the backend development server:

   ```shell
   yarn run devServer

   ```

7. Run the socket server from the "server" directory:

   ```shell
   yarn run socketServer
   ```

8. Navigate to the client directory:

   ```shell
   cd client
   ```

9. Create a `.env` file using the `.example.env` file.

10. Install frontend dependencies:

    ```shell
    yarn
    ```

11. Start frontend development server:

      ```shell
      yarn dev --port 3000
      ```

## Setup using Docker:

1. Navigate to the project directory:

   ```shell
   cd American_Elite_Market_Assignment
   ```

2. Run docker compose
   ```shell
   docker compose up --build
   ```
3. Open the browser and navigate to `http://localhost:3000` to see the running application.

## Project Structure

- `client/`: Contains the React.js frontend application.
- `server/`: Contains the Node.js backend API.
- `server/socket.js`: Defines Websockets backend
- `server/routes/`: Defines the API routes.
- `server/controllers/`: Implements the route controllers.
- `server/models/`: Defines the database models (using mongoose ODM).
- `client/src/components`: Contains React components.
- `client/src/state`: Contains Redux js cofigurations
