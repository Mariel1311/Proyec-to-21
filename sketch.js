var cueva, nada, Diamod, iron, descarga, zommbie; 
var cuevaImg, nadaImg, DiamodImg, ironImg, descargaImg, zommbieImg;

function preload(){
    nadaImg = loadImge("bloque.png");
    DiamodImg = loadImge("Diamod.png");
    iron = loadImge("iron.png");
    descarga = loadImage("descarga.png");
    zommbie = loadImage("zombiecaminando.png");
}

function setup() {
    createCanvas(400, 200);

    //movimiento
    descarga = createSprite(50,160,20,50);
    descarga.addImage("descarga", descargaImg);
    descarga.scale = 0.5;

    //muvimiento del fondo
    cueva = createSprite(200,200);
    cueva.addImage("cueva", cuevaImg);
    cueva.velocityY = 4;

    Diamod=new Group();
    iron=new Group();

}

function draw() {
 
    background(180);
    text("Puntuación: "+ score, 500,50);
    
}