# StudentsCodeChallengeUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Getting Started

Clone the repository

```
git clone https://github.com/Vicno/students-code-challenge-ui.git
```

Install all needed dependencies:

```
npm install
```

Run the Project:

```
ng serve
```

Running the UTs:

```
ng test
```

### About the project

This project is a complement to the [students-code-challenge-api](https://github.com/Vicno/students-code-challenge-api.git) and is intended to run alongside it, because of this in order to have this project work as intended both must be running at the same time.

This UI handles a simple API that creates, updates, deletes and asigns students and classes, this is done with NgRx as a backbone to handle states and has 3 main pages, the Home Page, a Students Page and a Class page.

## Using the UI

First make shure that you have the API running and up to date, as the UI depends on it to function.

Second go to 'http://localhost:4200/', there you will see a Home page that consists of 2 Lists, one for classes and one for students, these are only for reference, to navigate to the other pages use the selector on the header to the right.

### Students

This page contains a more detailed list of all the students saved on the API, the topmost list item is a button that allows the user to add aditional students to the list.

Each list item has 3 actions on the rightmost sector, the eye displays the detail of all classes the student is enrolled if any, the pencil allows the edition of the name and lastname and the trashcan deletes the user.

Each action will dinamically update the list, tough it might take some instants to reflect it.

Lastly outside the list there is a search area that allows the filtering of the students by name and lastname.

### Classes

The classes page is moslty the same as the students one with one big difference, there is a way to show all students not added to a class and add them in bulk, and a way to see all students added to a class and remove them in bulk, they correspond to the first 2 leftmost action icons.

## Functional considerations

The UI has been designed to work with a desktop or laptop in mind and will not be responsive to mobile devices, additionally even tough the error scenarios are controlled and show relevant error messages on the network console the addition of snackbars even tough cosidered has not been added due to time considerations.
