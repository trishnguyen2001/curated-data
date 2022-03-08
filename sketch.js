let currentPic;
let picArr = [];
let side;
let grid = [];
let tRand;

function preloadImgs() {
  for (let i = 0; i < 55; i++) {
    let filename = "dataset/love (" + i + ").jpg";
    picArr[i] = loadImage(filename);
    //console.log(filename);
  }
}

function newPic(x, y) {
  currentPic = picArr[int(random(picArr.length))];
  currentPic.resize(side, 0);
  image(currentPic, x, y);
}

function updateGrid() {
  let cellRand = int(random(0, grid.length));
  newPic(grid[cellRand].x, grid[cellRand].y);
  tRand = randomTime();
}

function randomTime() {
  return int(random(1, 10));
}

function preloadGrid() {
  grid = [
    {
      pos: "topleft",
      x: width * 0.08,
      y: height * 0.08,
    },
    {
      pos: "topmid",
      x: width * 0.375,
      y: height * 0.08,
    },
    {
      pos: "topright",
      x: width * 0.67,
      y: height * 0.08,
    },
    {
      pos: "midleft",
      x: width * 0.08,
      y: height * 0.375,
    },
    {
      pos: "midmid",
      x: width * 0.375,
      y: height * 0.375,
    },
    {
      pos: "midright",
      x: width * 0.67,
      y: height * 0.375,
    },
    {
      pos: "botleft",
      x: width * 0.08,
      y: height * 0.67,
    },
    {
      pos: "botmid",
      x: width * 0.375,
      y: height * 0.67,
    },
    {
      pos: "botright",
      x: width * 0.67,
      y: height * 0.67,
    },
  ];
}

function setup() {
  //canvas/drawing set up
  createCanvas(windowHeight, windowHeight);
  background(0, 0, 0);
  imageMode(CORNER);
  side = width * 0.25;
  tRand = randomTime();

  //preloads all images into picArr[]
  preloadImgs();

  //initializes grid
  preloadGrid();
  for (let i = 0; i < grid.length; i++) {
    newPic(grid[i].x, grid[i].y);
  }
}

function draw() {
  if (frameCount % tRand == 0) {
    updateGrid();
  }
  console.log(tRand);
}
