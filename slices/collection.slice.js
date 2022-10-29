import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import collectionService from "../services/collection.service";
const { saveInCollection, getCollections } = collectionService;

//initialize collections state
const initialState = {
    collections: [],
    singleCollection: null,

};

export const fetchCollections = createAsyncThunk(
    "collections/fetchCollections",
    async () => {
        const result = await getCollections();
        return result;
    }
);

export const saveInColection = createAsyncThunk(
    "collections/saveInColection",
    async (id) => {
        const result = await saveInCollection(id);
        //console.log("the result of the single collection is: ", result);
        return result;
    }
);

export const addQuoteToCollection = createAsyncThunk(
    "collections/addQuoteToCollection",
    async (params) => {
        const result = await saveInCollection({...params});
    
        //console.log("the result of the single collection is: ", result);
        //update the collection state with the new quote
        fetchCollections();
        return result;
    }
);

export const getSingleCollection = createAsyncThunk(
    "collections/getSingleCollection",
    async (params) => {
        //set the name of the collection
        
        const result = await collectionService.getSingleCollection(params.id);
        result.name = params.name;
        return result;
    }
);


export const createCollection = createAsyncThunk(
    "collections/createCollection",
    async (name) => {
        const result = await collectionService.createCollection(name);
        //update the collections state with the new collection
        return result;
    }
);


//create collections slice
export const collectionsSlice = createSlice({
    name: "collections",
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchCollections.fulfilled]: (state, action) => {
            state.collections = action.payload;
        },
        [saveInColection.fulfilled]: (state, action) => {
            state.collections = [...state.collections, action.payload];
        },
        [getSingleCollection.fulfilled]: (state, action) => {
            state.singleCollection = action.payload;
            
        },
        [createCollection.fulfilled]: (state, action) => {
            state.collections.results = [...state.collections.results, action.payload];
            state.collections.count = state.collections.count + 1;
        },
        [addQuoteToCollection.fulfilled]: (state, action) => {
            //update the collection quote count where action.payload.collection is the id of the collection
            const collection = state.collections.results.find(c => c.id === action.payload.collection);
            collection.total_quotes = collection.total_quotes + 1;
        }

    },
    
})

export default collectionsSlice.reducer
