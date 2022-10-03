import { createSlice } from '@reduxjs/toolkit';
import {State} from '../../types'

initialState:State[]=[{
    originLat: 0;
    originLong: 0;
    destinationLat: 0;
    destinationLong: 0;
    selectedOfferId: 0;
}]


const routeSlice = createSlice({
 name: 'routeSlice',
 initialState: {
  routes: [],
 },
});
