import { IFile } from "../interfaces";

export const doesFileObjectExist = (arr: IFile[], id: string) => {
  return arr.some((file) => file.id === id);
};
