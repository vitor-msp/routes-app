import { NavLink } from "react-router-dom"

export const HomePage =() => {
    return <div>
        <div>register graph
            <NavLink  to={"/register-graph"}>ok</NavLink>
        </div>
        <div>view graph
            <NavLink  to={"/view-graph"}>ok</NavLink>
        </div>
        <div>get routes from graph
            <NavLink  to={"/get-routes"}>ok</NavLink>
        </div>
        <div>get min route from graph
            <NavLink  to={"/get-min-route"}>ok</NavLink>
        </div>
    </div>
}