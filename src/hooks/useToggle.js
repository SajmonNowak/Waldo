import React, { useState, useCallback } from 'react'

const useToggle = (initialState) => {
    const [state, setState] = useState(initialState || undefined) 

    const toggle = useCallback(() => setState(state => !state), []);

    return [state, toggle]
}

export default useToggle
