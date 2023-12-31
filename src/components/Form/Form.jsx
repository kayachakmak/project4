import './Form.css'
/* eslint-disable react/prop-types */

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // set checkbox value to true/false instead of 'on':
    !data.isForGoodweather
      ? Object.assign(data, { isForGoodweather: false })
      : (data.isForGoodweather = true);

    onAddActivity(data);

    event.target.reset();
    event.target.name.focus();
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <legend className="form__title">Add new activity:</legend>
      <label className='form__textInput-label' htmlFor="name"> Name:</label>
      <input className="form__textInput" type="text" name="name" id="name" required/>
      <section className='form__checkbox'>
        <label className='form__checkbox__label' htmlFor="checkbox">Good-weather activity:</label>
        <input
          className="form__checkbox__box"
          type="checkbox"
          name="isForGoodweather"
          id="checkbox"
        />
      </section>

      <button className="form__button" type="submit">
        Submit
      </button>
    </form>
  );
}
