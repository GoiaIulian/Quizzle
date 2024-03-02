import { Home } from '@quizzle/home';
import { MantineProvider } from '@mantine/core';
import { theme } from '@quizzle/branding';

const App = () => (
    <MantineProvider theme={theme}>
        <Home />
    </MantineProvider>
);

export default App;
