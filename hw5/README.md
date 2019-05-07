HW5 has two folders: 

 - homework5 for the backend using node and mongodb
 -  hw5frontend for the angular part

**Frontend**

The Angular frontend has a login with google button in the app component's html page which calls a route on the backend to implement OAuth

It uses a login sservice to call the backend api

**Backend**

The app.js implements Google's OAuth stratergy using Passport

It allows only authenticated users to access a particular route

It sets up a mongodb connection to look up and store the user information, implemented using the deserialize method