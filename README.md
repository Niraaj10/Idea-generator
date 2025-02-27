# Idea-generator

This is a full-stack web application that allows users to input prompts and receive AI-generated responses. The project uses the OpenAI API for generating responses and stores prompt-response pairs in a MongoDB database. The app is containerized with Docker for easy setup and deployment. Check out the here : http://16.171.171.120:3000/

---

## **Features**
  - User Prompt Submission: Input custom text prompts through a clean and intuitive interface.
  - AI-Generated Responses: Leverages OpenAI's API for intelligent and creative responses.
  - Data Persistence: Saves user prompts and AI responses in a MongoDB database for later retrieval.
  - History Retrieval: View past prompts and their associated AI-generated responses (optional feature).
  - Containerized Deployment: Dockerized setup for easy local development and deployment.
  - Deployed on AWS EC2 instance using GitHub Actions for CI/CD.

  ---

  ## **Tech Stack**

### **Frontend**
- **React**: Provides a modern, responsive, and interactive user interface.
- **Axios**: Used for making HTTP requests to the backend.

### **Backend**
- **Node.js**: Ensures a fast and efficient server runtime environment.
- **Express.js**: Simplifies building REST APIs for prompt handling.
- **MongoDB**: Stores user prompts and their AI-generated responses.

### **Containerization**
- **Docker**: Ensures consistent and isolated development and deployment environments.

---

## **Getting Started**

Follow these steps to set up and run the project locally.

### **Prerequisites**
1. Install **Docker** and **Docker Compose** on your machine.
2. Get your OpenAI API key from [OpenAI](https://platform.openai.com/).

### **Setup Instructions**

1. **Clone the Repository**:
   ```bash
   git clone 'https://github.com/Niraaj10/Idea-generator'

2. **Add Environment Variables**:
- Create a .env file inside the backend folder with the following content:
   ```bash
    PORT=5000
    MONGO_URI=MONGODB_URI
    OPENAI_API_KEY=your_openai_api_key_here

- Create a .env file inside the frontend folder with the following content:
   ```bash
   VITE_BASE_URL=http://localhost:8000

3. **Build the Containers: Run the following command to build the Docker containers**:
    ```bash
    docker-compose build

4. **Start the Application: Launch the entire stack with:**
    ```bash
    docker-compose up
5.  **Access the Application:**
    - Frontend: http://localhost:5173
    - Backend: http://localhost:8000

### **API Endpoints**

1. **Generate AI Response**
    - Endpoint: POST - /api/ai-res/generateResponse
    - Request Body:
        ```json
        {
            "prompt": "Suggest a marketing  slogan"
        }
    - Response :
       ```json
       {
            "prompt": "Suggest a marketing slogan",
            "response": "Innovate Your World – One Step Ahead!"
       }
2. **Retrieve Prompt History (Optional)**:
    - Endpoint: GET - /api/ai-res/responseHistory
    - Response:
        ```json
        [
            {
                "prompt": "Suggest a marketing slogan",
                "response": "Innovate Your World – One Step Ahead!",
            }
        ]

### Known Issues and Limitations

1. **OpenAI API Dependency:**

    - The app relies on OpenAI's API for generating responses. If the API key is invalid or the service is unavailable, the functionality will be affected.
    - A fallback mechanism is implemented for local testing, returning dummy AI responses.

2. **Docker Resource Usage:**

    - Running all services (frontend, backend, and database) might require significant system resources.

3. **Scalability:**

    - This is a basic setup and may require optimization for handling high volumes of requests or concurrent users.


### **Deployment Details**

This application is hosted on an AWS EC2 instance. The backend and frontend are maintained in separate repositories for better modularity and deployment flexibility. GitHub Actions automates the CI/CD pipeline for seamless deployment.

### **Deployment Workflow**
1. **Backend Deployment:**
   - The backend repository contains the necessary API logic and MongoDB connection.

   - It is deployed as a service on an AWS EC2 instance using GitHub Actions as a runner to automate the deployment process.

   - Docker is used with a multi-stage build for an efficient and lightweight production image.
   - Backend API endpoint : http://16.171.171.120:8000/
2. **Frontend Deployment:**
    - The frontend repository hosts the React application.

    - It is deployed separately to the EC2 instance after the backend is successfully running

    - Frontend endpoint : http://16.171.171.120:3000/





### **Future Enhancements**

   - This application is hosted on an AWS EC2 instance. GitHub Actions is used to automate the CI/CD pipeline for seamless deployment. The pipeline performs the following steps:

   - Create two different repositories one for front-end and one for backend then first deploy the backend as action runner as a service then deploy the frontend

   - Build and Test: Ensures the application is built and tested before deployment.

   - Dockerize: The application is containerized using Docker.

   - Deploy to EC2: Pushes the Docker image to the EC2 instance and runs it.

## In Collaboration With sahays@





