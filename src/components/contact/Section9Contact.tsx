import * as React from "react"
import { useIsMobile } from "@/hooks/use-mobile"

const DesktopContact = React.lazy(() => import("./DesktopContact"))
const MobileContact = React.lazy(() => import("./MobileContact"))

const Section9Contact = () => {
  const isMobile = useIsMobile()

  return (
    <React.Suspense fallback={null}>
      {isMobile ? <MobileContact /> : <DesktopContact />}
    </React.Suspense>
  )
}

export default Section9Contact
