# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Notes: What I learnt

We are using App Write for Backend as a service.
We will be using html-react-parser: For proper displaying, Redux.
react-hook-form: for better controlling of the form.

We will create two env. one (.env) another is (.env.sample) so that whatever we have we can import it from here instead of taking env everywhere. Sample file is created so that other developers of the team can have the access to atleast know what are the key names of the environment variables and (.sampl) file is pushed in the github.
When we add a new environment variable we need to restart the application.

If we are making the project from the CRA then it is important to define the environment variable from (REACT_APP_<>) and we can access them like process.env.REACT_APP_<> .
But if we create it from the vite then, we define the environment keys like (VITE_<>) and we can access them by 
import.meta.env.VITE_<>.

Now after adding all the environment variable, We will visit appwrite and create a project there(have to configure it properly).
title 
content 
featured image
status
userId

There is a good practice of making a folder and a file and accessing all the values of env file in the object and casting them to the string so that in the production application doesn't crash when deployed. #It is a good practice.