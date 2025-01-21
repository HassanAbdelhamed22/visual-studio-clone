import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile {
  fileName: string;
  fileContent: string;
}

interface IInitialState {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
}

const initialState: IInitialState = {
  openedFiles: [],
  clickedFile: {
    fileName: "",
    fileContent: "",
  },
};

export const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState: initialState,
  reducers: {
    setOpenedFiles(state, action: PayloadAction<IFile[]>) {
      state.openedFiles = action.payload;
    }
  },
});

export const { setOpenedFiles } = fileTreeSlice.actions;

export default fileTreeSlice.reducer;
