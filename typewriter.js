const sentence = 'hello there from lighthouse labs';
var increment = 0;

for (const char of sentence) {
  
  setTimeout(() => {
    process.stdout.write(char);
  }, increment)
  increment += 50;
  setTimeout(() => {
    process.stdout.write('\n');
  }, 1650)
  
};