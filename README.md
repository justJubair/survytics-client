----

# Survytics

 Survytics is a user-friendly survey creation platform, allowing surveyors to effortlessly design surveys with yes/no questions and allowing users to vote, like, dislike, comment and report on particular surveys. 

- [client site](https://survytics-client.web.app)
- [server site](https://survytics-server.vercel.app/health)

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Features

1. **Payment Intregation:**
   - I've used stripe for payment gateway. Any logged in user can become a pro member after successful payment. And only pro members have the permission to add comments.
   
2. **JWT web token:**
   - For sensitive data like admin dashboard and surveyor dashboard I've implemented JWT token on backend.
   
3. **Role base user management:**
   - There are mainly four roles in this website. A user, pro user, surveyor and admin. All the them have their unique access to this website.
   
4. **Admin accessibility:**
   - Admin has the access to allow surveys to be on the website and on every unpublish survey admin can send a feedback message to the surveyor.
   
5. **Default user accessibility:**
   - User can report a specific survey, they can like or dislike a survey. The reports of users are visible to the surveyor in his dashboard as feedback in the modal.
   
6. **Dashboard:**
   - Role-based user dashboard for Admin and Surveyors.
   


## Screenshots

#### Home page
![Home Page](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/HomePage.png)

---
#### AI Personal Trainer
![Ai personal trainer](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/Chatbot.png)

---
#### Services
![Services](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/Services.png)

---
#### BMI Calculator
![BMI calculator](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/BMICalc.png)

---
#### User Dashboard
![User dashboard](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/UserDashboard.png)

---
#### User Analytics
![User analytics](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/UserDashboard02.png)

---
#### Video Call Room
![post a blogs](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/VideoCallRoom.png)

---
#### Video Call Demo
![post a blogs](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/VideoCall.png)

---
#### Challenges Page 
![Challenges home page](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/ChallengesBanner.png)

---
#### Workout Challenges
![workout challenges](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/Challenges.png)

---
#### Workout Modules
![workout modules](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/Module.png)

---
#### Post A Blog
![post a blogs](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/BlogBanner.png)

---
#### Blogs
![blogs](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/Blogs.png)

---
#### Become A Trainer
![be a trainer](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/BeATrainer.png)

---
#### Trainers
![trainers](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/TrainersPage.png)

---
#### Pricing
![be a trainer](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/Pricing.png)


## Getting Started

To get started with the project, follow the steps below:

### Dependencies

Make sure you have the following dependencies installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/justJubair/fit-track-client.git
   ```

2. Navigate to the project directory:

   ```bash
   cd fit-track-client
   ```

3. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```
4. Update the .env.local file with your own credentials.

```env
GOOGLE_CLIENT_ID = Your google client ID
GOOGLE_CLIENT_SECRET = Google Secret
SECRET = Generate a secret token

FACEBOOK_CLIENT_ID = Your Facebook Client Id
FACEBOOK_CLIENT_SECRET = Facebook Secret

db_URI = MongoDB connection for NextAuth authentication
DB_URI = Your Database URL

NEXTAUTH_URL = http://localhost:3000

STRIPE_PUBLISHER_KEY = Stripe Publisher Key
STRIPE_SECRET_KEY = Stripe Secret Key

IMGBB_API_KEY = Your Api Key
```

### Usage

1. Start the development server:

   ```bash
   npm run dev
   # or
   yarn run dev
   ```

2. Open the application in your browser: [http://localhost:3000](http://localhost:3000)

## Contributing

If you'd like to contribute to the project, please follow the steps below:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.


## Acknowledgements

- [Next.js](https://nextjs.org)
- [Materail UI](https://mui.com/material-ui/)
- [TailwindCSS](https://tailwindcss.com/)
- [Next Auth](https://next-auth.js.org/)
- [imgBB API](https://imgbb.com)
- [Botpress](https://botpress.com/)
- [ZegoCloud](https://www.zegocloud.com/)