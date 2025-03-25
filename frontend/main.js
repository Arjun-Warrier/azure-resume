window.addEventListener("DOMContentLoaded", (event) => {
    getVisitCount();
})

const functionApi = "https://func-azureresume-arjun.azurewebsites.net/api/GetResumeCounter?code=9hQzR9lkEFJjHvvTYm7ToMUlGT-0IREeNcR7_kx2mxjZAzFujSO1cA==";

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function (error) {
        console.log(error);
    });
    return count;
};