### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

JWT is a JSON Web Token -- a way of encoding information with a secret key so that the information can persist across different applications, be read/validated, and -- for example -- permit a  user to be granted access to different applications without having to re-login for each. The JWT is a string with three encoded parts that correspond to the header, payload, and signature.

- What is the signature portion of the JWT?  What does it do?

The signature portion of the JWT allows for validation -- that the source of the request is the same as expected by the server, based on the secret key.

- If a JWT is intercepted, can the attacker see what's inside the payload?

Yes -- the data is encoded but not encrypted. It can be inserted into a publicly-available JWT decoder to reveal the original information in plain text.

- How can you implement authentication with a JWT?  Describe how it works at a high level. 
 
When a user signs in, the JWT is generated by the server and stored to the client. Future requests by the user will include the JWT, allowing the server to recognize the user credentials, validating that they came from the original server. This authentication can permit access to other areas/applications without requiring the user to re-login each time.

- Compare and contrast unit, integration and end-to-end tests.

Unit tests evaluate individual functions and methods, testing the smallest individual components of a program. Integration tests evaluate functionality across multiple parts, ensuring they interact properly to produce the expected output. End-to-end tests evaluate the entire start-to-finish user experience for a particular task or set of steps involved in some aspect of the application's functionality from the user's perspetive.

- What is a mock? What are some things you would mock?

A mock imitates some inputs that might be from sources that are external to the unit or components being tested. This simplifies testing to just the scope of the program. Examples of things you would mock include API responses from services that cost money, and inexact functions like Math.random().

- What is continuous integration?

Continuous integration is the process of consistently merging smaller updates more frequently rather than updating a whole new version of the application.

- What is an environment variable and what are they used for?

Environment variables reflect the context that the application is running in, specifying the mode (e.g., development vs. production mode) or other parameters and resources that are external to the scope of the application itself. 

- What is TDD? What are some benefits and drawbacks?

Test-Driven Development -- the process of building applications by writing tests first (with the end-functionality in mind) and then developing code to make those tests pass successfully. A benefit of this approach is that it encourages modular, parsimonious code from the start that can be built in parts and refactored into larger blocks only where needed (as opposed to writing code first in clunky ways that are difficult to modularize or test, possibly requiring the developer to refactor or redo the whole thing). 

- What is the value of using JSONSchema for validation?

Using JSONSchema for validation can catch bad data immediately at the point of the request, preventing bad data from getting into the database. It does so in an easier way (rather than coding numerous conditional statements manually, which could get quite lengthy).

- What are some ways to decide which code to test?

Test components and functionality based on importance and where the key logic is located. An example is to test the API routes rather than the database. It isn't practical to test with 100% coverage, so it's important to triage to the key junctions in the logical flow of the application, in addition to any important authentication and validation measures.

- What does `RETURNING` do in SQL? When would you use it?

The 'RETURNING' clause makes SQL output a value (where it otherwise wouldn't), allowing us to get some information about the query that was run and the data it affected.

- What are some differences between Web Sockets and HTTP?

HTTP is stateless, meaning nothing about it persists after the information is sent. The connection also closes immediately after the response is received. Information is transferred in one direction at a time (one request to the server, one response received back). Web sockets, in contrast, are stateful, bidirectional, and stay connected and facilitate updates in real time.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  
  I personally prefer Express -- I am more comfortable with node.js over python, especially because it is a relatively consistent syntax with front end javascript. Express with nodemon also feels easier to get running -- no need for virtual environments, installation of dependencies into the venv, etc., and with Jest it seems easier to test.
