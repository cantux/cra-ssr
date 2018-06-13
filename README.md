# cra-ssr
Server side rendering with CRA.

Test the application with: 
```
yarn start-server
```

## SSR cases

So here is a combination of the things we would want to do with code-splitting and SSR together

1. Preload an dynamic imported component during ssr.
2. Imperative clientside preloading
3. See that preloading is dependent on state.
4. Load a library, use it from a dynamic imported component and see it's not chunked or fetched from server. 
5. Further investigation of state with Redux
6. Isomorhic fetch

## Give credit where it's due
Followed the [article](https://medium.com/bucharestjs/upgrading-a-create-react-app-project-to-a-ssr-code-splitting-setup-9da57df2040a)

Then followed the react-loadable [guide](https://github.com/jamiebuilds/react-loadable) which becomes a little confusing in the last parts.

