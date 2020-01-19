import React from "react"
import layoutStyles from "./layout.module.scss"
import Header from "./header"

const Layout = ({children}) => (
<div className={layoutStyles.container}>
    <Header />
    {children}
</div>
)

export default Layout