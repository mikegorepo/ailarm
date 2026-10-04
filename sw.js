// sw.js
self.addEventListener('push', function(event) {
    let data = { title: "🚨 ALERT!", body: "Gerakan mencurigakan terdeteksi!" };
    if (event.data) {
        try {
            data = event.data.json();
        } catch (e) {
            data = { title: "🚨 ALERT!", body: event.data.text() };
        }
    }

    const options = {
        body: data.body,
        icon: './icon-192.png',
        badge: './icon-192.png',
        vibrate: [300, 100, 300, 100, 300],
        tag: 'maling-warning',
        renotify: true
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

// Event ketika notifikasi diklik user
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
});
