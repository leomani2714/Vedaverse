function App() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Header),
        React.createElement(Hero),
        React.createElement(Scriptures),
        React.createElement(Chants),
        React.createElement(SacredVerses),
        React.createElement(Learn),
        React.createElement(Footer)
    );
}

const root = ReactDOM.createRoot(
    document.getElementById("react-root")
);  

root.render(
    React.createElement(App)
);