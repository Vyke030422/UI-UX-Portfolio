import '@mantine/core/styles.css';
import { RootRouter } from './routes/_RootRouter';
import { MantineProvider } from '@mantine/core';
import '@mantine/carousel/styles.css';

export default function App() {
  return (
    <MantineProvider>
      <div className="App">
        <RootRouter />
      </div>
    </MantineProvider>
  );
}
