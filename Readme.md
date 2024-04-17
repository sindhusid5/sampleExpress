# Express User API

Create a POST /users endpoint in Express without using a database for learning middleware concepts. Implement middleware to log the request payload, modifying lastName to its first initial. Add middleware to check if age is under 18; if so, respond with status code 400 and "user is not an adult" message.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

`git clone https://github.com/sindhusid5/sampleExpress.git`

2. Navigate to folder

`cd UserAPI`

3. Install dependencies

`npm install`

4. Start the server:
`npm start`


For Testing the API use Postman
Sample Data

1. Creates a new user with the provided data.

        Method - POST
        Request Body -
        {
        "firstName": "Jane",
        "lastName": "Doe",
        "age": 25
        }

        Respose Body -
        {
            "firstName": "Jane",
            "lastName": "D",
            "age": 25
        }

2. To check wheather age is below 18 


        Method - POST
        Request Body -
        {
        "firstName": "John",
        "lastName": "Smith",
        "age": 15
        }

        Respose Body -
        {
            "message": "user is not an adult"
        }

 