const input = document.querySelector('.input');
const emailInput = document.querySelector('.email-input');
const loginBtn = document.querySelector('#loginButton');

/* 이메일 형식 확인 */
function validEmail(email_address) {
    email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	if(!email_regex.test(email_address)){ 
		return false; 
	}else{
		return true;
	}
}

/* 비밀번호 자릿수 확인 */
function validPassword(password) {
	if(password.length < 8){ 
		return false; 
	}else{
		return true;
	}
}

 function checkEmptyValue(e) {
    /* 이메일 값을 입력하지 않았을 때 */
    if(e.target.classList.contains('email-input')){
        if(e.target.value === "") {
            if(!e.target.nextElementSibling) {
                const caution = document.createElement('div');
                caution.textContent = "이메일을 입력해주세요."
                e.target.after(caution);
                caution.classList.add('caution-text');
            }
            e.target.classList.add('input-empty');
        }else {
            e.target.classList.remove('input-empty');
            e.target.nextElementSibling.remove();
        }
    }
    /* 비밀번호 값을 입력하지 않았을 때 */
    if(e.target.classList.contains('password-input')){
        if(e.target.value === "") {
            if(!e.target.nextElementSibling) {
                const caution = document.createElement('div');
                caution.textContent = "비밀번호를 입력해주세요."
                e.target.after(caution);
                caution.classList.add('caution-text');
            }
            e.target.classList.add('input-empty');
        }else {
            e.target.classList.remove('input-empty');
            e.target.nextElementSibling.remove();
        }
    }
}

function checkValidValue(e) {
    /* 잘못된 이메일 형식을 입력했을 때 */
    if(e.target.classList.contains('email-input')){
        if (!validEmail(e.target.value)) {
            if(!e.target.nextElementSibling) {
                const caution = document.createElement('div');
                caution.textContent = "잘못된 이메일 형식입니다."
                e.target.after(caution);
                caution.classList.add('caution-text');
            }else if (e.target.value === "") {
                e.target.nextElementSibling.remove();
                const caution = document.createElement('div');
                caution.textContent = "이메일을 입력해주세요."
                e.target.after(caution);
                caution.classList.add('caution-text');
            }
            e.target.classList.add('input-empty');
        }else {
            e.target.classList.remove('input-empty');
            e.target.nextElementSibling.remove();
        }
    }
    /* 비밀번호를 8자 미만으로 입력했을 때 */
    if(e.target.classList.contains('password-input')){
        if (!validPassword(e.target.value)) {
            if(!e.target.nextElementSibling) {
                const caution = document.createElement('div');
                caution.textContent = "비밀번호를 8자 이상 입력해주세요."
                e.target.after(caution);
                caution.classList.add('caution-text');
            }else if (e.target.value === "") {
                e.target.nextElementSibling.remove();
                const caution = document.createElement('div');
                caution.textContent = "비밀번호를 입력해주세요."
                e.target.after(caution);
                caution.classList.add('caution-text');
            }
            e.target.classList.add('input-empty');
        }else {
            e.target.classList.remove('input-empty');
            e.target.nextElementSibling.remove();
        }
    }
}

/* input에 유효한 값을 모두 입력했을 때 로그인 버튼 활성화 */
function activeBtn() {
    switch(!(validEmail(input.children[0].lastElementChild.value) && validPassword(input.children[1].lastElementChild.value))){
      case true :
        loginBtn.disabled = true;
        break;
      case false :
        loginBtn.disabled = false;
        break;
    }
  }

input.addEventListener("focusout", checkEmptyValue);
input.addEventListener("focusout", checkValidValue);
input.addEventListener('keyup', activeBtn);