import React, {createContext, useContext, useReducer} from 'react'

// Prepare the datalayer to store data
export const StateContext = createContext()

// Wrap the data and provide the datalayer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// Pull information from the datalayer and make it available to be used by other components
export const useStateValue = () => useContext(StateContext)