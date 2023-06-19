
function kirimData() {
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var batch = document.getElementById("batch").value;
    var major = document.querySelector("input[name=major]:checked").value;
    var reason = document.getElementById("reason").value;

    var alertMessage =
        "Nama: " + name + "\n" +
        "Tanggal: " + date + "\n" +
        "Angkatan: " + batch + "\n" +
        "Peminatan: " + major + "\n" +
        "Alasan: " + reason;

    alert(alertMessage);
    document.getElementById("surveyForm").reset();
}




function goBack() {
    window.history.back()
}
