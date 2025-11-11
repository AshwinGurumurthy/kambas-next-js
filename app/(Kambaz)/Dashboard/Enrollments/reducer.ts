import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { enrollments } from "../../Database";

const initialState = {
  enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addEnrollment: (state, { payload : enrollment}) => {
      const newEnrollment = {
        _id: uuidv4(),
        user: enrollment.userId,
        course: enrollment.courseId,
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },

    deleteEnrollment: (state, { payload : enrollment }) => {
      state.enrollments = state.enrollments.filter(
        (e: any) =>
          !(e.user === enrollment.userId && e.course === enrollment.courseId)
      );
    },
  },
});

export const { addEnrollment, deleteEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;