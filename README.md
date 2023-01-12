![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
[![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)](http://forthebadge.com)
[![SASS](https://img.shields.io/badge/Sass-hotpink.svg?style=for-the-badge&logo=sass&logoColor=white)](http://forthebadge.com)

# A React modal component
## 1. Technologies

- Javascript
- SASS
- React

## 2. Author

- [Jean-Charles Maurice](https://github.com/Cadegan/)
- Version : 0.1

## 3. Project

### 3.1 Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) or [NPM](https://www.npmjs.com/)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Yarn version
yarn --version

# Check NPM version
npm --version
```

### 3.2 Installing

**NPM**

    npm i cadegancode-react-modal

or

**YARN**

    yarn add cadegancode-react-modal

## 4. Repository

The repository is available at [`https://github.com/Cadegan/react-modal-p14.git`](https://github.com/Cadegan/react-modal-p14.git)

## 5. How to use?

Import the modal into your React application:

```JSX
import { Modal } from "cadegancode-react-modal";
import { useState } from "react";
```

Then, add the following code :

```JSX
const [showModal, setShowModal] = useState(false);
//
//
<Modal openModal={showModal} closeModal={() => setShowModal(false)}>
    {"Edit your message here"}
</Modal>
```

## 6. Style overrides

The modal component comes with a default theme. Override it with a css if you want to apply a custom design.
