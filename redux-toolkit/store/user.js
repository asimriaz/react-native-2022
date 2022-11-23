import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthAPI from "../api";

// const fetchStudents = createAsyncThunk("student/fetchStudents", async () => {
//     const students = await axios.get(`/api/students`);
//     return students.data;
// });

const getUserAuthentication = createAsyncThunk(
	"user/getUserAuthentication",
	async (args) => {
		//console.log(args);
		const response = await AuthAPI.post(`/signin`, { ...args });
		return response.data;
	}
);

const getUserDetails = createAsyncThunk(
	"user/list",
	async (args) => {
		//console.log(args);
		const response = await AuthAPI.get(`/list`);
		console.log(response.data)
		return response.data;
	}
);

// const updateStudent = createAsyncThunk("student/updateStudent", async (student, { dispatch, getState }) => {
//     const result = await axios.patch(`/api/students/update`, student)
//     if (result.status === 200) {
//         dispatch(showUpdated(result.data))
//         return result.data
//     }
// });

const userSlice = createSlice({
	name: "user",
	initialState: {
		token: null,
		user: {},
		list:[]
	},
	reducers: {
		showUpdated: (state, action) => {
			const std = action.payload;

			state.students = state.students.map((s) =>
				s._id === std._id ? std : s
			);
			state.regno = null;
		},
		setRegNo: (state, action) => {
			const regno = action.payload;
			state.regno = regno;
		},
		setStudent: (state, action) => {
			const { name, value } = action.payload;
			state.student = { ...state.student, [name]: value };
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getUserAuthentication.pending, (state, action) => {});
		builder.addCase(getUserAuthentication.fulfilled, (state, action) => {
			const { token, user } = action.payload;
			state.token = token;
			state.user = user;
		});
		builder.addCase(getUserAuthentication.rejected, (state, action) => {});
		builder.addCase(getUserDetails.fulfilled, (state, action) => {
			state.list = action.payload;
		});
	},
});

export { getUserAuthentication, getUserDetails };
export const { showUpdated, setRegNo, setStudent } = userSlice.actions;
export default userSlice.reducer;
