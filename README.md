# Survytics

I've mentions top five features of this website down below.


[Live site link](https://survytics-client.web.app) 


- Payment Intregation: I've used stripe for payment gateway. Any logged in user can become a pro member after successful payment. And only pro members have the permission to add comments.

- JWT web token: For sensitive data like admin dashboard and surveyor dashboard I've implemented JWT token on backend.

- There are mainly four roles in this website. A user, pro user, surveyor and admin. All the them have their unique access to this website.

- Admin has the access to allow surveys to be on the website and on every unpublish survey admin can send a feedback message to the surveyor

- User can report a specific survey, they can like or dislike a survey. The reports of users are visible to the surveyor in his dashboard as feedback in the modal

### Run this project locally
```
npm install
```
Create a project on firebase and change .env.local file with your own credentials.
```
VITE_APIKEY=Your_Credentials
VITE_AUTHDOMAIN=Your_Credentials
VITE_PROJECTID=Your_Credentials
VITE_STORAGEBUCKET=Your_Credentials
VITE_MESSAGINGSENDERID=Your_Credentials
VITE_APPID=Your_Credentials
```
To integrate stripe payment method, get your stripe key from your stirpe account and add this on .env.local file
```
VITE_STRIPE_KEY=Your_stripe_public_key
```
Finaly, run the project on development server.
```
npm run dev
```



