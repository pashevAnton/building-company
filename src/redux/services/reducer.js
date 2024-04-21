import {createSlice} from "@reduxjs/toolkit"

const servicesSlice = createSlice ({
    name: 'services',
    initialState: {
        currentService: null
    },
    reducers: {
        setCurrentService: (state, action) => {
            state.currentService = action.payload
        }
    }
})

export const {setCurrentService} = servicesSlice.actions
export default servicesSlice.reducer