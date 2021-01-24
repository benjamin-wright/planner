export function newData() {
  window.ipcRenderer.send("new-data");
}

export function clearData() {
  window.ipcRenderer.send("clear-data");
}

export function loadData() {
  window.ipcRenderer.send("load-data");
}

export function newShift(date) {
  window.ipcRenderer.send("new-shift", date.toFormat("yyyy-MM-dd"));
}

export function updateShift({ date, start, end }) {
  window.ipcRenderer.send("update-shift", {
    date: date.toFormat("yyyy-MM-dd"),
    start: start,
    end: end
  });
}
