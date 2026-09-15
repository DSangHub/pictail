(function () {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(function () {});
  }

  var deferred = null;
  var btn = document.getElementById("installBtn");
  if (!btn) return;
  btn.hidden = false;

  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferred = e;
    btn.hidden = false;
  });

  btn.addEventListener("click", function () {
    if (deferred) {
      deferred.prompt();
      deferred.userChoice.finally(function () {
        deferred = null;
        btn.hidden = true;
      });
      return;
    }
    alert(
      "To keep Pictail on this device without an app store:\n\n" +
        "iPhone / iPad: Share → Add to Home Screen\n" +
        "Android: Browser menu → Install app / Add to Home screen\n" +
        "Windows / Mac: Browser menu → Install Pictail\n\n" +
        "Or download the files from GitHub (Code → Download ZIP) and open index.html."
    );
  });

  window.addEventListener("appinstalled", function () {
    btn.hidden = true;
  });
})();
