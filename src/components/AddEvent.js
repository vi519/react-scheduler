import React, { useState } from "react";
import Modal from "react-modal";
import DateTimePicker from "react-datetime-picker";
import { v4 as uuidv4 } from 'uuid';



function AddEvent({  onEventAdded }) {
  const [title, setTitle] = useState(null);
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [description, setDescription] = useState(null);
  const [location, setLocation] = useState(null);
  const [audioRequired, setAudioRequired]= useState()
  const [subject, setSubject]= useState()


  const unique_id = uuidv4();
  const taskId = unique_id.slice(0,8)
const reservationId = unique_id.slice(0,4)
const orgId = unique_id.slice(0,4)
 

  const onSubmit = (event) => {
    event.preventDefault();
    onEventAdded({
      title,
      start,
      end,
      taskId,
      reservationId,
      description,
      orgId,
      location,
      subject,
      audioRequired,

    });

    alert("Event Added")

  //  onClose();

  handleReset();
  };

function handleReset(){
 setTitle('')
 setAudioRequired('')
 setLocation('')
 setSubject('')
 setEnd('')
 setDescription('')
 setStart('')
}
 


  return (

<div>
<h1 className="text-center text-6xl underline">Add an event and See your slot given below in calendar</h1>
<br />
      <form
   
       onSubmit={onSubmit} >
          <div>
          <label class="block text-gray-700 text-sm font-bold mb-2">
        Title
      </label>   

      <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter the title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

          </div>
    <br />
        <div>
          <label
          class="block text-gray-700 text-sm font-bold mb-2"
          >Start Date</label>
          <DateTimePicker
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           value={start} onChange={(Date) => setStart(Date)} required/>
           <br />
        </div>
<br />
        <div>
          <label
           class="block text-gray-700 text-sm font-bold mb-2"
          >End Date</label> 
          <DateTimePicker value={end} onChange={(Date) => setEnd(Date)} />
        </div>
<br />
        <div>
          <label 
           class="block text-gray-700 text-sm font-bold mb-2"
          >Description</label>
        
          <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />
        </div>

        <div>
          <label 
           class="block text-gray-700 text-sm font-bold mb-2"
          >Location</label> 
          <input
           class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>




        <div>
          <label 
           class="block text-gray-700 text-sm font-bold mb-2"
          >Subject</label> 
          <input
           class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter Location"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

       <br />

       <div class="relative mb-4">
                <label
                  class="block uppercase tracking-wide  text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Audio Required
                </label>
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                
                  placeholder="Interview for"
                  value={audioRequired}
                  onChange={(e) =>setAudioRequired(e.target.value)}
                  required
                >
                  <option value="">Choose Option</option>
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                
               
                </select>
              </div>


        <div className="bg-white">
        <button 
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded align-middle"
        type="submit"> Submit</button> 
        
        <button 
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded align-middle mx-4"
        type="button" onClick={handleReset}> Reset</button>
        
       
        </div>

      
      </form>
      <br />

      </div>
  
  );
}

export default AddEvent;
