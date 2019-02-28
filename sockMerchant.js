function sockMerchant(n, arr) {
  const sockMatch = {};
  let sockCount = 0;
  arr.forEach(sock => { 
      if (sockMatch[sock]) {
        sockMatch[sock]++;
        if (sockMatch[sock] % 2 === 0) sockCount++; 
      }
      else sockMatch[sock] = 1;
  })

  return sockCount;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))
