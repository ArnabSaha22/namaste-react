import { createContext } from "react"

const userContext = createContext({
    user :{
        name: "Arnab Saha",
        email: "s.arnab022@gmail.com"
    }
})

userContext.displayName="Context1"

export default userContext