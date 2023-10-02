
# [Fitness Tracker](https://fitness-tracker-gilt.vercel.app/)

## [Replit](https://replit.com/@theweird0ne/Fitness-Tracker-API) (Fitness Tracker API)
This repository contains the code for a web application designed to help users track their fitness goals, including exercise routines, food intake, and fitness goals.

## Features
Dashboard: Displays a summary of fitness metrics, including total calories burned, total calories consumed, total calories goal, and remaining calories to goal.
Exercise Tracking: Allows users to add and remove exercises, with details such as exercise name, duration, and calories burned.
Food Tracking: Allows users to add and remove food items, with details such as food name, calories, protein, carbohydrates, and fat content.
Goal Tracking: Allows users to set fitness goals, with details such as goal name, description, target date, target calories value, and status.
Navigation: Provides a navigation menu to access different sections of the app (Dashboard, Exercises, Food, Goal Tracker).
User Interfaces
Dashboard: Displays fitness metrics and navigation links to other sections.
Exercises: Includes an input form for adding exercises and a list of added exercises with the option to remove them.
Food: Includes an input form for adding food items and a list of added food items with the option to remove them.
Goal Tracker: Includes an input form for adding fitness goals and a list of set fitness goals with the option to remove them.

## API Endpoints
The application also exposes the following API endpoints:

/api/exercises
GET: Fetches a list of exercises.
POST: Adds a new exercise to the list.
DELETE: Removes an exercise from the list by its unique ID.
/api/food
GET: Fetches a list of food items.
POST: Adds a new food item to the list.
DELETE: Removes a food item from the list by its unique ID.
/api/goals
GET: Fetches a list of fitness goals.
POST: Adds a new fitness goal to the list.
DELETE: Removes a fitness goal from the list by its unique ID.

## Getting Started
To get started with the Fitness Tracker web application, you can clone this repository and install the dependencies:
```
git clone https://github.com/your-username/fitness-tracker.git
cd fitness-tracker
npm install
```
Then, you can start the development server:

```
npm start
```
The application will be running at http://localhost:3000.

Contributing
Contributions are welcome! Please read the contribution guidelines: CONTRIBUTING.md for more information.

License
The Fitness Tracker web application is licensed under the MIT License.
