function renameLayer() {
  const name = document.getElementById("newName").value;
  if (!name) {
    alert("Please enter a new layer name.");
    return;
  }

  const script = `
    var doc = app.activeDocument;
    if (doc && doc.activeLayer) {
      doc.activeLayer.name = ${JSON.stringify(name)};
    }
  `;
  window.parent.postMessage({ type: "ppScript", script: script }, "*");
}
