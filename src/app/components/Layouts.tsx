 // Mark this component as a client component

import { AppShell, MantineProvider } from '@mantine/core';
import Sidebar from './Sidebar';


interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  // Define the styles as an object instead of a function
  const styles = {
    main: {
      backgroundColor: '#121212',
      color: 'white',
      paddingLeft: '80px',
    },
  };

  return (
    <MantineProvider>
      <AppShell
        padding="md"
        navbar={{
          width: { base: 80 },
          breakpoint: 'sm',
        }}
        styles={styles} // Pass the styles object directly
      >
        <Sidebar />
        {children}
      </AppShell>
    </MantineProvider>
  );
}
