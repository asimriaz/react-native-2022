import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthAPI from "../../api";
import { navigate } from "../screens/RootNavigation";

const authReducer = (state, action) => {
	switch (action.type) {
		case "error":
			return { ...state, error: action.payload };
		case "signin":
			return { ...state, token: action.payload };
		case "signout":
			return { ...state, token: null };
		default:
			return state;
	}
};

const signout = (dispatch) => async () => {
	await AsyncStorage.removeItem("token");
	dispatch({ type: "signout" });
	navigate("Login");
};

const ResolveSignIn = () => {
	return async () => {
		const token = await AsyncStorage.getItem("token");
		if (token) {
			//console.log("Signed In");
			//dispatch({ type: "signin", payload: token });
			navigate("Dashboard");
		} else {
			navigate("Login");
		}
	};
};

const signin = (dispatch) => {
	return async ({ email, password }) => {
		await AuthAPI.post("/signin", { email, password })
			.then((response) => {
				//console.log(response.data, typeof response.data);
				if (typeof response.data === "string") {
					dispatch({
						type: "error",
						payload: response.data,
					});
				} else {
					AsyncStorage.setItem("token", response.data.token);
					AsyncStorage.setItem("userid", response.data.user._id);
					dispatch({ type: "signin", payload: response.data.token });
					navigate("Dashboard");
				}
			})
			.catch((err) => {
				//console.log(err.message);
			});
	};
};

export const { Context, Provider } = createDataContext(
	authReducer,
	{ signin, ResolveSignIn, signout },
	{ token: null, error: null }
);
