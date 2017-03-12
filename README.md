Car Stock
====

A small React app that allows searching for cars based on a JSON data set, created as part of an assignment.

Usage
---

After installing the dependencies using `npm install`:

* `npm run start`: Starts a web server for development
* `npm run build`: Builds the app for production in the `/build` directory
* `npm run test`: Runs the interactive test watcher

Also see [Create React App](https://github.com/facebookincubator/create-react-app).

UI & Functionality
---

The UI mainly consists of a single text input to enter a search query, and a table to display the results. The query can contain multiple words separated by spaces, all of which have to present in either the cars' type, color or price. Additionally, words starting with "<" or ">" and followed by a number can be used to search for cars by their max or min price, respectively.

Implementation
---

The app was created with [Create React App](https://github.com/facebookincubator/create-react-app) for simplicity. [Pure CSS](https://purecss.io/) is used for styling the table.
