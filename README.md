## SignInWithGoogle
Render the sign in with Google button for external users of your website.

## Features
- Renders Google button
- Adjust the look&feel to your liking
- Call an action to handle response on Google Login try

## Usage
- Add the widget to your page
- Connect a string attribute (with unlimited length) to the widget
- Add a micro/nanoflow for the On Response Action.

Everytime a user tries to login via Google the On Response Action will be called and the string attribute will be popuplated with a JWT Token which will hold the information from the user trying to login. An example can be viewed in the documentation:
https://developers.google.com/identity/gsi/web/reference/js-reference#CredentialResponse

Use the import mapping from the example to parse the information of the JWT Token to a Mendix object, once validated you can login the user in Mendix aswell.

## Issues, suggestions and feature requests
https://github.com/hunterkoppenclevr/signInWithGoogle/issues