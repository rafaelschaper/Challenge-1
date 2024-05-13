const txtUser = document.getElementById("text")
const txtResult = document.getElementById("text")
const btnEncrypt = document.getElementById("btn1")
const btnDecrypt = document.getElementById("btn2")
const result = document.getElementById("result")
const msg1 = document.getElementById("txt1")
const btnCopy = document.getElementById("btn3")
const msg2 = document.getElementById("txt2")
const img = document.getElementById("img")
const res = document.querySelector(".result")

const regex = /^[a-z0-9\s]+$/
const encrypt = (text) => {
    const texto = text
    let newText = ''
    if (regex.test(text)) {
        newText = texto.replace(/e/g, "enter")
        newText = newText.replace(/i/g, "imes")
        newText = newText.replace(/a/g, "ai")
        newText = newText.replace(/o/g, "ober")
        newText = newText.replace(/u/g, "ufat")
    }
    return newText
}

const decrypt = text => {
    const texto = text
    let newText = ''
    if (regex.test(text)) {
        newText = texto.replace(/enter/g, "e")
        newText = newText.replace(/imes/g, "i")
        newText = newText.replace(/ai/g, "a")
        newText = newText.replace(/ober/g, "o")
        newText = newText.replace(/ufat/g, "u")
    }
    return newText
}

const showResult = (cant) => {
    if (cant > 0) {
        btnCopy.style.display = "block"
        msg2.style.display = "none"
        img.style.display = "none"
        result.style.display = "block"
        msg1.style.display = "none"
        res.style.justifyContent = "space-between"
        txtUser.value = ""
    } else {
        img.style.display = "none"
        msg2.innerHTML = "Erro! Digite o texto de acordo com o aviso."
        btnCopy.style.display = "none"
        msg2.style.display = "block"
        msg1.style.display = "none"
        res.style.justifyContent = "center"
    }
}

btnCopy.addEventListener("click", () => {
    result.select()
    document.execCommand("copy")
})

btnEncrypt.addEventListener("click", () => {
    result.value = encrypt(txtUser.value)
    showResult(result.value.length)
})

btnDecrypt.addEventListener("click", () => {
    result.value = decrypt(txtUser.value)
    showResult(result.value.length)
})