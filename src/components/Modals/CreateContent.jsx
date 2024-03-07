import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast"


const CreateContent = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [completed, setCompleted] = useState(false);
    const [incomplete, setIncomplete] = useState(false);

    //handle change
    const handleChange = (name) => {
        return (e) => {
            switch (name) {
                case "title":
                    setTitle(e.target.value);
                    break;
                case "description":
                    setDescription(e.target.value);
                    break;
                case "date":
                    setDate(e.target.value);
                    break;
                case "completed":
                    setCompleted(e.target.checked);
                    break;
                case "incomplete":
                    setIncomplete(e.target.checked);
                    break;
                default:
                    break;
            }
        };
    }
    //handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        const task = {
            title,
            description,
            date,
            completed,
            incomplete
        }
        try{
            const res = await axios.post("/api/tasks", task)
            if(res.data.error){
                
                toast.error(res.data.error);
            }
            toast.success("Task Created Successfully");
        } catch(err){
            toast.error("Something went wrong");
            console.log(err);
        }
    }

  return (
    <form onSubmit={handleSubmit}>
    <h1>Create a Task</h1>
    <div className="input-control">
        <label htmlFor="title">Title</label>
        <input
            id="title"
            type="text"
            value={title}
            onChange={handleChange("title")}
            placeholder="e.g, Build a Facebook Clone"
        />
    </div>
    <div className="input-control">
        <label htmlFor="description">Description</label>
        <textarea
            id="description"
            type="text"
            value={description}
            rows={4}
            onChange={handleChange("description")}
            placeholder=""
        ></textarea>
    </div>
    <div className="input-control">
        <label htmlFor="date">Date</label>
        <input
            id="date"
            type="date"
            value={date}
            onChange={handleChange("date")} 
        />
    </div>
    <div className="input-control">
        <label htmlFor="completed">Completed</label>
        <input
            name="completed"
            id="completed"
            type="checkbox"
            value={completed.toString()}
            onChange={handleChange("completed")}
        />
    </div>
    <div className="input-control">
        <label htmlFor="incomplete">Incomplete</label>
        <input
            name="incomplete"
            id="incomplete"
            type="checkbox"
            value={incomplete.toString()}
            onChange={handleChange("incomplete")}
        />
    </div>

    <div className="submit-btn">
        <button type="submit" className="btn" >Submit</button>
    </div>


    </form>
  )
}
export default CreateContent