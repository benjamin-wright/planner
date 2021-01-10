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
