function renameLayer() {
  const newName = document.getElementById("layerName").value;
  if (!newName) {
    alert("Please enter a new name for the layer.");
    return;
  }

  const script = `
    var doc = app.activeDocument;
    doc.activeLayer.name = "${newName.replace(/"/g, '\\"')}";
  `;
  app.eval(script);
}
