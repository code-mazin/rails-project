import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import JobList from "../pages/JobList";
import CourseList from "../pages/CourseList";
import Profile from "../pages/Profile";



function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // auto-login
        fetch("/me").then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user))
            }
        });
    }, []);

    
    
    if (!user) return <Login onLogin={setUser} />;
    
    return (
        <>
        <NavBar user={user} setUser={setUser} />
        <main>
            <Switch>
                <Route path="/Login">
                    <Login onLogin={setUser} />
                </Route>
                <Route exact path="/">
                    <JobList />
                </Route>
                <Route exact path="/courses">
                    <CourseList />
                </Route>        
                <Route exact path="/Profile">
                    <Profile />
                </Route>        
            </Switch>
        
        </main>
            
        </>
    );
}

export default App;