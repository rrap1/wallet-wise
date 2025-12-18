import { Link } from 'react-router-dom';
import { Button } from './Buttons';
import { ChevronLeft, Plus } from 'lucide-react';
import { useState } from 'react';

export const CreateNewGroup = () => {
  const [adventureName, setAdventureName] = useState(''); //state to hold the input value
  const [disableSubmit, setDisableSubmit] = useState(false);

  // const navigate = useNavigate();//maybe we need this to route to the next page after creating a group - esm
       const values: {
        name: string
        description: string
        start_date: Date
        end_date: Date
        members: string[]
      };

  const handleChange = (e) => {
    setAdventureName(e.target.value); //
    console.log(adventureName); //This is to show how the adventureName hook is changing as we are tying
  };

  const handleSubmit = async (e) => {
    //function to handle the form submission
    e.preventDefault();

    if (adventureName.trim() === '') {
      alert('Enter an adventure name plz');
      setDisableSubmit(true);
      return;
    } else {
      try {
        const response = await fetch('http://localhost:3000/create-group', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ groupName: adventureName }), //send the adventure name to the server
        });

        if (!response.ok) {
          throw new Error('Failed to create the adventure form');
        }

        console.log('Adventure Name: ', adventureName);
        setAdventureName('');
      } catch (error) {
        console.error('Cant navegate there!', error);
      }

      //after submitting, we can navigate to the next page
      //navigate("/trip-name"); //route to the trip name page after creating a group - esm
    }
  };

  return (
    <div>
      <div className='relative w-full text-xl '>
        <Link to='/' className='absolute left px-4 py-2 pt-4 '>
          <ChevronLeft />
        </Link>
        <h1 className='text-center font-medium pt-4 '>Create Adventure</h1>
      </div>

      <h2 className='font-bold text-4 mt-6 mb-2 px-4 pl-4 text-[19px]'>
        {' '}
        Create a New Adventure{' '}
      </h2>
      <p className='text-4 mb-4 px-4 pl-4 text-[14px] font-medium  '>
        {' '}
        ADVENTURE NAME
      </p>

      {/* Create group name input form */}
      <form onSubmit={handleSubmit}>
        <div className='flex justify-center'>
          <input
            type='text'
            className=' w-90 rounded-xl border border-[#DEDEDE] bg-white p-4 mb-60'
            placeholder='Enter Group Name'
            onInput={handleChange}
            required
          />
        </div>
      </form>

      {/* Group Description form */}
      <form onSubmit={handleSubmit}>
        <div className='flex justify-center'>
          <input
            type='text'
            className=' w-90 rounded-xl border border-[#DEDEDE] bg-white p-4 mb-60'
            placeholder='Enter Group Description'
            onInput={handleChange}
            required
          />
        </div>
      </form>

      {/* Start&End date form */}
      <form onSubmit={handleSubmit}>
        <div className='flex justify-left px-4 pl-4'>
          <input
            type='date'
            className=' w-90 rounded-xl border border-[#DEDEDE] bg-white p-4 mb-60'
            placeholder=''
            onInput={handleChange}
            required
          />
        </div>

        <div className='flex justify-right'>
          <input
            type='date'
            className=' w-90 rounded-xl border border-[#DEDEDE] bg-white p-4 mb-60'
            placeholder=''
            onInput={handleChange}
            required
          />
        </div>
      </form>

      {/* Group Member Entry Form */}
      <form onSubmit={handleSubmit}>
        <div className='flex justify-center'>
          <input
            type='text'
            className=' w-90 rounded-xl border border-[#DEDEDE] bg-white p-4 mb-60'
            placeholder='Enter group members. Seperate all members with commas'
            onInput={handleChange}
            required
          />
        </div>

        <div className='flex justify-center'>
          <Button
            className='flex items-center gap-2 bg-[#3A7FE5] text-white px-4 py-2 rounded font-bold'
            name='Enter Group Members. Seperate all members with commas'
            id="groupMembersBtn"
            type='submit'
            variant='ho'
            isActive={true}
            disabled={disableSubmit}
            // onClick={() => handleSubmit()}
            plusIcon={<Plus />}
            // HERE WE HAVE TO CHANGE THE ROUTE
            route = ''
          />
        </div>
        {/* //Thank you!
        <script>
          function sendArray() {
            const input = document.getElementById('groupMembersBtn');
            const member = input.value.split(',');
            handleSubmit(member);
          } */}
      </form>
    </div>
  );
};
