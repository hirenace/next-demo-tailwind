
# Next.js with tailwind CSS

Demo for next.js with tailwind css

## Run Locally

Clone the project

```bash
  git clone https://github.com/hirenace/next-demo-tailwind.git
```

Go to the project directory

```bash
  cd next-demo-tailwind
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm dev
```

Login mechanism uses fake API URLs 
```bash
  (https://dummyjson.com/docs/auth)
  username - kminchelle
  password - 0lelplR
```

## Running Tests

To run tests, run the following command

```bash
  pnpm test
```


## Deployment

To deploy this project run

```bash
  pnpm build
```


## Tech Stack

**Client:** React, Next, TailwindCSS

## Usage/Examples

```javascript
  import React, { useEffect } from 'react';

  import '../styles/tailwind.css';

  const MyApp = ({ Component, pageProps }) => {
      return <Component {...pageProps} />;
  }

  export default MyApp;

```


## Acknowledgements

 - [Tailwind CSS](https://tailwindcss.com/docs/installation)
 - [Next Js](https://nextjs.org/docs)
 - [React JS](https://react.dev/learn)
 - [Typescript](https://www.typescriptlang.org/docs/)



## Roadmap

- Currently below package are using 

        autoprefixer:
            specifier: ^10.4.16
            version: 10.4.16(postcss@8.4.32)
        jest-environment-jsdom:
            specifier: ^29.7.0
            version: 29.7.0
        next:
            specifier: ^14.0.4
            version: 14.0.4(@babel/core@7.23.6)(react-dom@18.2.0)(react@18.2.0)
        postcss:
            specifier: ^8.4.32
            version: 8.4.32
        react:
            specifier: ^18.2.0
            version: 18.2.0
        react-dom:
            specifier: ^18.2.0
            version: 18.2.0(react@18.2.0)
        tailwindcss:
            specifier: ^3.3.7
            version: 3.3.7