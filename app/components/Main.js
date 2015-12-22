import React from 'react'
import Navigation from './Navigation'

const Main = ({history, children}) => {
    return (
        <div className="main-container">
            <Navigation history={history} />
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default Main
