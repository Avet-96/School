let arr = []

export const handleKeyPress = (e, text, id) => {
    let newArr = JSON.parse(localStorage.getItem('lesson'))
    if (e.key === 'Enter') {
        newArr.forEach(v => {
            if (v.id === id) {
                v.value = text
            }
        })
        localStorage.setItem('lesson', JSON.stringify(newArr))
    }
}
export const returnDataArr = (file, id) => {
    let newArr = JSON.parse(localStorage.getItem('lesson'))
    let dataURL = URL.createObjectURL(file.target.files[0])
    newArr.forEach(v => {
        if (v.id === id) {
            arr = [dataURL, ...arr]
            v.value = arr
        }
    })
    localStorage.setItem('lesson', JSON.stringify(newArr))
    return dataURL
}
export const deletePhoto = (index, imagesList, id) => {
    let newArr = JSON.parse(localStorage.getItem('lesson'))
    arr.splice(index, 1)
    imagesList.splice(index, 1);
    newArr.forEach(v => {
        if (v.id === id) {
            v.value = arr
        }
    })

    localStorage.setItem('lesson', JSON.stringify(newArr))
}
