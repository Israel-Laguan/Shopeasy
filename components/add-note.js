import { useDispatch, useSelector } from 'react-redux'

import { addNote, selectNotes } from '../lib/slices/notesSlice'
import useForm from '../lib/useForm'

const AddNoteForm = () => {
  const dispatch = useDispatch()
  const { error } = useSelector(selectNotes)
  const handleSubmit = useForm({
    title: '',
    content: '',
  })

  return (
    <form onSubmit={handleSubmit((data) => dispatch(addNote(data)))}>
      <h3>Add Item:</h3>
      <label htmlFor="titleText">
        Title: <br />
        <input type="text" name="title" id="titleText" />
      </label>
      <br />
      {'title' in (error || {}) && <small>{error.title}</small>}
      <br />
      <label htmlFor="contentText">
        Description:<br />
        <textarea name="content" id="contentText"></textarea>
      </label>
      <br />
      {'content' in (error || {}) && <small>{error.content}</small>}
      <br />
      <button type="submit">Add Item</button>
      <br />
      {typeof error === 'string' && <small>{error}</small>}
      <style jsx>{
        `
          form {
            max-width: 400px;
            min-width: 300px;
            margin: 0 auto 10px auto;
            font-size: 20px;
            padding-top: 10px;
          }
          textarea, input {
            margin: 10px auto 0 auto;
            width: 93%;
            padding: 5px;
            font-size: 20px;
            border-radius: 12px;
            box-shadow: 3px 3px 4px 0 #e6ffff, -3px -3px 4px 0 #aac6c9, inset 6px 6px 2px 0 #e6ffff, inset -6px -6px 2px 0 #aac6c9;
            border: 2px solid #aac6c9;
            color: gray;
            transition: .1s all ease-in-out;
          }
          textarea:focus, input:focus {
            border-width: 3px;
            outline: none;
            box-shadow: 1px 1px 3px 0 #e6ffff, -1px -1px 3px 0 #aac6c9, inset 3px 3px 2.3px 0 #e6ffff, inset -2px -2px 2.3px 0 #aac6c9;
          }
          button {
            background: linear-gradient(145deg, #d6f9fd, #b4d2d4);
            width: 220px;
            display: block;
            margin: 10px auto;
            font-size: 25px;
            border-radius: 15px;
            padding: 5px;
            color: gray;
            text-transform: uppercase;
            text-decoration: none;
            box-shadow: 3px 3px 8px 0 #e6ffff, -3px -3px 8px 0 #aac6c9;
            transition: .1s all ease-in-out;
          }
          button:hover {
            box-shadow: inset 3px 3px 2.5px 0 #e6ffff, inset -3px -3px 2.5px 0 #aac6c9;
            color: #000;
          }
          h3 {
            font-style: italic;
            font-size: 35px;
            margin-bottom: 20px;
            text-align: center;
          }
          small {
            font-size: 16px;
            margin-bottom: 10px;
            display: inline-block;
            color: red;
          }
        `
      }
      </style>
    </form>
  )
}

export default AddNoteForm
