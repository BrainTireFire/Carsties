# Carsties  

## 📖 Overview  
**Carsties** is a microservices-based project built using **C# ASP.NET Core**, designed for handling distributed systems efficiently. It serves as a **car auction portal**, enabling users to bid on vehicles, list their cars for sale, and participate in real-time auctions. The project incorporates modern tools like **RabbitMQ** for messaging, **MassTransit** for simplifying message-based communication, and **Next.js** for a dynamic and interactive frontend experience.  

---

## 🛠️ Tech Stack  

### Backend  
- **C# ASP.NET Core**: High-performance framework for building scalable APIs and microservices.  
- **RabbitMQ**: Message broker for asynchronous communication between services.  
- **MassTransit**: Simplifies message-based communication and integrates with RabbitMQ.  
- **Microsoft Identity**: Provides secure authentication and authorization with OAuth2.  
- **SignalR**: Enables real-time communication for features like live auction updates and notifications.  
- **Integration and Unit Testing**: Ensures application reliability and correctness through comprehensive automated tests for individual components and interactions between services.  
- **PostgreSQL**: Relational database for managing structured data like user profiles and auction details.  
- **MongoDB**: NoSQL database for storing unstructured data such as logs and analytics.  

### Frontend  
- **Next.js**: React framework for building server-side rendered (SSR) and static web applications.  

---

## ✨ Features  
- **Microservices Architecture**: Modular and scalable structure for independent service management.  
- **Event-Driven Communication**: RabbitMQ and MassTransit for efficient message passing.  
- **Dynamic Frontend**: Built with Next.js for SSR and improved user experience.  
- **Car Auctions**: Users can participate in real-time car auctions.  
- **Car Bidding**: Place and manage bids on listed vehicles.  
- **Car Listings**: Users can list their cars for sale, including details and images.  
- **Profile Management**: Allows users to update profile details such as personal data and settings.  
- **Notifications**: Real-time notifications for auction events and bid updates.  
- **Search Service**: Enables users to search for cars by various filters such as price, model, and location.  
- **Distributed System Support**: Designed for seamless interaction across multiple services.  

---

## 🏗️ Microservices  

### Core Services  
- **Auction Service**: Manages car auctions, including scheduling and bidding rules.  
- **Bidding Service**: Handles bid placement, updates, and validations.  
- **Gateway Service**: Provides a single entry point for client requests and routes them to the appropriate services.  
- **Identity Service**: Handles user authentication, registration, and profile management.  
- **Notification Service**: Sends real-time updates to users for auction and bidding events.  
- **Search Service**: Enables efficient searching and filtering of car listings.  

---

## 🗄️ Databases  
- **PostgreSQL**: Used for structured data like user profiles, car listings, and transaction records.  
- **MongoDB**: Used for unstructured data such as logs, audit trails, and application analytics.  
