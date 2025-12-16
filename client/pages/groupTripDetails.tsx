import { List } from "../components/groups-overview/List"
import { Button } from "../components/groups-overview/Buttons";
import { ChevronLeft, Plus } from "lucide-react";
import { Link } from "react-router-dom";


//do we also have to think about state here? ... or are we fine with hardcoding info?

export const GroupTripDetails = () => {
    return (
        <div>
            <div>
             <Link to="/create-group">
            <ChevronLeft />
            </Link>
                <List 
                    title="Trip to Paris"
                    subtitle="4 members"
                />
            </div>
            {/* //how do we make this so that it autopopulates with the group name that already exists? */}
            <div>
                <Button 
                    className="flex items-center gap-2 bg-[#3A7FE5] text-white px-4 py-2 rounded font-bold"
                    name= "Expenses" 
                    variant= "ho" 
                    isActive={true}
                    onClick={()=> console.log("Button Click Success!")}
                />
                <Button 
                    className="flex items-center gap-2 bg-[#3A7FE5] text-white px-4 py-2 rounded font-bold"
                    name= "Balances" 
                    variant= "ho" 
                    isActive={true}
                    onClick={()=> console.log("Button Click Success!")}
                />
                {/* by clicking on balances will we route to a new page toe list balance info?... more routing required? And should another page be -esm */}
            </div>
            <div>
                <List 
                    title="Groceries"
                    subtitle= "Paid by you"
                    amount= {250}
                />
                <List 
                    title="Dinner at restaurant"
                    subtitle= "Paid by Erika"
                    amount= {0}
                />
                <List 
                    title="Flights"
                    subtitle= "Paid by Arsy"
                    amount= {1500}
                />
                <List 
                    title="Hotel Booking"
                    subtitle= "Paid by youErika"
                    amount= {600}
                />
            </div>
        </div>
    )
}