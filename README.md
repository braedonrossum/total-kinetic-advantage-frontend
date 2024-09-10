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

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

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

List any external sources of data that will be used in your app.

No external APIs will be used

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

-   Home page
-   Program page
-   Exercise library
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

**GET /**

-   Get a list of body part categories

Parameters:

-   body_part: body part from library

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

**GET /**

-   Get a list of all exercises in the library

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
**GET /:id**

-   Get details on a specific exercise

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

**POST /

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date.

---

## Future Implementations

Your project will be marked based on what you committed to in the above document. Here, you can list any additional features you may complete after the MVP of your application is built, or if you have extra time before the Capstone due date.
