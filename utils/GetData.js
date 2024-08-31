const getData = (url) =>
    new Promise((resolve, reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )


export default getData;

//  промис для запроса данных из сервера
/*
getData('УРЛ ДАННЫХ ИЗ СЕРВЕРА')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))*/

const getData = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
}
