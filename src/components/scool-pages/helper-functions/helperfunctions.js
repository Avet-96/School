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
