// sw.js
self.addEventListener('push', function(event) {
    let data = { title: "🚨 ALERT!", body: "Gerakan mencurigakan terdeteksi!" };
    if (event.data) {
        data = event.data.json();
    }

    const options = {
        body: data.body,
        icon: 'https://via.placeholder.com/128/ff0000/ffffff?text=ALERT',
        vibrate: [300, 100, 300, 100, 300],
        tag: 'maling-warning',
        renotify: true
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});
