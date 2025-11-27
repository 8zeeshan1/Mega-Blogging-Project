import {configureStore} from '@reduxjs/toolkit'
import slice from './slices'

const store = configureStore({
    reducer: slice
});

export default store