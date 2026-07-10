import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type JourneyMode = 'conventional' | 'takaful'

const STORAGE_KEY = 'shaheen-journey-mode'

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

function readStored(): JourneyMode | null {
  if (typeof window === 'undefined') return null
  const v = window.localStorage.getItem(STORAGE_KEY)
  return v === 'conventional' || v === 'takaful' ? v : null
}

export function JourneyProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<JourneyMode | null>(() => readStored())

  useEffect(() => {
    if (mode) window.localStorage.setItem(STORAGE_KEY, mode)
  }, [mode])

  const setMode = (next: JourneyMode) => setModeState(next)
  const reset = () => {
    window.localStorage.removeItem(STORAGE_KEY)
    setModeState(null)
  }

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
