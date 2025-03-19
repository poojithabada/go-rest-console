let responseBody = document.getElementById("responseBody");
let requestBody = document.getElementById("requestBody");
let requestMethod = document.getElementById("requestMethod");
let requestUrlErrMsg = document.getElementById("requestUrlErrMsg");
let requestUrl = document.getElementById("requestUrl");
let responseStatus = document.getElementById("responseStatus");
let consoleForm = document.getElementById("consoleForm");
let sendRequestBtn = document.getElementById("sendRequestBtn");

function result() {
    if (requestUrl.value === "") {
        requestUrlErrMsg.textContent = "Required*";
    } else {
        requestUrlErrMsg.textContent = "";
    }

    let options = {
        method: requestMethod.value,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0"
        },
        body: JSON.stringify({
            id: 123,
            name: "John Doe",
            email: "john.doe@example.com",
            gender: "male",
            status: "active"
        })
    };

    fetch(requestUrl.value, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            responseStatus.value = data.code;
            responseBody.value = JSON.stringify(data);
        });
}
requestMethod.addEventListener("change", result);
consoleForm.addEventListener("submit", function(event) {
    event.preventDefault();
    result();

});