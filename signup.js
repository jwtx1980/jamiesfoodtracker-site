(function () {
  var form = document.getElementById("beta-form");
  var status = document.getElementById("signup-status");

  if (!form) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var data = new FormData(form);
    var email = String(data.get("email") || "").trim();
    var name = String(data.get("name") || "").trim();
    var device = String(data.get("device") || "").trim();
    var notes = String(data.get("notes") || "").trim();

    var body = [
      "Hi Jamie's Food Tracker team,",
      "",
      "I would like to join the private Android beta.",
      "",
      "Email: " + email,
      "Name: " + (name || "Not provided"),
      "Android device: " + (device || "Not provided"),
      "Testing interests: " + (notes || "Not provided"),
      "",
      "I understand Jamie's Food Tracker is in private beta and Android only."
    ].join("\n");

    var mailto =
      "mailto:support@jamiesfoodtracker.com" +
      "?subject=" +
      encodeURIComponent("Private Android beta request") +
      "&body=" +
      encodeURIComponent(body);

    window.location.href = mailto;

    if (status) {
      status.hidden = false;
    }
  });
})();
