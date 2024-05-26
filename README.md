# Country App

This application provides a detailed view of country information, including flags 
It is created using Angular for the frontend and uses public counties api to fetch data about countries.

## Note:
This application is only a demo, and does not contain all functionalities! But it is a good showcase of my front-end skills.
This was done with plain css, to show my proficiency in css.

## Cloning the Project

To clone the project, follow these instructions:

```bash
git clone https://github.com/Angel-dev14/country-app.git
cd country-app
npm install
ng serve -o
```
The application will open on localhost:4200

## Login Page
This application provides a login page, you can login as two types of hardcoded users:

```angular2html
1. Admin (username: Admin, password: admin)
2. Operator (username: Operator, password: operator)
```

When logged in as admin, when you navigate to a detailed view, you can see two buttons,
edit and delete, these buttons are only available to Admin Role

## All Countries Page
View all countries and simple details like name, capital city, population & currency

## Detailed Countries Page
Clicking on a country card, you are navigated to the details country page

## Author
Angel Petrushevski
2024-05-26
