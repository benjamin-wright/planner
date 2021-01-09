import { ipcMain } from "electron";
import DataManager from "./data-manager";

export default function run() {
  const manager = new DataManager();

  ipcMain.on("new-data", async event => {
    event.reply("pending-update");

    console.log("resetting data");
    await manager.create();

    event.reply("updated-data", manager.data);
  });

  ipcMain.on("load-data", async event => {
    event.reply("pending-update");

    console.log("loading data");
    await manager.load();

    event.reply("updated-data", manager.data);
  });

  ipcMain.on("clear-data", event => {
    event.reply("pending-update");

    console.log("clearing data");
    manager.clear();

    event.reply("updated-data", manager.data);
  });
}
