import path from "path";
import { promptSavePath, promptLoadPath, saveData, loadData } from "./file-ops";
import { DateTime } from "luxon";

export default class DataManager {
  constructor() {
    this.data = null;
  }

  clear() {
    this.data = null;
  }

  async load() {
    try {
      const fileName = await promptLoadPath();
      this.data = await loadData(fileName);
    } catch (err) {
      console.error(err);
      this.data = null;
    }
  }

  async create() {
    try {
      const filePath = await promptSavePath();

      this.data = {
        name: path.basename(filePath),
        config: {
          cycleWeeks: 8,
          startDate: getNextMonday()
        },
        plan: []
      };

      await saveData(filePath, this.data);
    } catch (err) {
      console.error(err);
      this.data = null;
    }
  }
}

function getNextMonday() {
  const today = DateTime.local();
  const lastMonday = today.minus({ days: today.weekday - 1 });
  const nextMonday = lastMonday.plus({ weeks: 1 });
  
  return nextMonday.toFormat("yyyy-MM-dd");
}