function selection(x, y, width, height){
    selectedRegion = Array(Array(x,y), Array(x+width, y), Array(x+width, y+height), Array(x, y+height));
    return selectedRegion;
}
