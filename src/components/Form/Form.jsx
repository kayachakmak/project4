export default function Form({onAddActivity}) {
    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        onAddActivity(data)
        
        event.target.reset()
        event.target.name.focus()
    }
    return (
        <form onSubmit={handleSubmit}>
            <legend>Add new activity:</legend>
            <label htmlFor='name'> Name:</label>
            <input type='text' name='name' id='name'/>
            <label htmlFor="checkbox">Good-weather activity</label>
            <input type='checkbox' name="isForGoodweather" id='checkbox' />
            <button type="submit">Submit</button>
        </form>
    )
}

