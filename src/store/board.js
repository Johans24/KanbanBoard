import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  entities: {
    "wishlist-1": [
      {
        id: 1,
        name: "Company 1",
        fields: [
          {
            label: "Position",
            type: "text",
            value: "Full Stack Engineer",
          },
          {
            label: "Tech Stack",
            type: "list",
            value: ["React.js", "Typescript", "NodeJS", "AWS"],
          },
          {
            label: "Salary",
            type: "currency",
            value: 5000,
          },
          {
            label: "Location",
            type: "Address",
            value: "Buenos Aires, Argentina",
          },
        ],
      },
      {
        id: 2,
        name: "Company 2",
        fields: [
          {
            label: "Position",
            type: "text",
            value: "Senior Front End Engineer",
          },
          {
            label: "Tech Stack",
            type: "list",
            value: ["Vuejs", "Typescript", "SASS", "Tailwind"],
          },
          {
            label: "Salary",
            type: "currency",
            value: 4000,
          },
          {
            label: "Location",
            type: "Address",
            value: "Amsterdam, Netherlands",
          },
        ],
      }
    ],
    "applied-2": [
      {
        id: 3,
        name: "Company 3",
        fields: [
          {
            label: "Position",
            type: "text",
            value: "Senior Front End Engineer",
          },
          {
            label: "Tech Stack",
            type: "list",
            value: ["Vuejs", "Typescript", "SASS", "Tailwind"],
          },
          {
            label: "Salary",
            type: "currency",
            value: 4000,
          },
          {
            label: "Location",
            type: "Address",
            value: "Amsterdam, Netherlands",
          },
        ],
      },
      {
        id: 4,
        name: "Company 4",
        fields: [
          {
            label: "Position",
            type: "text",
            value: "Senior Front End Engineer",
          },
          {
            label: "Tech Stack",
            type: "list",
            value: ["Vuejs", "Typescript", "SASS", "Tailwind"],
          },
          {
            label: "Salary",
            type: "currency",
            value: 4000,
          },
          {
            label: "Location",
            type: "Address",
            value: "Amsterdam, Netherlands",
          },
        ],
      }
    ],
    "interview-3": [],
    "offer-4": [],
    "rejected-5": []
  },
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addEntity: {
      reducer(state, action) {
        const { entity, statusId } = action.payload;

        state.entities[statusId].push(entity);
      },

      prepare(entity) {
        return {
          id: nanoid(),
          ...entity,
        };
      },
    },

    moveEntity(state, action) {
      const { moveFromStatus, moveFromIndex, moveToStatus, moveToIndex } = action.payload;

      const [movedEntity] = state.entities[moveFromStatus].splice(moveFromIndex, 1);

      state.entities[moveToStatus].splice(moveToIndex, 0, movedEntity);
    },
  },
});

export const entitiesByStatus = (state) => state.board.entities;

export const { addEntity, moveEntity } = boardSlice.actions;

export default boardSlice.reducer;
