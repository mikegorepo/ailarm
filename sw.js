// sw.js
self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : {};
    const title = data.title || "🚨 MALING TERDETEKSI!";
    const options = {
        body: data.body || "Aktivitas mencurigakan terdeteksi!",
        icon: "https://via.placeholder.com/128/ff0000/ffffff?text=ALERT",
        vibrate: [200, 100, 200, 100, 200],
        tag: "maling-alert"
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});
