# Express.js Async Error Handling

This repository demonstrates a common error in Express.js applications: improper handling of errors within asynchronous middleware or route handlers.  Unhandled promise rejections can lead to application crashes or unexpected behavior. The solution shows best practices for robust error handling.

## Bug
The `bug.js` file shows an example where an asynchronous operation (`someAsyncOperation`) might throw an error.  The error handling is insufficient, and if the asynchronous operation fails, the error isn't properly handled by Express.js, leading to a potential crash or silent failure.

## Solution
The `bugSolution.js` file demonstrates the correct way to handle asynchronous errors in Express.js. It uses a centralized error handler to capture and manage errors from all routes, providing better error handling and preventing unexpected crashes.