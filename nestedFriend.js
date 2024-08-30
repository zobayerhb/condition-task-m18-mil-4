const num = 70;
const friendNum = 39;

if (num === 80) {
  if (friendNum >= 80) {
    console.log("Go for lunch with friend");
  } else if (friendNum >= 60) {
    console.log("Good luck next time my buddy");
  } else if (friendNum >= 40) {
    console.log("Message unseen my friend");
  } else if (friendNum < 40) {
    console.log("Block my friend");
  }
} else {
  console.log("Go home, sleep, and act sad");
}
