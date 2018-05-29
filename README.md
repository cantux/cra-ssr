# cra-ssr
Server side rendering with CRA.

Test the application with: 
```
yarn start-server
```

## Developer log
Followed the [article](https://medium.com/bucharestjs/upgrading-a-create-react-app-project-to-a-ssr-code-splitting-setup-9da57df2040a)

Then followed the react-loadable [guide](https://github.com/jamiebuilds/react-loadable) which becomes a little confusing in the last parts.

So here is a combination of the things we would want to do with code-splitting and SSR together

- Create a loadable HOC. See SomeAsyncComponent.js
- Load multiple component. See MultipleComponent.js
- Get async component from server
  - We are depending on react-loadable babel plugin
- Preload on server
- Preload on client side without actually rendering on the server.




















































































