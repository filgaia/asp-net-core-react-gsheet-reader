## Introduction

Example of reading an Google Sheet with ASP.Net Core with React UI.

See a live Demo [here](https://presidentswebvs.azurewebsites.net/)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find some information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

This app was built with:
- [ASP.NET Core](https://get.asp.net/) and [C#](https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx) for cross-platform server-side code
- [React](https://facebook.github.io/react/) and [Redux](https://redux.js.org/) for client-side code
- [Bootstrap](http://getbootstrap.com/) for layout and styling

The App have:

- **Development server integration**. In development mode, the development server from `create-react-app` runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.
- **Efficient production builds**. In production mode, development-time features are disabled, and your `dotnet publish` configuration produces minified, efficiently bundled JavaScript files.

The `ClientApp` subdirectory is a standard React application based on the `create-react-app` template. If you open a command prompt in that directory, you can run `npm` commands such as `npm test` or `npm install`.

## Google Sheet Reading

You need to follow the steps [here](https://www.twilio.com/blog/2017/03/google-spreadsheets-and-net-core.html) to create a client-secret.json file

- Go to the Google APIs Console.
- Create a new project.
- Click Enable API. Search for and enable the Google Drive API and the Google Sheets API.
- Create credentials for a Web Server to access Application Data.
- Name the service account and grant it a Project Role of Editor.
- Download the JSON file.
- Find the client_email entry. Copy this value and on your spreadsheet click the **Share** button and paste the email you just copied. This will give your project the correct access rights on that file.
  
## Swagger integration

Created using [Swashbuckle](https://github.com/domaindrivendev/Swashbuckle.AspNetCore)