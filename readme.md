# BOOK STORE
This is a CAP and SAPUI5 based project, made to present a simple website structure of a book store.

It contains these following folders for the project layout:

Folder / File | Purpose
---------|----------
`app/` | Contians the ui5 items like view, fragment and controller files and configurations.
`db/` | Holds the .csv files for local data and has the schema with the entities. 
`srv/` | Services of the back-end and the business logic is implemented here
`test/` | Holds .http tests for the services
`index.cds` | Is the file that provides the book sample model to other projects
`readme.md` | Holds the information regarding the project.

## To Run
### 1- CAP local server
First in the root of Booksample/ run the following command and install the node modules:
```
npm i
```

After you can run the following command for starting a local CAP dev server:
```
cds watch
```

### 2- UI5 front end
Move from the root of the project into app/bookstore/ folder and run the following command for downloading the necessary node modules:
```
npm i
```

After you can run the following command to start the ui5 local development server:
```
npm start
```