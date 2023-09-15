import React from 'react';

const Blog = () => {
    return (
        <div className='container px-4'>
            <h3 className='text-3xl font-semibold'>01. When Context API has been used?</h3> <br />
            <p className='mt-3' style={{ color: "#717171" }}>The Context API in React is used to manage global state that can be accessed by multiple components in a React application. It is particularly useful when we have a large or complex application with many components that need to share the same data or state.</p> <br />
            <p style={{ color: "#717171" }}>The Context API allows us to create a centralized store or container of data, which can then be accessed by any component in the application that needs it. This eliminates the need to pass data through multiple levels of nested components as props, which can make our code more readable and easier to maintain.</p>
            <p className='mt-3' style={{ color: "#717171" }}>We might use the Context API in React when: </p>
            <ol className='mt-3' style={{ color: "#717171" }}>
                <li>01. We have data or state that needs to be shared across multiple components in your application.</li> <br />

                <li>02. We want to avoid "prop drilling" or passing props down through multiple levels of nested components.</li> <br />

                <li>03. We want to keep your application state organized and easy to manage.</li> <br />

                <li>04. We want to create reusable components that can be used in multiple parts of your application, without having to pass props to them every time.</li>
            </ol>

            <p className='mt-3' style={{ color: "#717171" }}>Overall, the Context API is a powerful tool that can help simplify the management of global state in large or complex React applications.</p>

            <h3 className='text-3xl font-semibold mt-8'>02. What is Custom Hook?</h3> <br />
            <p className='mt-3' style={{ color: "#717171" }}>In React, a custom hook is a JavaScript function that starts with the word use, and allows us to reuse logic and stateful behavior across different components.</p> 
            <p className='mt-3' style={{ color: "#717171" }}>Custom hooks are created by combining existing hooks like 'useState', 'useEffect', and useContext with any other JavaScript logic we need. Once created, custom hooks can be used just like any other built-in hook in our React components.</p> 
            <p className='mt-3' style={{ color: "#717171" }}>The purpose of a custom hook is to abstract away complex or repetitive logic from our components, making them simpler and more readable. By creating a custom hook, we can encapsulate functionality that may be needed in multiple parts of your application, making it easier to manage and maintain.</p>

            <h3 className='text-3xl font-semibold mt-8'>03. What is useRef() and when does it work?</h3> <br />
            <p className='mt-3' style={{ color: "#717171" }}>'useRef()' is a hook in React that returns a mutable ref object. It can be used to store a mutable value that persists across re-renders and does not trigger a re-render when the value is updated.</p>
            <p className='mt-3' style={{ color: "#717171" }}>The 'useRef()' hook can be used in several ways, including:</p>
            <ol className='mt-3' style={{ color: "#717171" }}>
                <li>01. Accessing the underlying DOM element of a React component. For example, we can use 'useRef()' to get a reference to an input field and then access its value.</li> <br />
                <li>02. Storing and accessing mutable values that need to persist across re-renders. For example, we can use 'useRef()' to store a timer ID, a socket connection, or any other mutable value that needs to persist across re-renders.</li> <br />
                <li>03. Creating a reference to a child component. For example, we can use 'useRef()' to get a reference to a child component and then call its methods or access its state.</li> <br />
            </ol>

            <h3 className='text-3xl font-semibold mt-8'>04. What is useMemo() and when does it work?</h3> <br />
            <p className='mt-3' style={{ color: "#717171" }}>'useMemo()'' is a hook in React that allows us to memoize the result of a function so that it is only recalculated when its dependencies change. Memoization is a technique that caches the results of expensive function calls and returns the cached result when the same inputs occur again.</p> <br />
            <p className='mt-3' style={{ color: "#717171" }}>The useMemo() hook takes two arguments: a function that returns the memoized value and an array of dependencies. The dependencies are used to determine when the memoized value needs to be recalculated.</p> <br />
        </div>
    );
};

export default Blog;