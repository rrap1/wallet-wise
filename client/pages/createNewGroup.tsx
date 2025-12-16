import { Link } from "react-router-dom";
import { Button } from "../components/groups-overview/Buttons";
import {ChevronLeft, Plus}  from 'lucide-react'

//do we need to input state here since we're taking in data? - esm
//import {useState} from "react"
//context API is a thing: The Context API provides a way to pass data deeply through the component tree without explicitly passing props down at every level (prop drilling).
// You create a Context and a Provider component that holds the state.
// Consumer components within the Provider's scope can access the context value using useContext

export const CreateNewGroup = () => {
    return (
        <div>
            <div className="flex items-center w-full ">
            <Link to="/">
            <ChevronLeft />
            </Link>
            <h1 className="text-center font-semibold">Create a New Group Trip</h1>
            </div>

            <label>Trip Name</label>   <br></br>
            <input type="text" placeholder = ""/>
            <Button 
                className="flex items-center gap-2 bg-[#3A7FE5] text-white px-4 py-2 rounded font-bold"
                name= "Create New Group" 
                variant= "ho" 
                isActive={true}
                onClick={()=> console.log("Button Click Success!")}
                plusIcon={<Plus />}
                route = "/trip-name"
            />
        </div>
    )
}