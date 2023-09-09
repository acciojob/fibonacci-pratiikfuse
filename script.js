function fibonacci(num) {
// your code here
	  let next = 1;
  let curr = 0;
  let temp = 0;
  let ans = 0;
  for (let i = 0; i < num; i++) {
    ans = curr;
    curr = next + curr;
    temp = next;
    next = curr;
    curr = temp;
  }

  return ans;
	
}

module.exports = fibonacci;
