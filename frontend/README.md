# Spot Your Flight

## Description

Spot Your Flight is a real-time application designed to keep you updated on flight statuses, including delays, cancellations, and gate changes. With support for push notifications via SMS, email, or app notifications using Firebase Cloud Messaging, you can stay informed about your flight details effortlessly.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Real-time Updates**: Display current flight status, including delays, cancellations, and gate changes.
- **Push Notifications**: Receive notifications for flight status changes via SMS, email, or app notifications using Firebase Cloud Messaging.

## Technologies

- **Frontend**: HTML, CSS, React.js
- **Backend**: Node.js
- **Database**: MongoDB
- **Notifications**: Firebase Cloud Messaging

## Installation

To get Spot Your Flight up and running on your local machine, follow these steps:

### Prerequisites

Ensure you have the following installed:
- Node.js (for running the backend)
- MongoDB (for the database)
- npm or yarn (for managing packages)

### Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/pranjalvkt/spot-your-flight.git
    ```

2. **Navigate into the project directory:**

    ```bash
    cd spot-your-flight
    ```

3. **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```

4. **Install frontend dependencies:**

    ```bash
    cd ../frontend
    npm install
    ```

5. **Set up environment variables:**

    - Copy `.env.example` to `.env` in both `frontend` and `backend` directories.
    - Configure Firebase Cloud Messaging and MongoDB connection details in the `.env` files.

6. **Start the MongoDB server:**

    ```bash
    mongod
    ```

7. **Run the backend server:**

    ```bash
    cd ../backend
    npm start
    ```

8. **Run the frontend application:**

    ```bash
    cd ../frontend
    npm start
    ```

## Usage

Once everything is set up, you can access the application via `http://localhost:3000`. The frontend will display real-time flight statuses, and you will receive notifications based on your settings.

### Testing

Run tests using the following commands in both `frontend` and `backend` directories:

```bash
# For frontend
npm test

# For backend
npm test
```

## Contributing

We welcome contributions to improve Spot Your Flight. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

### Code of Conduct

Please adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) while contributing.

### Pull Request Process

1. Ensure your code passes existing tests.
2. Write clear commit messages and pull request descriptions.
3. Request a review from one of the maintainers.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, you can reach out to:

- **Pranjal Tripathi** - [pranjalvktripathi@gmail.com](mailto:pranjalvktripathi@gmail.com)
- **GitHub**: [github.com/pranjalvkt](https://github.com/pranjalvkt)