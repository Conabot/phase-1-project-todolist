# phase-1-project-todolist

This is a simple todo list web application that allows users to create and manage their tasks. Users can add new tasks with a title, due date, assigned , and priority level. They can also view the details of a task and mark a task as completed.

Features

Create new tasks with a title, due date, assigned user, and priority level
View the details of a task
Mark a task as completed
Delete a task
Technologies Used

HTML
CSS
JavaScript
JSON Server (for data storage)
Installation

Clone the repository
Navigate to the project directory
Install dependencies: npm install
Start the JSON server: json-server --watch db.json
Open the index.html file in a web browser
Usage

Endpoint 
Your base URL for your API will be: http://localhost:3000

The endpoints you may need are:

GET /tasks
GET /tasks/:id
Feel free to add any additional classes or ids to any elements in the HTML file as you see fit.


Core Deliverables
To create a new task, fill out the form at the top of the page and click the "Add Task" button
To view the details of a task, click on the task in the list
To mark a task as completed, click the "Mark Complete" button next to the task
To delete a task, click the "Delete" button next to the task
Credits

License

This project is licensed under the MIT License. See the LICENSE file for details.

Extra Advanced Deliverables
You'll need these endpoints for the advanced deliverables:

POST /tasks
DELETE /tasks/:id
PATCH /tasks/:id
As a user, I can:

persist my updates to a ramen's rating and comment. (PATCH request)
persist new tasks that I create (POST request)
persist any task deletions (DELETE request)