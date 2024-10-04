import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

interface FormState {
	formData: FormData[];
	status: 'idle' | 'loading' | 'success' | 'error';
	errorMessage: string | null;
}

const initialState: FormState = {
	formData: [],
	status: "idle",
	errorMessage: null,
};

export const fetchFormData = createAsyncThunk("form/fetchFormData", async (_, { rejectWithValue }) => {
	try {
		const response = await axios.get<FormData[]>("http://localhost:3001/formData");
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			return rejectWithValue(error.response?.data);
		}
		return rejectWithValue("Something went wrong");
	}
});

export const submitFormData = createAsyncThunk("form/submitFormData", async (formData: FormData, { rejectWithValue }) => {
	try {
		const response = await axios.post("http://localhost:3001/formData", formData);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			return rejectWithValue(error.response?.data);
		}
		return rejectWithValue("Something went wrong");
	}
});

export const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		setFormData: (state, action: PayloadAction<FormData[]>) => {
			state.formData = action.payload;
		},
		setStatus: (state, action: PayloadAction<"idle" | "loading" | "success" | "error">) => {
			state.status = action.payload;
		},
		setErrorMessage: (state, action: PayloadAction<string | null>) => {
			state.errorMessage = action.payload || 'Something went wrong';
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchFormData.pending, (state) => {
			state.status = 'loading';
			state.errorMessage = null;
		});
		builder.addCase(fetchFormData.fulfilled, (state, action: PayloadAction<FormData[]>) => {
			state.formData = action.payload;
			state.status = 'success';
		});
		builder.addCase(fetchFormData.rejected, (state, action) => {
			state.status = 'error';
			state.errorMessage = action.error.message || 'Something went wrong';
		});
	},
});

export const { setFormData, setStatus, setErrorMessage } = formSlice.actions;

export default formSlice.reducer;