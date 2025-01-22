import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile {
  fileName: string;
  fileContent: string | undefined;
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
    },
    setClickedFile(state, action: PayloadAction<IClickedFile>) {
      state.clickedFile.fileName = action.payload.fileName;
      state.clickedFile.fileContent = action.payload.fileContent;
    },
  },
});

export const { setOpenedFiles, setClickedFile } = fileTreeSlice.actions;

export default fileTreeSlice.reducer;
