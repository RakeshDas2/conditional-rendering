import React from "react"
const ConditionalContext=React.createContext()
const ConditionalContextProvider=ConditionalContext.Provider
const ConditionalContextConsumer=ConditionalContext.Consumer

export default ConditionalContext;
export {ConditionalContextProvider,ConditionalContextConsumer};
