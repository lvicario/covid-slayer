### Setup
```json
$ git clone https://github.com/lvicario/covid-slayer.git
$ cd covid-slayer
$ yarn
$ yarn mock
```
> `yarn mock` will concurrently run scripts for the mock api (json-server & json-server-auth) & the app

### Demo
1. Register by clicking the register link
> Will auto login & redirect to game page after successful registration
2. Click start button
3. Logout & login again using the registered email & password.

### Technology/library used
- [React](https://reactjs.org/)
- [Redux](https://react-redux.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-components](https://styled-components.com/)
- [yup](https://github.com/jquense/yup)
- [jwt-decode](https://github.com/auth0/jwt-decode)
- [formik](https://formik.org/docs/overview)
- [axios](https://github.com/axios/axios)

For mock api:
- [json-server](https://github.com/typicode/json-server)
- [json-server-auth](https://github.com/jeremyben/json-server-auth)
