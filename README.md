# MERN Authentication Application

This is a **MERN (MongoDB, Express, React, Node.js)** stack application for user authentication. It includes features like user registration, login, Google OAuth, password reset, and profile management. The application is designed to be scalable and secure, with a frontend built using React and a backend powered by Node.js and Express.

---

## Features

- **User Authentication**:
  - Register, Login, Logout
  - Google OAuth integration
  - Password reset via email
- **Profile Management**:
  - Update user profile information
  - Upload and manage profile avatars
- **Responsive Design**:
  - Fully responsive UI built with SCSS and React components
- **Secure Backend**:
  - JWT-based authentication
  - Password hashing with `bcryptjs`
  - Input validation and error handling

---

## Hosting on AWS


This project can be hosted on AWS using the following services:

### **AWS Services**
1. **Compute**:
   - **Amazon EC2**: To host the frontend (React + Nginx) and backend (Node.js + Express).
   - **Elastic Load Balancer (ELB)**: To distribute traffic to the frontend EC2 instances.

2. **Database**:
   - **Amazon DocumentDB**: A managed MongoDB-compatible database for storing user data.

3. **Storage**:
   - **Amazon S3**: To store static assets like images, CSS, and JavaScript files.
   - **Amazon CloudFront**: A CDN to cache and serve static assets globally.

4. **Networking**:
   - **Amazon VPC**: To create a private network for the application.
   - **Internet Gateway**: To allow internet access for public subnets.
   - **NAT Gateway**: To allow private subnets to securely access the internet.

5. **Security**:
   - **AWS IAM**: To manage access and permissions for AWS resources.
   - **Security Groups**: To control inbound and outbound traffic to EC2 instances.

6. **SSL/TLS**:
   - **AWS Certificate Manager (ACM)**: To manage SSL/TLS certificates for HTTPS.

7. **Domain Management**:
   - **Amazon Route 53**: To manage the domain and DNS records for the application.

8. **Monitoring**:
   - **Amazon CloudWatch**: To monitor logs, metrics, and application performance.

---

## Deployment Instructions

1. **Set Up AWS Services**:
   - Create an EC2 instance for the frontend and backend.
   - Set up Amazon DocumentDB or MongoDB on an EC2 instance.
   - Configure S3, CloudFront, and Route 53 for static assets and domain management.

2. **Build and Push Docker Images**:
   - Build Docker images for the frontend and backend.
   - Push the images to a container registry (e.g., Docker Hub or Amazon ECR).

3. **Run Docker Compose**:
   - Use the `docker-compose.yml` file to deploy the application.

4. **Configure SSL/TLS**:
   - Use AWS Certificate Manager to set up HTTPS.

5. **Monitor and Scale**:
   - Use CloudWatch for monitoring and configure auto-scaling for EC2 instances if needed.

---

## Environment Variables

Sensitive data like API keys, database credentials, and tokens are stored in `.env` files. These files are ignored in version control using `.gitignore`.

### Example `.env` File (Backend)
```env
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
ACTIVATION_TOKEN=<your_activation_token>
REFRESH_TOKEN=<your_refresh_token>
ACCESS_TOKEN=<your_access_token>
G_CLIENT_ID=<your_google_client_id>
G_CLIENT_SECRET=<your_google_client_secret>
G_REFRESH_TOKEN=<your_google_refresh_token>
ADMIN_EMAIL=<your_admin_email>
CLOUD_NAME=<your_cloudinary_name>
CLOUD_API_KEY=<your_cloudinary_api_key>
CLOUD_SECRET_KEY=<your_cloudinary_secret_key>
BASE_URL=<your_base_url>
