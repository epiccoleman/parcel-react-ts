import React, { FunctionComponent } from 'react'

export type AppProps = {
    name?: string
}

const App: FunctionComponent<AppProps> = ({name}) => <div>Hello {name ? name : "world"}!</div>

export default App;