const element = React.createElement('div', {id: 'parent'}, 
    React.createElement('div', {id: 'child'}, 
        [React.createElement('h1', {id: 'h1'}, '1selash'),
        React.createElement('h2', {id: 'h2'}, '2selash')]
    )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);