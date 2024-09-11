# Total Kinetic Advantage

## Overview

A web application that a user can use to generate a resistance training program based on current fitness level, desired frequency and desired outcome. Application also features an exercise library where a user can view details and instructions on how to perform a given exercise, as well as watch a video demonstration.

### Problem Space

This app is intended for individuals who are looking to start a structured strength training program, but may not have the needed knowledge to create one themselves, or for users who are already following a program, but need easy reference on exercise instructions and details.

### User Profile

-   Individuals looking to start strength training who:
    -   don't know where to start
    -   have no knowledge of exercise program structure
    -   are tired of looking through forums and instagram posts for exercise plans
    -   need easy access to reference details and instructions on exercises

### Features

-   As a user, I want to create a strength training program with as few clicks as possible.

-   As a user, I want to know how to perform the exercises in my program

-   As a user, I want to know why I am doing the exercises in my program

-   As a user, I want to look through a library of exercises

## Implementation

### Tech Stack

-   React
-   JavaScript
-   MySQL
-   Express
-   Client Libraries
    -   react
    -   react router
    -   axios
-   Server Libraries
    -   knex
    -   express

### APIs

No external APIs will be used

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out

-   Home page
-   Program page
-   Exercise library
-   Exercise by body part library
-   Exercise details

### Mockups

**Home Page**
![](https://github.com/braedonrossum/materials/blob/main/total_kinetic_advantage/mock_home.png?raw=true)

**Program Page**
![](https://github.com/braedonrossum/materials/blob/main/total_kinetic_advantage/mock_program.png?raw=true)

**Body Part Library**
![](https://github.com/braedonrossum/materials/blob/main/total_kinetic_advantage/mock_library.png?raw=true)

**Exercise Library**
![](https://github.com/braedonrossum/materials/blob/main/total_kinetic_advantage/mock_part_library.png?raw=true)

**Exercise Details**
![](https://github.com/braedonrossum/materials/blob/main/total_kinetic_advantage/mock_details.png?raw=true)

### Data

![](https://raw.githubusercontent.com/braedonrossum/materials/main/total_kinetic_advantage/drawSQL_db_image.png)

### Endpoints

**Body Part Routes**

**GET /body**

-   Get a list of body part categories

Parameters:

- body_part: body part from library

Response:

```
[
    {
        "id": 1
        "name": "Chest"
    },
    ...
]
```

**GET /body/:id/exercises**

-   Get a list of exercises for a given body part

Parameters:
    - body_part_id: id for given body part

Response:
```
[
    {
        "id": 1,
        "name": "Bench Press",
        "difficulty": "Intermediate",
        "exercise_type": "Strength"
    },
    ...
]
```
**Exercise Routes**

**GET /exercises**

- Get a list of all exercises in the library

Response:
```
[
    {
        "name": "Bench Press",
        "body_part_id": 1,
        "difficulty": "Intermediate",
        "exercise_type": "Strength",
        "description": "A barbell exercise that targets the chest muscles, primarily the pectoralis major.",
        "instructions": "Lie on a bench with feet flat on the floor. Grip the barbell slightly wider than shoulder-width. Lower the barbell to your chest and then press it back up."
    },
    ...
]
```
**GET /exercises/:id**

- Get details on a specific exercise

Parameters:
- exercise_id: id for given exercise

Response:
```
     {
          name: "Push-up",
          body_part_id: 1,
          difficulty: "Beginner",
          exercise_type: "Strength",
          description: "A bodyweight exercise that engages the chest, triceps, and shoulders.",
          instructions: "Start in a plank position with hands shoulder-width apart. Lower your body until your chest nearly touches the floor, then push back up."
      }
```

**Generate Program Route**

**POST /generate**
- Generate strength training program based on user input

Parameters:
- frequency: number of days per week
- difficulty: current fitness level (beginner, intermediate, advanced)
- exercise_type: goal (gain muscle, fat loss, strength)

Response:
```
[
    {
        "day": 1,
        "exercises": [
            {
                "name": "Incline Bench Press",
                "body_part_id": 1
            },
            {
                "name": "Concentration Curl",
                "body_part_id": 3
            },
            {
                "name": "Leg Press",
                "body_part_id": 2
            },
            {
                "name": "Overhead Tricep Extension",
                "body_part_id": 3
            }
        ]
    },
    {
        "day": 2,
        "exercises": [
            {
                "name": "Arnold Press",
                "body_part_id": 6
            },
            {
                "name": "Chest Fly",
                "body_part_id": 1
            },
            {
                "name": "Hip Thrust",
                "body_part_id": 7
            },
            {
                "name": "Bent-over Row",
                "body_part_id": 4
            }
        ]
    }
]
```


## Roadmap
Day 1
- Create client
- Create server
    - express project with needed routes
- Create Migrations
- Create data for exercises
- Create seeds with exercise data

Day 2-5
- Create header and footer
- Feature: View body part categories
    - Implement body part library page
    - Create GET /body endpoint

Day 5-7
- Feature: View list of exercises for given body part
    - Implement exercise by body part library
    - create GET /body/id/exercises route

Day 7-9
- Feature: View exercise details
    - Implement exercise details page
    - create GET /exercises/id route

Day 9-12
- Feature: Generate strength training program
    - add form input to home page 
    - Create POST / route for generating program


---

## Future Implementations

- Add more exercises
- Implement login authentication to create user to store generated programs
- Build your own program functionality
- Expand workout/program customization
- Add set/rep ranges to each exercise dependant on users current fitness level/goal

