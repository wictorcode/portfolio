const app_thumbnails = document.getElementsByClassName("wii-app-thumbnail");
const sfx_hover = new Audio("./sounds/hover.wav");
// Add event listeners to play a sound when hovering over the thumbnails
if (app_thumbnails !== null) {
    console.log(app_thumbnails.item(0));
    
    for (let index = 0; index < app_thumbnails.length; index++) {
        const element = app_thumbnails.item(index) as HTMLDivElement;

        element.addEventListener("mouseover", () => {
            sfx_hover.play();
        })
        
    }

}