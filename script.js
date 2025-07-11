function renameLayer() {
  const newName = document.getElementById("newName").value;
  if (!newName) {
    alert("Please enter a name.");
    return;
  }

  // Send command to Photopea
  const script = `
    if (app && app.activeDocument && app.activeDocument.activeLayer) {
      app.activeDocument.activeLayer.name = ${JSON.stringify(newName)};
    }
  `;
  window.parent.postMessage({ type: "ppScript", script: script }, "*");
}
