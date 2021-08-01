<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Circle-icons-calculator.svg/1200px-Circle-icons-calculator.svg.png" alt="calculator operations" width="80" height="80">

  <h3 align="center">React Calculator</h3>

  <p align="center">
    My solution to making a calculator in React.
    <br />
    <a href="https://hy-react-calculator.netlify.app"><strong>View the hosted version »</strong></a>
    
</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/4dae2ee6-b664-44b2-b35f-5e28a18cd032/deploy-status)](https://app.netlify.com/sites/hy-react-calculator/deploys)

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#assumptions">Assumptions</a>
    </li>
    <li><a href="#limitations">Limitations</a></li>
    <li><a href="#how-to-run">How to run</a></li>
    <li><a href="#future-features">Future features</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

This is a calculator app that supports the following operations:

-   Addition
-   Subtraction
-   Multiplication
-   Division

Additional features:

-   Clear operation
-   Chaining equations

## Built With

-   [React](https://reactjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)

## Assumptions

### Delivery

-   End users will be able to access source code on a public repository
-   End users will be able to access the hosted version of the project

### Schedule

-   Developer will be available outside of work hours, and at weekend to complete the project
-   Project will be completed by 02/08/21

### Scope

-   The project will meet the minimum criteria of functionality, being the standard calculator operations

### Technology

-   The project will be written to be a web application, using React

## Limitations

### Lack of testing

Due to short amount of time, functionality was prioritised over testing, however if the project was larger then testing would be a priority.
Testing would be implemented using Jest, as well as either Enzyme or React Testing Library.

### Only basic operations

Currently the calculator can only perform basic operations, however if the future features were to be added it would start to inherit some features of a scientific calculator.

### No number key support

Another feature that is on the roadmap for the the future, is to allow keyboard input, which is on list for future features. Again due to the time contstraints I decided to leave this feature out of the MVP.

### Some unescessary useEffect calls

There's a lot of dependencies to the useEffect in App.tsx when the only absolute dependency is secondNum being set/changed. It would be good to go back and refactor this in a way that is more efficient. Further research into useCallback would be beneficial.

## How to run

### Prerequisites

-   node (min version v15.13.0) and npm (min version 7.17.0)
    -   either download by this [link](https://nodejs.org/en/download/)
    -   or install using homebrew
        `brew install node`
    -   Make sure you have them installed by running the following commands
        `node -v` and `npm -v`

### Clone

-   clone this machine using either:
    -   `git clone https://github.com/harryyork97/react-calculator`
    -   `git clone git@github.com:harryyork97/react-calculator.git`

### Install

-   Install NPM packages with:
    `npm install`

### Run

-   Run the project locally with:
    `npm run start`
-   Access in browser on port 3000

## Future features

### Other operations

-   Ability to add brackets to equations to indicate excution preference
-   Ability to use percentage operation in equations
-   Ability to square or cube number in viewport
-   Ability to use keyboard to press buttons
