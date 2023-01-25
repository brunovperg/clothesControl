function validar() {
  
  let nome = document.getElementById('name').value
  let regExName = /^\s+|\s+$/g

  if (nome.replace(regExName, '').length <= 2) {
    alert('Preencha o campo de Nome!')
    nome.focus()
  }

  let funcao = document.getElementById('function').value

  if (funcao.replace(regExName, '').length === 0) {
    alert('Preenhca o campo de Função!')
    funcao.focus()
  }
}