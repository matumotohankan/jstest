function toggleVisibility() {
    var authCodeInput = document.getElementById("authCode");
    if (authCodeInput.type === "password") {
        authCodeInput.type = "text";
    } else {
        authCodeInput.type = "password";
    }
}

search.addEventListener('click', () => {
    let api = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=';
    let error = document.getElementById('postalCodeError');
    let input = document.getElementById('postalCode');
    let address1 = document.getElementById('address');
    let address2 = document.getElementById('city');
    let address3 = document.getElementById('area');
    let param = input.value.replace("-", "");
    let url = api + param;

    // 検索中メッセージを表示
    error.textContent = '検索中...';

    fetch(url)
        .then((response) => {
            error.textContent = '';
            return response.json();
        })
        .then((data) => {
            if (data.status === 400) {
                error.textContent = data.message;
            } else if (data.results === null) {
                error.textContent = '郵便番号から住所が見つかりませんでした。';
            } else {
                address1.value = data.results[0].address1;
                address2.value = data.results[0].address2;
                address3.value = data.results[0].address3;
            }
        })
        .catch((ex) => {
            console.log(ex);
        });
}, false);

function validatePhoneNumber(phoneNumber) {
    var regex = /^(?:\d{9}|\d{10}|\d{11})$/;
    return regex.test(phoneNumber);
}

function validatePostalCode(postalCode) {
    var regex = /^\d{3}-?\d{4}$/;
    return regex.test(postalCode);
}

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function attachValidationListeners() {
    var phoneNumberInput = document.getElementById("phoneNumber");
    var postalCodeInput = document.getElementById("postalCode");
    var addressInput = document.getElementById("address");
    var cityInput = document.getElementById("city");
    var areaInput = document.getElementById("area");
    var emailInput = document.getElementById("email");
    var subjectInput = document.getElementById("subject");
    var contentInput = document.getElementById("content");
    var authCodeInput = document.getElementById("authCode");
    var nameInput = document.getElementById("name");

    nameInput.addEventListener("input", function () {
        validateName();
    });

    phoneNumberInput.addEventListener("input", function () {
        validatePhoneNumberInput();
    });

    postalCodeInput.addEventListener("input", function () {
        validatePostalCodeInput();
    });

    emailInput.addEventListener("input", function () {
        validateEmailInput();
    });

    subjectInput.addEventListener("input", function () {
        validateSubject();
    });

    contentInput.addEventListener("input", function () {
        validateContent();
    });

    authCodeInput.addEventListener("input", function () {
        validateAuthCode();
    });

    addressInput.addEventListener("input", function () {
        validateAddress();
    });

    cityInput.addEventListener("input", function () {
        validateAddress();
    });

    areaInput.addEventListener("input", function () {
        validateAddress();
    });
}

function validateName() {
    var name = document.getElementById("name");
    var errorMessage = "名前は必須項目です";

    if (name.value === "") {
        name.style.backgroundColor = "rgba(255, 67, 25, 0.4)";
        document.getElementById("nameError").textContent = errorMessage;
        return false;
    } else {
        name.style.backgroundColor = "";
        document.getElementById("nameError").textContent = "";
        return true;
    }
}

function validatePhoneNumberInput() {
    var phoneNumber = document.getElementById("phoneNumber");
    var errorMessage = "数字のみで、9桁、10桁、11桁で入力してください";

    if (phoneNumber.value === "" || !validatePhoneNumber(phoneNumber.value)) {
        phoneNumber.style.backgroundColor = "rgba(255,67,25,0.4)";
        document.getElementById("phoneNumberError").textContent = errorMessage;
        return false;
    } else {
        phoneNumber.style.backgroundColor = "";
        document.getElementById("phoneNumberError").textContent = "";
        return true;
    }
}

function validatePostalCodeInput() {
    var postalCode = document.getElementById("postalCode");
    var errorMessage = "数字とハイフンのみで入力してください";

    if (postalCode.value === "" || !validatePostalCode(postalCode.value)) {
        postalCode.style.backgroundColor = "rgba(255,67,25,0.4)";
        document.getElementById("postalCodeError").textContent = errorMessage;
        return false;
    } else {
        postalCode.style.backgroundColor = "";
        document.getElementById("postalCodeError").textContent = "";
        return true;
    }
}

function validateAddress() {
    var address = document.getElementById("address");
    var errorMessage = "必須項目です";

    if (address.value === "") {
        address.style.backgroundColor = "rgba(255, 67, 25, 0.4)";
        document.getElementById("addressError").textContent = errorMessage;
        return false;
    } else {
        address.style.backgroundColor = "";
        document.getElementById("addressError").textContent = "";
        return true;
    }
}

function validateCity() {
    var city = document.getElementById("city");
    var errorMessage = "必須項目です";

    if (city.value === "") {
        city.style.backgroundColor = "rgba(255, 67, 25, 0.4)";
        document.getElementById("cityError").textContent = errorMessage;
        return false;
    } else {
        city.style.backgroundColor = "";
        document.getElementById("cityError").textContent = "";
        return true;
    }
}

function validateArea() {
    var area = document.getElementById("area");
    var errorMessage = "必須項目です";

    if (area.value === "") {
        area.style.backgroundColor = "rgba(255, 67, 25, 0.4)";
        document.getElementById("areaError").textContent = errorMessage;
        return false;
    } else {
        area.style.backgroundColor = "";
        document.getElementById("areaError").textContent = "";
        return true;
    }
}

function validateEmailInput() {
    var email = document.getElementById("email");
    var errorMessage = "未入力です";

    if (email.value === "" || !validateEmail(email.value)) {
        email.style.backgroundColor = "rgba(255,67,25,0.4)";
        document.getElementById("emailError").textContent = errorMessage;
        return false;
    } else {
        email.style.backgroundColor = "";
        document.getElementById("emailError").textContent = "";
        return true;
    }
}

function validateSubject() {
    var subject = document.getElementById("subject");
    var errorMessage = "10文字以内で入力してください";

    if (subject.value === "" || subject.value.length > 10) {
        subject.style.backgroundColor = "rgba(255,67,25,0.4)";
        document.getElementById("subjectError").textContent = errorMessage;
        return false;
    } else {
        subject.style.backgroundColor = "";
        document.getElementById("subjectError").textContent = "";
        return true;
    }
}

function validateContent() {
    var content = document.getElementById("content");
    var errorMessage = "1000文字以内で入力してください";

    if (content.value === "" || content.value.length > 1000) {
        content.style.backgroundColor = "rgba(255,67,25,0.4)";
        document.getElementById("contentError").textContent = errorMessage;
        return false;
    } else {
        content.style.backgroundColor = "";
        document.getElementById("contentError").textContent = "";
        return true;
    }
}

function validateAuthCode() {
    var authCode = document.getElementById("authCode");
    var errorMessage =
        "半角大文字小文字数字を少なくとも1つ含んだ8～15文字で入力してください";

    if (
        authCode.value === "" ||
        authCode.value.length > 15 ||
        authCode.value.length < 8 ||
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/.test(authCode.value)
    ) {
        authCode.style.backgroundColor = "rgba(255,67,25,0.4)";
        document.getElementById("authCodeError").textContent = errorMessage;
        return false;
    } else {
        authCode.style.backgroundColor = "";
        document.getElementById("authCodeError").textContent = "";
        return true;
    }
}

///////////////////////
//最終確認////
//////////

function validateForm() {
    var isValid = true;

    if (!validateName()) {
        isValid = false;
    }
    if (!validatePhoneNumberInput()) {
        isValid = false;
    }
    if (!validatePostalCodeInput()) {
        isValid = false;
    }
    if (!validateAddress()) {
        isValid = false;
    }
    if (!validateCity()) {
        isValid = false;
    }
    if (!validateArea()) {
        isValid = false;
    }
    if (!validateEmailInput()) {
        isValid = false;
    }
    if (!validateSubject()) {
        isValid = false;
    }
    if (!validateContent()) {
        isValid = false;
    }
    if (!validateAuthCode()) {
        isValid = false;
    }

    if (!isValid) {
        alert("未入力または不正な入力があります");
        return false;
    }
    
    showModal();
    return false;
}






    


function showModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    location.reload(); // ページをリロード
}