import { Link } from "react-router-dom";
import { Button } from "../components/groups-overview/Buttons";
import { Form } from "../components/groups-overview/Forms";
import {ChevronLeft, Plus}  from 'lucide-react'
export const CreateNewGroup = () => {
    return (
        <div>
            <Link to="/">
            <ChevronLeft />
            </Link>
            <h1>Create New Group</h1>
            <h2>Group Name</h2>
            <Form/>
            <Button 
                className="flex items-center gap-2 bg-[#3A7FE5] text-white px-4 py-2 rounded font-bold"
                name= "Create New Group" 
                variant= "ho" 
                isActive={true}
                onClick={()=> console.log("Button Click Success!")}
                plusIcon={<Plus />}
            />
        </div>
    )
}