const gifs = [
    'https://thumbs.gfycat.com/WhimsicalLeanAmericanwigeon-max-1mb.gif',
    'https://media.giphy.com/media/oEllPTHqYorrD4CiwD/giphy.gif',
    'https://thumbs.gfycat.com/ZigzagQueasyAurochs-max-1mb.gif',
    'https://media3.giphy.com/media/TeXVQ0AFBukqA/200.gif',
    'https://i.pinimg.com/originals/e9/ed/0e/e9ed0e001ed01e6741fa927beb82aad0.gif',
    'https://i.pinimg.com/originals/03/39/8b/03398b4c696f7cfca7bf924225e11838.gif',
    'https://i.pinimg.com/originals/9a/97/37/9a9737269f921204adb0376b23570873.gif',
    'https://media3.giphy.com/media/mS9Qbbdu6sf9m/giphy.gif',
    'https://thumbs.gfycat.com/InsignificantSmoothEquine-size_restricted.gif'
];
  


function addBackgroundGif(){
    const index = Math.floor(Math.random() * gifs.length);
    const selectedGif = gifs[index];
    const h1Element = document.querySelector('h1');
    h1Element.style.backgroundImage = `url(${selectedGif})`;
}
  
window.addEventListener('load', addBackgroundGif);
  