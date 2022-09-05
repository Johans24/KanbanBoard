const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
  boardInfo: {
    boardEntity: "Jobs",
    boardName: "Job Tracker",
    statuses: [
      {
        name: "wishlist",
        id: "wishlist-1",
      },
      {
        name: "applied",
        id: "applied-2",
      },
      {
        name: "interview",
        id: "interview-3",
      },
      {
        name: "offer",
        id: "offer-4",
      },
      {
        name: "rejected",
        id: "rejected-5",
      },
    ]
  },
  fields: [
    {
      id: 1,
      label: "Position",
      type: "text"
    },
    {
      id: 2,
      label: "Tech Stack",
      type: "list"
    }
  ]
}

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setBoardInfo(state, action) {
      const { newBoardInfo } = action.payload;
      state.boardInfo = {
        ...state.boardInfo,
        ...newBoardInfo
      }
    }
  }
})

export const { setBoardInfo } = settingsSlice.actions;
export const boardInfo = (state) => state.settings.boardInfo;

export default settingsSlice.reducer;