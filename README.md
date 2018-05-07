# nightAtTheMuseum - Project 3 


## Project Name: Night at the Museum

## Description: 

We are creating a React/Express Full CRUD App that uses Google Maps API to help users to track, search, and favorite museums all around. Searches can be filtered by city or zip code.

- CRUD App List Builder
- Database that lists museums all around 
- Consumers/users can search, save, and add to the list of museums 
- Users can search up cafes by city or zip code 
- Post MVP Features allow users to edit account info 

## User Story: 
(1) Before hopping on my plane back to Paris, I wanted to check out NY's acclaimed museums. I think an app that can filter my searches would be very helpful. 
(2) I am a graphic design student. I need to visit an  art museum this weekend. To find museums at a quick search and accessibility would be a valuable resource. 

## Wireframe:

![1](https://git.generalassemb.ly/DAP/project-3/blob/master/IMG_0037.jpg)


## Piority Matrix:

![1](https://git.generalassemb.ly/DAP/project-3/blob/master/IMG_0038.jpg)

## ERD:

![1](https://git.generalassemb.ly/DAP/project-3/blob/master/IMG_0039.jpg)


## Technologies: 
- React - used to render the views of the CRUD app
- HTML - used to render the views of the CRUD app
- Node and Express - the modules for the CRUD app 
- MVC Pattern - the Models, Views, Controllers for the CRUD app 
- SQL / PG-PROMISE - to organize the database tables 
- CSS & Design - to make the CRUD app presentable 
- Google Maps API - to map/locate the museums

## Installation Instructions: 
- Go into my repo
- Fork and Git Clone
- Go into the Terminal Command Line
- subl . 
- npm i 
- npm init 
- npm run dev
- psql -f db/schema.sql



## CRUD App Components

### Landing Page
What will a user/guest see when they start your app?
The landing view will have a log in option and sign up option. 

###  App Initialization & Using the App
A user can fill out a form to search up museums by location (city or zip code). Users can view museums in the search results and view them individually on a page, and favorite museums. 


## MVP 

Include the full list of features that will be part of your MVP 
- Pseudocode and organization
- Landing View
- List View
- Form 
- Event Listeners
- Searching List
- Adding to Favorite List
- API
- CRUD 
- React Components 
- JWT
- Controllers
- Styling/CSS



## POST MVP

Include the full list of features that you are considering for POST MVP
- Edit account info 


## Functional Components
|   Component   |   Priority    |   Est Time (Hrs)  |   Time Invested (Hrs) |   Actual Time (Hrs)   |
|   --- |   :---:   |   :---:   |   :---:   |   :---:   |
|   Database Creation   |   H   |   0.5   |   0   |   0 |
|   Create Museums Table   |   H   |   2 |   0 |   0 |
|   Create Users Table   |   H   |   0.5 |   0 |   0 |
|   Create Favorites Table   |   H   |   0.5 |   0 |   0 |
|   Server   |   H   |   0.5   |   0   |   0 |
|   React Components   |   H   |   6   |   0   |   0 |
|   Controllers   |   H   |   3.5   |   0   |   0 |
|   Routes   |   H   |   4.5   |   0   |   0 |
|   Models   |   H   |   8   |   0   |   0 |
|   Collecting Data on API   |   M   |   2   |   0    |   0    |
|   Create   |   H   |   1 |   0 |   0 |
|   Read   |   H   |   1   |   0    |    0   |
|   Update  |   H   |   4   |   0    |   0    |
|   Delete    |   H   |   4   |   0    |   0   |
|   API Integration - Research    |   H   |   0.5   |   0    |   0    |
|   API Integration - Planning    |   H   |   1 |   0    |   0    |
|   API Integration - Development |   H  |   3 |   0    |   0    |
|   User Authentication    |   M   |   2   |   0    |   0    |
|   Creating MakeFake User Data    |   M   |   1   |   0    |   0    |
|   JWT (JSON Web Token)   |   H   |   6   |   0   |   0 |
|   CSS/Styling   |   L   |   6   |   0   |   0 |
|   Sum Hours   |       |   63    |   0   |   0 |





## Break Down
|   Login   |   Register    |   User Profile/Faves  |   Search |   Museum Profile   |
|   --- |   :---:   |   :---:   |   :---:   |   :---:   |
|   2 inputs   |   fname   |   Faves table   |   Searchbar   |   API (from the API Call)  |
|       |   lname   |   Museums table |   API Call |   Render  |
|       |   username   |   JSON |   Faves table |     |
|       |   password   |    |   Triple join |     |
|       |   Auth Service   |       |   JSON   |     |
|       |   Users table   |      |       |     |



## Dividing the Work
|   Dara   |   Lance    |   Arleigh  |  Phil  |
|   --- |   :---:   |   :---:   |   :---:   | 
|   Readme   |   Server: Models   |   React: Museums   |   Starting Templates   |
|   Server: Render    |   Server: Controllers   |   React: Faves + User Profile |   Login + Register + Server |
|   Server: Routes    |         |      |  Search  | 









## Additional Technologies
 Use this section to list all supporting libraries and thier role in the project. 
 - Google Maps API

## Resources

- Google API
- Google
- Stack Overflow 
- MDN 

