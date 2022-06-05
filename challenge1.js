function designerPdfViewer(h, word) {
    var maxHight =0;
    for (let i =0; i < word.length; i++){
      let alph = "abcdefghijklmnopqrstuvwxyz"
      let position = alph.indexOf(word[i]);
      if(h[position] > maxHight){
        maxHight = h[position]
      }
    }
    var result = maxHight*word.length;
    console.log(result);
    return result;
  }
  
  let s = "1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7";
  var input_str_array = s.split(" "); 
  var input_num_array = input_str_array.map((e)=>parseInt(e));
  
  designerPdfViewer(input_num_array,"abc");
  