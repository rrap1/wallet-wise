import { Form } from "./components/groups-overview/Forms";
import { Button } from "./components/groups-overview/Buttons";
import { List } from "./components/groups-overview/List"
import { Plus } from "lucide-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateNewGroup } from "./pages/createNewGroup";

const FirstPage = () => {
  return (
   <div>
      <Form/>
      <div className="flex justify-center">
        <Button 
        className="flex items-center gap-2 bg-[#3A7FE5] text-white px-4 py-2 rounded font-bold"
          name= "Create New Group" 
          variant= "ho" 
          isActive={true}
          onClick={()=> console.log("Button Click Success!")}
          plusIcon={<Plus />}
        />
      </div>
      <h2 className="font-bold text-4 pl-3 mt-4 mb-4">All groups</h2>
      <div>
        <div className= 'flex flex-col justify-center items-center gap-3 ' >
          <List
            title="Trip to Paris"
            subtitle= "4 members"
            amount= {200}
          />
          <List
            title="Trip to Paris"
            subtitle= "4 members"
            amount= {200}
          />
           <List
            title="Trip to Paris"
            subtitle= "4 members"
            amount= {200}
          />
        </div>
      </div>
       </div>
      )
}

function App() {
  return (
    <div>
      <Button 
        className="flex items-center gap-2 bg-[#3A7FE5] text-white px-4 py-2 rounded font-bold"
          name= "Create New Group" 
          variant= "ho" 
          isActive={true}
          onClick={()=> console.log("Button Click Success!")}
          plusIcon={<Plus />}
        />
      <BrowserRouter>
          <Routes>
            <Route path="/create-group" element={<CreateNewGroup />}/>
            <Route path="/" element={<FirstPage/>}/>
          </Routes>
      </BrowserRouter>
     </div>
  )
}

export default App;