import React, { createContext, useState, useContext, ReactNode, SetStateAction, Dispatch } from "react";

// Step 1: Define the types for notes
interface Note {
  id?: undefined | null | number;
  title: string;
  description: string;
}

// Step 2: Define the context type
interface NotesContextType {
  notes: Note[];
  setNotes: Dispatch<SetStateAction<Note[]>>;
}

// Step 3: Create a new context for managing notes
const NotesContext = createContext<NotesContextType>({
  notes: [],
  setNotes: () => {},
});

// Step 4: Create a provider component to wrap your entire application
export const NotesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Step 5: Move the state and state-modifying functions to the provider component
  const [notes, setNotes] = useState<Note[]>([]);

  // Step 6: Pass the notes state and addNote function down through the context provider
  return <NotesContext.Provider value={{ notes, setNotes }}>{children}</NotesContext.Provider>;
};

// Step 7: Custom hook to use the notes context
export const useNotes = (): NotesContextType => useContext(NotesContext);
