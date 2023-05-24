import { AppRoutes } from './pages/routes'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from './contexts/theme-context'

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  body {
    font-family: 'Roboto Mono', monospace;
  }

  h1, h3 {
    text-transform: uppercase;
  }
`

export default App;