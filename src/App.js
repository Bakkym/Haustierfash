import React from "react"
import "./App.css"
import { useAuth0 } from "@auth0/auth0-react"
import LoginButton from "./components/LoginButton"
import Profile from "./components/Profile"
import LogoutButton from "./components/LogoutButton"

function App() {
	const { isAuthenticated, isLoading } = useAuth0()
	if (isLoading) return <h1>Loading...</h1>
	return (
		<div className="App">
			<h1>Haustierfash</h1>
			{isAuthenticated ? <LogoutButton /> : <LoginButton />}
			<Profile />

			<form action="../../post" method="post" className="form">
				<button type="submit">Connected?</button>
			</form>
		</div>
	)
}

export default App
