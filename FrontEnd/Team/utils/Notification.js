import * as Notifications from 'expo-notifications';
// import axios from 'axios';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

export default async function pushNotification() {
    // const res = await axios.post("http://192.168.1.46:8083/test")
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "You've got mail! 📬" + res.data,
            body: res.data,
            data: { data: 'goes here' },
        },
        trigger: { seconds: 2 },
    });
}