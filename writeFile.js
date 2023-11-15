function writeFile(name, msg) {
  if (name == "") return false;
  var defaultPath = "C:\Users\Ahn SooMin\Desktop\AlarmClock_FE";
  var fileObject = new ActiveXObject("Scripting.FileSystemObject");
  var fullpath = defaultPath + "\\" + name;

  if (!fileObject.FileExists(fullpath)) {
    var fWrite = fileObject.CreateTextFile(fullpath, false);
  }
}
