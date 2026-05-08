function openServicePopup(
    title,
    description,
    image
){

    document.getElementById(
        "popupTitle"
    ).innerHTML = title;

    document.getElementById(
        "popupSubtitle"
    ).innerHTML = description;

    document.getElementById(
        "popupImage"
    ).src = image;

    document.getElementById(
        "servicePopup"
    ).style.display = "flex";
}

function closeServicePopup(){

    document.getElementById(
        "servicePopup"
    ).style.display = "none";
}