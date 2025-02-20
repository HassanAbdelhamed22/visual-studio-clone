import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile {
  activeTabId: string | null;
  fileName: string;
  fileContent: string | undefined;
  scrollToLine?: number | null;
}

interface IInitialState {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
  tabIdToRemove: string | null;
}

const initialState: IInitialState = {
  openedFiles: [],
  clickedFile: {
    activeTabId: null,
    fileName: "",
    fileContent: "",
    scrollToLine: null,
  },
  tabIdToRemove: null,
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
    setTabIdToRemove(state, action: PayloadAction<string | null>) {
      state.tabIdToRemove = action.payload;
    },
    openFileAndScrollToLine(
      state,
      action: PayloadAction<{ file: IFile; line: number }>
    ) {
      const { file, line } = action.payload;
      state.clickedFile = {
        activeTabId: file.id,
        fileName: file.name,
        fileContent: file.content,
        scrollToLine: line,
      };
      if (!state.openedFiles.some((f) => f.id === file.id)) {
        state.openedFiles = [...state.openedFiles, file];
      }
    },
  },
});

export const { setOpenedFiles, setClickedFile, setTabIdToRemove, openFileAndScrollToLine } =
  fileTreeSlice.actions;

export default fileTreeSlice.reducer;
