import {configureStore} from "@reduxjs/toolkit"
import servicesReducer from "./services/reducer"

export const store = configureStore({
    reducer: {
        services: servicesReducer
    }
})