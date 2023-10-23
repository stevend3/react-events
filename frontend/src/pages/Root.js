import React from "react"
import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

const RootLayout = () => {
  // const navigation = useNavigate()

  return (
    <React.Fragment>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading ...</p>} */}
        <Outlet />
      </main>
    </React.Fragment>
  )
}

export default RootLayout