// KEVINSFUNCTS.js

let rndm = Math.random()

const create = () =>{

  for (var i = 1; i < 11; i++) {
    console.log(`{  id: ${i}, author_id: ${rndm}, sprite_id: 1, isLiked: true },`);
  }

}
create();
