# Niemands Boilerplate built with NX

This is a boilerplate built with NX, React, NextJS, Express with Typescript Flavor, already configured with TailwindCSS and Redux 


## Setup

- clone this repo

```sh
git clone https://github.com/Nie-Mand/Typescript-boilerplate.git
```

- change name of the project
  - `name` in _package.json_
  - `npmScope` in _nx.json_
- install dependencies

```sh
npm i
```

## Project Structure

```
    .
    ├──. apps                   # My Projects
    |  ├──── api                  # Express API
    |  ├──── webapp               # React App
    |  └──── nextapp              # Next App
    ├──. libs                   # Shared Libraries
    |  ├──── ui                   # React UI Library (Design System)
    |  └──── shared               # Functions and Utilities
    ├── tools                   # Tools and utilities
    ├── .env                    # Environment Variables
    └── README.md
```

## Use a shared UI Component or Utility

```ts
import { Button } from '@ui'
import { sharedFunction } from '@shared'
```

## Launch Servers

```sh
npm run dev:api # to run the backend
npm run dev:webapp # to run the react app
npm run dev:nextapp # to run the NextJS app
```

## API structure
+ **routes**: where you structure your Express Routes
+ **controllers**: Where you keep controllers that they'll be used in routes
+ **services**: where you keep the services that will interact with the model
> this api was supposed to use TypeORM entities but it's not implemented yet
> The Api already contains authentification with JWT built manually and a Login with GitHub route

## React App structure
+ **components**: where you keep your shared app's components  that lives in your project context
+ **pages**: where you keep your frontend routes, where each route in defined as a folder with `index.tsx` file inside the `pages/` folder, plus an object that contains the path and if it requires authentification in `src/app/app.routes.ts`
+  **types**: where you keep your typescript types
+  **redux**: a redux store configured with *Redux Saga* and *Redux first History*, plus folders to organize your actions, redux user defined hooks, reducers, sagas, and api services, plus some helper functions that you can find
+  **/assets**: for assets like images and fonts
> this api was supposed to use TypeORM entities but it's not implemented yet
   
## what's in `/shared`
+ Avatar Link generator based on [Dicebear](https://avatars.dicebear.com/) (`avatar`)
+ JWT and Bcrypt functions to sign, hash and verify with friendly functions names (`createToken, verifyToken, hashPassword, verifyPassword`) 
+ Send Email function based on *nodemailer* (`sendEmail`)
+ Send SMS and Verify Phone utilities based on *Twilio* (`sendSMS, createVerifyPhoneNumberRequest, verifyPhoneNumber`)
+ Database connections -currently only for CockroachDB- (`connectToCockroachDb`)
+ other stuffs that I thought I would need in every project

> There's also `@ui` library for a shared design system and `classes.scss` to use the *@apply* feature of **TailwindCSS** 



### Notes
+ There's a NextJS App included but I didn't use it but I believe it could be a great addition to any project
