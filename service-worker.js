self.addEventListener("install", (event) => {
  console.log("Service Worker installed");
});

self.addEventListener("fetch", (event) => {
  // Allow network requests to proceed as normal
});
