import { dialog } from "electron";
import * as fs from "fs";

export async function promptSavePath() {
  const file = await dialog.showSaveDialog({
    title: "Where do you want to save the file?",
    buttonLabel: "Save",
    filters: [
      {
        name: "Data Files",
        extensions: ["json"]
      }
    ],
    properties: []
  });

  if (file.canceled) {
    throw new Error("Save request cancelled");
  }

  return file.filePath;
};

export async function promptLoadPath() {
  const file = await dialog.showOpenDialog({
    title: "Which file do you want to open?",
    buttonLabel: "Open",
    filters: [
      {
        name: "Data Files",
        extensions: ["json"]
      }
    ],
    properties: ["openFile"]
  });

  if (file.canceled) {
    throw new Error("Load request cancelled");
  }

  if (file.filePaths.length !== 1) {
    throw new Error(`Expected 1 path, got ${file.filePaths.length}`);
  }

  return file.filePaths[0];
}

export async function saveData(filePath, data) {
  await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2));
}

export async function loadData(filePath) {
  const buffer = await fs.promises.readFile(filePath);
  return JSON.parse(buffer.toString());
}
