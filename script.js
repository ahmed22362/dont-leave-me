const btn = document.getElementById("notificationBtn")
btn.addEventListener("click", () => {
  Notification.requestPermission().then((res) => {
    if (res === "granted") {
      const notification = new Notification("Example notification", {
        body: "this is the body",
        data: { hello: "test" },
        tag: "test",
      })
      notification.addEventListener("show", (e) => {
        console.log("the notification has Showed")
      })
    }
  })
})

let notification
let interval
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    let leftDate = new Date()
    interval = setInterval(() => {
      notification = new Notification("You ara awaaaaaaay", {
        body: `you left me like others for ${Math.round(
          (new Date() - leftDate) / 1000
        )} sec.`,
        tag: "left",
      })
    }, 1000)
  } else {
    if (interval) clearInterval(interval)
    if (notification) notification.close()
  }
})
