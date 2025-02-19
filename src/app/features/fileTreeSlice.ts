import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile {
  fileName: string;
  fileContent: string | undefined;
}

interface IInitialState {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
  activeTabId: string | null;
}

const initialState: IInitialState = {
  activeTabId: null,
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
      state.clickedFile = action.payload;
    },
    setActiveTabId(state, action: PayloadAction<string>) {
      state.activeTabId = action.payload;
    },
  },
});

export const { setOpenedFiles, setClickedFile, setActiveTabId } = fileTreeSlice.actions;

export default fileTreeSlice.reducer;
