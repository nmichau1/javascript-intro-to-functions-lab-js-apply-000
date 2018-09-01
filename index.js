function shout(hello){
  return hello.toUpperCase();
}

function whisper(hello){
  return hello.toLowerCase();
}

function logShout(hello){
  console.log(hello.toUpperCase());
}

function logWhisper(hello){
  console.log(hello.toLowerCase());
}

function sayHiTOGrandma(hello){
  if(hello === "I love you, Grandma"){
    return "I can't hear you!"
  }
  elseif(hello === hello.toUpperCase){
    return "YES, INDEED!"
  }
  elseif(hello === hello.toLowerCase){
    return "I can't hear you!")
}