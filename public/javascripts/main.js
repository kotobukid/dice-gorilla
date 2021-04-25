const db = new Dexie("SocialDB");

db.version(2)
    .stores({
        friends: "++id,age"
    });

const friends = [
    {age: 20, name: '山田', hobby: 'ゲーム'},
    {age: 21, name: '佐藤', hobby: '華道'},
    {age: 22, name: '鈴木', hobby: '執筆'},
    {age: 23, name: '田代', hobby: '？？？'},
    {age: 24, name: '田所', hobby: '映画'},
    {age: 25, name: '山本', hobby: '旅行'},
    {age: 26, name: '佐々木', hobby: '模型'},
    {age: 27, name: '織田', hobby: '読書'}
]

db.friends.bulkPut(friends).catch((error) => {
    console.error(error);
});

window.onload = () => {
    console.log('main.js is loaded');

    document.getElementById('select').addEventListener('click', ev => {
        ev.preventDefault();

        db.friends.where("age")
            .equals(22)
            .each((friend) => {
                console.log(friend);
            })
    });
}