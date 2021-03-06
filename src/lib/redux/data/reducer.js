import { actionTypes } from './actions'
import uuid from 'uuid'

const firstNote = uuid.v4()

const defaultState = {
  [firstNote]: {
    title: 'title',
    content: 'content',
    createdAt: '',
    folderId: '',
    noteId: [firstNote],
    updatedAt: '',
  },
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
      const {
        title,
        content,
        folderId,
        noteId,
      } = action.payload
      const createdAt = Date.now()

      return {
        ...state,
        [noteId]: {
          title,
          content,
          folderId,
          noteId,
          createdAt,
          updatedAt: createdAt,
        }
      }
    case actionTypes.DELETE_NOTE:
      return state
    case actionTypes.UPDATE_NOTE:
      const prevNote = {
        ...state[action.payload.noteId]
      }

      return {
        ...state,
        [action.payload.noteId]: {
          ...prevNote,
          title: action.payload.title || state[action.payload.noteId].title,
          content: action.payload.content || state[action.payload.noteId].content,
        }
      }


      return {
        ...state,
        [noteId]: {
          ...prevNote,
        }
      }
    case actionTypes.EDIT_NOTE:
      return state
    default:
      return state
  }
}

export default reducer