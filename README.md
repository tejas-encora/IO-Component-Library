

# Iodine Component Library (mat-lib-test)

### Build Process

1. To build the master library, execute the following command:
    ```bash
    npm run build
    ```

### Adding Components to `/dist/*.js` files

1. Import each Material Web component you're using:
    ```javascript
    import '@material/web/button/filled-button.js';  // Import each component being used
    ```

2. Import the fonts used by the components:
    ```javascript
    import '@fontsource/lato/400.css';  // Or replace with whatever fonts your components use
    ```

3. Import the generated stylesheet:
    ```javascript
    import './style.css';  // This is the CSS generated from your build process
    ```

### Publishing to npm

1. To publish, run:
    ```bash
    npm publish
    ```

## For Consumer Apps

### Installation

1. Install the Iodine test package:
    ```bash
    npm install mat-lib-test
    ```

### Currently Available Components

- `IOButtonFilledSmall`
- `IOIconButtonFilledSmall`

