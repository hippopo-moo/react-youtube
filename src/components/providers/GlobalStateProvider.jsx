import React, { createContext } from 'react'

export const GlobalStateContext = createContext({});

export const GlobalStateProvider = props => {
	const { children } = props;

	const sampleObj = { sampleValue : "POPULAR" }

	return (
		<GlobalStateContext.Provider value={sampleObj}>
			{/* { props.children } */}
			{ children }
		</GlobalStateContext.Provider>
	)
}

