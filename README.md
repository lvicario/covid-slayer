### Setup
```json
$ git clone https://github.com/lvicario/covid-slayer.git
$ cd covid-slayer
$ yarn
$ yarn dev
```
> `yarn dev` will concurrently run scripts for express server/api & the app

### Demo
1. Register by clicking the register link
> Will auto login & redirect to game page after successful registration
2. Click start button
3. Logout & login again using the registered email & password.

### Technology/library used
#### App
- [React](https://reactjs.org/)
- [Redux](https://react-redux.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-components](https://styled-components.com/)
- [yup](https://github.com/jquense/yup)
- [jwt-decode](https://github.com/auth0/jwt-decode)
- [formik](https://formik.org/docs/overview)
- [axios](https://github.com/axios/axios)

#### Server
- [express](https://expressjs.com/)
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [cors](https://github.com/expressjs/cors)
- [joi](https://github.com/sideway/joi)

#### DB
- [mongoDB](https://www.mongodb.com/)
- [mongoose](https://mongoosejs.com/)

~~For mock api:~~
- ~~[json-server](https://github.com/typicode/json-server)~~
- ~~[json-server-auth](https://github.com/jeremyben/json-server-auth)~~
