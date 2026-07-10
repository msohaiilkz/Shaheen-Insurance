import { createContext, useContext, useState, type ReactNode } from 'react'

export type JourneyMode = 'conventional' | 'takaful'

interface JourneyContextValue {
  /** Selected journey, or null if the user has not chosen yet. */
  mode: JourneyMode | null
  /** True only for the Takaful (Shariah-compliant) journey. */
  isTakaful: boolean
  setMode: (mode: JourneyMode) => void
  /** Clears the choice — returns the user to the entry gate. */
  reset: () => void
}

const JourneyContext = createContext<JourneyContextValue | undefined>(undefined)

/**
 * Session-only: the choice persists while navigating within the app (the
 * provider lives above the router), but a full page reload resets it so the
 * homepage always greets visitors with the two options.
 */
export function JourneyProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<JourneyMode | null>(null)

  const setMode = (next: JourneyMode) => setModeState(next)
  const reset = () => setModeState(null)

  return (
    <JourneyContext.Provider value={{ mode, isTakaful: mode === 'takaful', setMode, reset }}>
      {children}
    </JourneyContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useJourney(): JourneyContextValue {
  const ctx = useContext(JourneyContext)
  if (!ctx) throw new Error('useJourney must be used within a JourneyProvider')
  return ctx
}
