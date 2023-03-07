'use client';

import { ThemeProvider } from "next-themes";

interface IProps {
  children: React.ReactNode
};

const Provider = ( { children } : IProps) => {
    return (
        <ThemeProvider enableSystem={true} attribute="class" >
            <div className="pb-4 dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen" >
                {children}
            </div>
        </ThemeProvider>

    )
};

export default Provider;