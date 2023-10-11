/** @format */

import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/User/userSlice";
import Login from "./Authentication/Login";
import { auth } from "./Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Widgets from "./Widgets/Widgets";

function App() {
	const dispatch = useDispatch();
	let user = useSelector((state) => state.user.user);
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				// Logged in
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoURL: userAuth.photoURL,
					})
				);
			} else {
				// Not logged in
				dispatch(logout());
			}
		});

		return () => unsubscribe(); // Cleanup the subscription when component unmounts
	}, []);

	return (
		<div className="App">
			<Header />
			{user != null ? (
				<div className="app_body">
					<Sidebar />
					<Feed />
					<Widgets/>
				</div>
			) : (
				<Login />
			)}
		</div>
	);
}

export default App;
