# cra-ssr
Server side rendering with CRA.

Test the application with: 
```
yarn start-server
```

## Developer log
Following the [article](https://medium.com/bucharestjs/upgrading-a-create-react-app-project-to-a-ssr-code-splitting-setup-9da57df2040a)

- Create a server folder that is ignored by CRA builds.

### Code Splitting 

This requires simple tweaks on the server 
- edit **server/bootstrap.js** to include the following:
```
plugins: [
   'syntax-dynamic-import',
   'dynamic-import-node',
   'react-loadable/babel'
]
```

- Server app will need to load all modules before rendering. We need the actual component. For this, we’ll use a helper from react-loadable which preloads all async components. Update /server/index.js like this:

```
Loadable.preloadAll().then(() => {
    app.listen(PORT, (error) => {
        // ...
        console.log("listening on " + PORT + "...");
    });
});
```

On the client, let’s use hydrate instead of render:

```
ReactDOM.hydrate(
    <App />,
    document.getElementById('root')
);
```


























































































