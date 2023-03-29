Bugs

1. GET route to /users: The function getAll() returns all user info (including contact information), while we only need basic information. This bug was fixed by updating the SQL query in the model

2. GET route to /users/username: When a username can't be found, get(username) should return a 404 response. This was fixed by throwing an ExpressError in our model if username isn't found.

3. POST route to /auth/login: When went a bad username/password combination, this should return a 401 error.

4. POST route to /auth/login: needs to "await" a proper response -- instead it is generating JWT for any username/password sent to it

5. Middlware > authUser is not verifying that the token signature is valid (i.e., that the origin is from our server). Anyone can cause harm to the database without this verification.

6. PATCH route had requireAdmin middleware, preventing a currently-logged-in user from editing their information.

Others:
- app.js has two instances of the app export (module.exports = app;) -- deleted the redundant one
