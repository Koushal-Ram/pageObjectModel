import{test, expect} from "@playwright/test";

test("GET request", async({request})=>{
    const response = await request.get("https://reqres.in/api/users?page=2");
    const data = await response.json();
    console.log(data);

    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
    expect(response.headers()['content-type']).toBe("application/json; charset=utf-8"); // content-type in lowercase
    expect(response.headers()['cache-control']).toBe("public, max-age=14400, s-maxage=60");
    
    const responseTime = response.timing().responseEnd - response.timing().requestStart;
    expect(responseTime).toBeLessThan(600);
})

test("POST request", async({request})=>{
    const responseBody = await request.post("https://reqres.in/api/users",{
        "body": {
         id: 13,
      email: 'boshel.howell@reqres.in',
      first_name: 'Randy',
      last_name: 'Orton',
      avatar: 'https://reqres.in/img/faces/12-image.jpg'
        }
    });

    expect(responseBody.status()).toBe(201);
    expect(responseBody.statusText()).toBe("Created");
    expect([200, 201]).toContain(responseBody.status());

    const responseTiming = responseBody.timing().responseEnd-responseBody.timing().requestStart;
    expect(responseTiming).toBeLessThan(500);

})

test("PUT request", async({request})=>{
    const response = await request.put("https://reqres.in/api/users/2", {
        "body":{
                  id: 17,
      email: 'obamma.lawson@reqres.in',
      first_name: 'Michael',
      last_name: 'jackson',
      avatar: 'https://reqres.in/img/faces/7-image.jpg'
        }
    });

    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
    expect(response.headers()['content-type']).toBe("application/json; charset=utf-8");
    expect(response.headers()['server']).toBeTruthy();
    const time = response.timing().responseEnd - response.timing().requestStart;
    expect(time).toBeLessThan(500);

})

test("DELETE request", async({request})=>{
    const response = await request.delete("https://reqres.in/api/users/2");

    expect(response.status()).toBe(204);
    const time = response.timing().responseEnd - response.timing().requestStart;
    expect(time).toBeLessThan(500);

})

test("check the data in the response body", async({request})=>{
    const response = await request.get("https://reqres.in/api/users?page=2");
    const data = await response.json();
    console.log(data);

    expect(data.page).toBe(2);  
    expect(typeof data).toBe("object");
    expect(typeof data.data[0].id).toBe("number");

    expect(data.data[0].id).toBe(7);
    expect(data.data[0].email).toBe("michael.lawson@reqres.in")
} )

/*

const data = {
    courses: ["Java", "Python", "C++"]
};

expect(data.courses).toContain("Java");
expect(data.courses).toContain("Python");
expect(data.courses).toContain("C++");

expect(data.courses).toHaveLength(3);

expect(data.courses).toEqual(["Java", "Python", "C++"]);

---------------------------------------------------------
const data = {
    student: {
        name: "Koushal",
        age: 25,
        course: "Java"
    }
};

expect(data.student.name).toBe("Koushal");
expect(data.student.age).toBe(25);
expect(data.student.course).toBe("Java");


expect(data.student).toHaveProperty("name"); checks property existence

expect(data.student).toHaveProperty("name", "Koushal"); check property and value 


ENTIRE OBJECT

expect(data.student).toEqual({
    name: "Koushal",
    age: 25,
    course: "Java"
});

*/

1. GET request with Authorization Bearer token
javascript
import { test, expect } from '@playwright/test';

test('GET request with Bearer token', async ({ request }) => {
  const response = await request.get(
    'https://reqres.in/api/users?page=2',
    {
      headers: {
        Authorization: 'Bearer YOUR_ACCESS_TOKEN',
        Accept: 'application/json'
      }
    }
  );

  expect(response.status()).toBe(200);

  const data = await response.json();
  console.log(data);
});

Log in
Sign up for free
You said:
iam  preparing for the playwright with javascript, api and manual testing interview . i will give you the questions you give me the simple answers just because of simple answers dont ommit important and necessary information in the answer

ChatGPT said:
Sure! 👍 I’ll help you prepare for your Playwright with JavaScript, API Testing, and Manual Testing interviews.

For every question you ask, I’ll provide an answer that is simple, clear, and interview-ready, without missing important technical details.

I’ll follow this approach:

Simple definition: Explain the concept in easy-to-understand language.

Important points: Include the key technical details an interviewer expects.

Example: Provide a practical example or JavaScript/Playwright code when needed.

Interview-ready answer: Keep the explanation concise enough to remember and confidently speak during an interview.

Practical scenarios: Where relevant, explain how the concept is used in real-time testing projects.

For coding questions, I’ll explain the code in simple terms. For comparison questions, I’ll highlight the important differences. For scenario-based questions, I’ll give a practical solution.

Topics we can cover:

Playwright with JavaScript

JavaScript fundamentals

API testing

Manual testing, SDLC, STLC, and defect management

Framework design, debugging, and real-time interview scenarios

I won’t make answers unnecessarily long, but I won’t sacrifice important information just to keep them short.

Send me your first interview question! 😊


You said:
what is api and web services ? what are its differenes

ChatGPT said:
1. What is an API?
API (Application Programming Interface) is a way for two software applications to communicate and exchange data with each other.

Example: When you log in to an application, the frontend sends your username and password to the backend through an API. The backend validates the credentials and sends a response, such as login success or failure.

In API testing, we verify the API's request, response, status code, headers, response time, and data.

2. What is a Web Service?
A Web Service is a type of API that allows two applications to communicate over a network, usually using web-based protocols such as HTTP.

Web services commonly use:

REST: Usually exchanges data in JSON format.

SOAP: Uses XML messages and follows SOAP standards.

Example: A weather application calls a weather web service to retrieve the current temperature for a city.

3. What are the differences between API and Web Services?
API

Web Service

API stands for Application Programming Interface.

A web service is a service that enables communication between applications over a network.

It allows software components to communicate.

It allows applications to communicate over a network.

It can work locally or over a network.

It requires network communication.

It can use different communication mechanisms and protocols.

It commonly uses web protocols such as HTTP.

Not every API is a web service.

Every web service is an API, but not every API is a web service.

Examples include library APIs, operating system APIs, and web APIs.

Examples include RESTful web services and SOAP web services.

4. Interview-ready answer
Question: What is an API, what is a web service, and what is the difference between them?

"An API is an Application Programming Interface that allows two software applications or components to communicate with each other. A web service is a type of API that enables communication between applications over a network using web-based protocols.

The main difference is that an API can work locally or over a network, whereas a web service requires network communication. REST and SOAP are common approaches used for web services. Therefore, every web service is an API, but not every API is a web service."

Important interview point: REST and SOAP are not the same thing. REST is an architectural style, while SOAP is a messaging protocol.


You said:
what is resource in REST

ChatGPT said:
What is a Resource in REST?
A resource in REST (Representational State Transfer) is any piece of data or an object that we want to access, create, update, or delete through an API.

Each resource is identified by a URI (Uniform Resource Identifier), usually accessed through an endpoint.

Examples of resources:

Users

Products

Employees

Orders

Payments

Example
Suppose we have an employee management application.

HTTP Method

Endpoint

Purpose

GET

/employees

Retrieve all employees

GET

/employees/101

Retrieve employee with ID 101

POST

/employees

Create a new employee

PUT

/employees/101

Update employee 101

DELETE

/employees/101

Delete employee 101

Here, employee is the resource, and /employees/101 identifies a specific employee.

What does a resource representation mean?
A resource is the actual data, while its representation is the format in which that data is returned by the API, such as JSON or XML.

Example JSON response:

json
{
  "id": 101,
  "name": "John",
  "department": "Testing"
}
This JSON is a representation of the employee resource.

Interview-ready answer
"A resource in REST is any data or entity that can be accessed and manipulated using a REST API. Examples include users, employees, products, and orders. Each resource is identified by a URI or endpoint, and HTTP methods such as GET, POST, PUT, and DELETE are used to retrieve, create, update, and delete resources. Resources are commonly represented in JSON or XML format."

Remember: Resource = the data or entity; URI = its identifier; HTTP method = the action performed on it.


You said:
explain http methods

ChatGPT said:
What are HTTP Methods?
HTTP methods define the type of operation we want to perform on a resource through an API.

In API testing, we mainly use GET, POST, PUT, PATCH, and DELETE. Other methods, such as HEAD and OPTIONS, are also important.

1. Important HTTP Methods
HTTP Method

Purpose

Example

GET

Retrieve data from the server.

Get employee details

POST

Create a new resource or submit data for processing.

Create a new employee

PUT

Replace an existing resource completely.

Replace employee details

PATCH

Update specific fields of an existing resource.

Update only the employee's email

DELETE

Delete a resource.

Delete an employee

HEAD

Retrieve response headers without the response body.

Check whether a resource exists

OPTIONS

Discover the communication options supported by a resource, often including allowed methods.

Check supported HTTP methods

2. Example using an Employee API
Suppose the endpoint is /employees/101.

GET — Retrieve data

http
GET /employees/101
Returns the details of employee 101.

POST — Create data

http
POST /employees
Content-Type: application/json
json
{
  "name": "John",
  "salary": 50000
}
Creates a new employee. A successful creation commonly returns 201 Created.

PUT — Replace the resource

http
PUT /employees/101
json
{
  "name": "John",
  "salary": 60000
}
Replaces the employee's representation with the submitted data. Fields not included may be removed or reset, depending on the API's implementation.

PATCH — Partially update data

http
PATCH /employees/101
json
{
  "salary": 55000
}
Updates only the salary field, assuming the API supports this patch format.

DELETE — Remove data

http
DELETE /employees/101
Deletes employee 101. A successful response may return 200 OK or 204 No Content.

3. Difference between PUT and PATCH
This is a common interview question.

PUT

PATCH

Used to replace a resource's representation.

Used to partially modify a resource.

Typically sends the complete representation.

Typically sends only the fields or changes to apply.

Repeating the same request with the same data has the same intended effect.

Repeating a request may or may not have the same effect, depending on the patch operation.

Example: If an employee has a name, email, and salary, PUT generally sends the complete updated employee representation, whereas PATCH can update only the salary.

4. Important HTTP concepts for interviews
Safe methods: GET and HEAD are safe because they are not intended to change the server's state.

Idempotent methods: GET, HEAD, PUT, and DELETE are idempotent. Repeating the same request has the same intended effect as making it once. OPTIONS is also defined as idempotent.

POST: Not generally idempotent; repeating a request can create multiple resources.

PATCH: Not guaranteed to be idempotent; it depends on the operation.

HTTP methods and status codes are different: The method defines the requested operation, while the status code indicates the result. For example, GET can return 200 OK, 404 Not Found, or 500 Internal Server Error.

5. Interview-ready answer
"HTTP methods define the operations performed on resources through an API. GET is used to retrieve data, POST to create a resource or submit data, PUT to replace a resource, PATCH to partially update a resource, and DELETE to remove a resource. HEAD retrieves headers without a response body, and OPTIONS identifies supported communication options. In API testing, we verify whether each method behaves correctly, returns the expected status code and response, and handles invalid requests properly."


You said:
safe method and idempotent method

ChatGPT said:
1. What is a Safe Method in HTTP?
A safe method is an HTTP method that is not intended to change or modify the server's data.

For example, when we use GET to retrieve employee details, the server should return the data without creating, updating, or deleting the employee.

Safe HTTP methods:

GET – Retrieves data.

HEAD – Retrieves response headers without the body.

OPTIONS – Retrieves communication options supported by the server.

Example:

http
GET /employees/101
This request retrieves employee 101 without intentionally modifying the employee's data.

2. What is an Idempotent Method in HTTP?
An idempotent method is an HTTP method for which making the same request multiple times has the same intended effect on the server as making it once.

Idempotent HTTP methods:

GET

HEAD

PUT

DELETE

OPTIONS

TRACE

Example:

http
PUT /employees/101
json
{
  "name": "John",
  "salary": 50000
}
If we send this same PUT request five times, the employee's intended final state remains the same as after the first request.

For DELETE, the first request may delete the employee, and subsequent requests may return 404 Not Found. It is still idempotent because the intended server state remains unchanged after the employee has been deleted.

3. Difference between Safe and Idempotent Methods
Safe Method

Idempotent Method

Does not intend to modify server state.

Repeated identical requests have the same intended effect as one request.

Focuses on whether the request changes data.

Focuses on the effect of repeating the request.

Examples: GET, HEAD, OPTIONS.

Examples: GET, HEAD, PUT, DELETE, OPTIONS, TRACE.

All safe methods are idempotent.

Not all idempotent methods are safe.

Important example: PUT is idempotent but not safe because it can modify data. GET is both safe and idempotent.

4. Are POST and PATCH safe or idempotent?
Method

Safe?

Idempotent?

GET

Yes

Yes

POST

No

Generally no

PUT

No

Yes

PATCH

No

Not necessarily

DELETE

No

Yes

HEAD

Yes

Yes

OPTIONS

Yes

Yes

Note: PATCH can be designed to be idempotent, depending on the operation. POST can also be made idempotent through mechanisms such as idempotency keys, but its HTTP semantics do not guarantee this.

5. Interview-ready answer
"A safe HTTP method does not intend to modify the server's state. Examples are GET, HEAD, and OPTIONS. An idempotent HTTP method produces the same intended server state when the same request is executed multiple times. Examples are GET, PUT, and DELETE.

The main difference is that safe methods should not modify data, whereas idempotent methods can modify data but repeated requests should have the same intended effect. For example, GET is both safe and idempotent, while PUT is idempotent but not safe."

Easy way to remember:

Safe = Does it intend to change data? No.

Idempotent = Does repeating the request change the final intended state? No.


You said:
http status code

ChatGPT said:
What are HTTP Status Codes?
HTTP status codes are three-digit numbers returned by the server in response to an HTTP request. They indicate whether the request was successful, whether more action is required, or whether an error occurred.

In API testing, we validate the status code to confirm whether the API behaves as expected.

1. Types of HTTP Status Codes
There are five categories of HTTP status codes.

Category

Meaning

Common examples

1xx – Informational

Request received; processing continues.

100 Continue

2xx – Success

Request was successfully received and processed.

200, 201, 204

3xx – Redirection

Further action is needed to complete the request.

301, 302, 304

4xx – Client Error

The request has an issue, such as invalid input or insufficient permissions.

400, 401, 403, 404

5xx – Server Error

The server failed to fulfill a valid request.

500, 502, 503, 504

2. Important HTTP Status Codes for Interviews
2xx — Success codes
Status code

Name

When it is used

200 OK

OK

Request succeeded, commonly for GET or successful updates.

201 Created

Created

A new resource was successfully created, commonly through POST.

202 Accepted

Accepted

Request accepted for processing, but processing is not necessarily complete.

204 No Content

No Content

Request succeeded, but there is no response body. Common for DELETE.

3xx — Redirection codes
Status code

Name

When it is used

301 Moved Permanently

Moved Permanently

Resource has a permanent new URL.

302 Found

Found

Temporary redirection.

304 Not Modified

Not Modified

Cached resource has not changed; the client can reuse its cached copy.

4xx — Client error codes
Status code

Name

When it is used

400 Bad Request

Bad Request

Invalid request syntax or invalid input.

401 Unauthorized

Unauthorized

Authentication is missing or invalid.

403 Forbidden

Forbidden

Server understood the request but refuses access.

404 Not Found

Not Found

Requested resource was not found.

405 Method Not Allowed

Method Not Allowed

HTTP method is not supported for that resource.

409 Conflict

Conflict

Request conflicts with the current resource state, such as a duplicate record.

415 Unsupported Media Type

Unsupported Media Type

Request content format is not supported.

422 Unprocessable Content

Unprocessable Content

Request content is understood but cannot be processed, often due to validation errors.

429 Too Many Requests

Too Many Requests

Client exceeded a rate limit.

5xx — Server error codes
Status code

Name

When it is used

500 Internal Server Error

Internal Server Error

Unexpected server-side error.

501 Not Implemented

Not Implemented

Server does not support the requested functionality.

502 Bad Gateway

Bad Gateway

Gateway or proxy received an invalid response from an upstream server.

503 Service Unavailable

Service Unavailable

Server is temporarily unable to handle the request.

504 Gateway Timeout

Gateway Timeout

Gateway or proxy did not receive a timely response from an upstream server.

3. Difference between 401 and 403
This is a frequently asked interview question.

401 Unauthorized: Authentication is missing or invalid. Example: sending an API request without a valid token.

403 Forbidden: The server refuses access, typically because the authenticated user lacks the required permission.

Easy example: A user without a valid login token gets 401. A logged-in user who lacks admin permission gets 403.

4. Difference between 200, 201, and 204
200 OK: Request succeeded; a response body may be returned.

201 Created: A new resource was created successfully.

204 No Content: Request succeeded, but there is no response body.

For example, when creating an employee, the API may return 201. When retrieving employee details, it may return 200. When deleting an employee successfully, it may return 204.

5. How to validate status codes in Playwright with JavaScript
javascript
import { test, expect } from '@playwright/test';

test('Verify employee API status code', async ({ request }) => {
  const response = await request.get(
    'https://api.example.com/employees/101'
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.id).toBe(101);
});
Explanation:

request.get() sends a GET request.

response.status() retrieves the HTTP status code.

expect(response.status()).toBe(200) verifies that the API returns the expected status code.

response.json() reads the JSON response body.

The final assertion verifies the employee ID.

The URL is an example placeholder; replace it with your actual API endpoint.

6. Interview-ready answer
"HTTP status codes are three-digit codes returned by the server to indicate the result of an HTTP request. They are divided into five categories: 1xx for informational responses, 2xx for success, 3xx for redirection, 4xx for client errors, and 5xx for server errors. Common examples are 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, and 500 Internal Server Error. In API testing, we verify that the status code matches the expected behavior of the API."

Important for API testing interviews: A correct status code alone does not guarantee that an API is working correctly. Also validate the response body, headers, schema, business logic, and response time where applicable.


You said:
what are request headers

ChatGPT said:
What are Request Headers?
Request headers are key-value pairs sent by the client to the server along with an HTTP request. They provide additional information about the request, such as the data format, authentication details, and the type of response the client expects.

In API testing, request headers are used to pass authentication tokens, specify content types, and control how the server processes the request.

1. Common Request Headers
Header

Purpose

Example

Content-Type

Specifies the format of the request body.

application/json

Accept

Specifies the response format the client can accept.

application/json

Authorization

Sends authentication credentials or a token.

Bearer abc123

Cookie

Sends cookies stored by the client.

sessionId=xyz123

User-Agent

Identifies the client making the request.

Browser or API client details

Cache-Control

Provides caching instructions.

no-cache

Accept-Language

Indicates preferred response languages.

en-US

2. Example of Request Headers
Suppose we want to retrieve employee details from an API.

http
GET /employees/101 HTTP/1.1
Host: api.example.com
Accept: application/json
Authorization: Bearer abc123
Here:

Accept: application/json tells the server that the client prefers a JSON response.

Authorization: Bearer abc123 sends an access token for authentication.

Host identifies the target host in HTTP/1.1.

Because this is a GET request, a request body is usually not needed.

3. Difference Between Content-Type and Accept
This is a common interview question.

Content-Type

Accept

Specifies the format of the data being sent in the request body.

Specifies the response formats the client can accept.

Commonly used with POST, PUT, and PATCH requests that send a body.

Can be used with different HTTP methods.

Example: application/json

Example: application/json

Easy example: When creating an employee, Content-Type: application/json tells the server that the submitted employee data is JSON. Accept: application/json tells the server that the client wants the response in JSON format.

4. How to Send Request Headers in Playwright
javascript
import { test, expect } from '@playwright/test';

test('Verify API request headers', async ({ request }) => {
  const response = await request.get(
    'https://api.example.com/employees/101',
    {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer abc123'
      }
    }
  );

  expect(response.status()).toBe(200);
});
Here, Playwright sends the Accept and Authorization headers with the GET request.

The URL and token are examples; use your actual API endpoint and a valid test token.

5. Interview-ready answer
"Request headers are key-value pairs sent by the client to the server along with an HTTP request. They provide additional information about the request, such as the content format, authentication credentials, and preferred response format. Common request headers include Content-Type, Accept, Authorization, and Cookie. In API testing, we validate whether the required headers are sent correctly and whether the server handles them as expected."

Remember: Request headers are sent from the client to the server. Response headers are sent from the server back to the client.


You said:
test("GET request", async({request})=>{
    const response = await request.get("https://reqres.in/api/users?page=2");
    const data = await response.json();
    console.log(data);

    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
    expect(response.headers()['content-type']).toBe("application/json; charset=utf-8"); // content-type in lowercase
    expect(response.headers()['cache-control']).toBe("public, max-age=14400, s-maxage=60");
    
    const responseTime = response.timing().responseEnd - response.timing().requestStart;
    expect(responseTime).toBeLessThan(600);
})

test("POST request", async({request})=>{
    const responseBody = await request.post("https://reqres.in/api/users",{
        "body": {
         id: 13,
      email: 'boshel.howell@reqres.in',
      first_name: 'Randy',
      last_name: 'Orton',
      avatar: 'https://reqres.in/img/faces/12-image.jpg'
        }
    });

    expect(responseBody.status()).toBe(201);
    expect(responseBody.statusText()).toBe("Created");
    expect([200, 201]).toContain(responseBody.status());

    const responseTiming = responseBody.timing().responseEnd-responseBody.timing().requestStart;
    expect(responseTiming).toBeLessThan(500);

})
test("GET request", async({request})=>{
    const response = await request.get("https://reqres.in/api/users?page=2");
    const data = await response.json();
    console.log(data);

    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
    expect(response.headers()['content-type']).toBe("application/json; charset=utf-8"); // content-type in lowercase
    expect(response.headers()['cache-control']).toBe("public, max-age=14400, s-maxage=60");
    
    const responseTime = response.timing().responseEnd - response.timing().requestStart;
    expect(responseTime).toBeLessThan(600);
})

test("POST request", async({request})=>{
    const responseBody = await request.post("https://reqres.in/api/users",{
        "body": {
         id: 13,
      email: 'boshel.howell@reqres.in',
      first_name: 'Randy',
      last_name: 'Orton',
      avatar: 'https://reqres.in/img/faces/12-image.jpg'
        }
    });

    expect(responseBody.status()).toBe(201);
    expect(responseBody.statusText()).toBe("Created");
    expect([200, 201]).toContain(responseBody.status());

    const responseTiming = responseBody.timing().responseEnd-responseBody.timing().requestStart;
    expect(responseTiming).toBeLessThan(500);

})
here how to send the request header , bare token and authorization

ChatGPT said:
In Playwright API testing, you can send request headers using the headers option inside request.get(), request.post(), request.put(), or other HTTP methods.

There are two common ways to send a token: Bearer token authorization and custom headers.

1. GET request with Authorization Bearer token
javascript
import { test, expect } from '@playwright/test';

test('GET request with Bearer token', async ({ request }) => {
  const response = await request.get(
    'https://reqres.in/api/users?page=2',
    {
      headers: {
        Authorization: 'Bearer YOUR_ACCESS_TOKEN',
        Accept: 'application/json'
      }
    }
  );

  expect(response.status()).toBe(200);

  const data = await response.json();
  console.log(data);
});
Important: Replace YOUR_ACCESS_TOKEN with a valid token for an API that requires Bearer authentication. The ReqRes endpoint may require an API key depending on its current configuration.

The authorization header looks like this:

http
Authorization: Bearer YOUR_ACCESS_TOKEN
Authorization is the header name.

Bearer specifies the authentication scheme.

YOUR_ACCESS_TOKEN is the actual token.

2. POST request with Authorization Bearer token
You can add the same headers option to your POST request.

javascript
test('POST request with Bearer token', async ({ request }) => {
  const response = await request.post(
    'https://reqres.in/api/users',
    {
      headers: {
        Authorization: 'Bearer YOUR_ACCESS_TOKEN',
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      data: {
        name: 'Randy Orton',
        job: 'Wrestler'
      }
    }
  );

  expect(response.status()).toBe(201);

  const responseData = await response.json();
  console.log(responseData);
});


4. Better approach: Set common headers once
If all your API requests use the same base URL and token, you can configure them in a reusable API request context.

javascript
import { test, expect } from '@playwright/test';

test('GET users with common headers', async ({ playwright }) => {
  const apiContext = await playwright.request.newContext({
    baseURL: 'https://reqres.in',
    extraHTTPHeaders: {
      Authorization: 'Bearer YOUR_ACCESS_TOKEN',
      Accept: 'application/json'
    }
  });

  const response = await apiContext.get('/api/users?page=2');

  expect(response.status()).toBe(200);

  await apiContext.dispose();
});
Here, extraHTTPHeaders applies the specified headers to requests made through that context, so you don't need to repeat them in every request.

For real projects, store tokens in environment variables rather than hardcoding them in test files.