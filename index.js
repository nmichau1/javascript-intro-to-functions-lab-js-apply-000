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
  if(hello === hello.toLowerCase){
    return "I can't hear you!"
  }
}