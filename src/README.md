# STATE AND PROPS
If there is any update in state or props, the component will automatically get rerendered and DOM will be updated. If there is no change, then DOM doesn’t get touched at all.

# STATE USING
State is only used to store the internal values of a component, which affects that component only. States are mutable.

# PROPS DEFINITION
Props are generally used to pass the data from the parent component to the child component which always move from parent component to child component. all props are read-only and components should never modify their own props.

# useEFFECT
the useEffect Hook will be invoked when the component mounts. 
Notice the empty array [] as the second argument, that informs the useEffect Hook that it only needs to execute once, when the component mounts.

# CUSTOM HOOKS
when you have a component logic that needs to used by multiple components, we can extract that logic to a custom hook
Custom hooks starts "use" 