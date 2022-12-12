function DNAtoRNA(dna) {
   let tChar = 'T';
   let uChar = 'U';
   return dna.split(tChar).join(uChar);
 }
 
 console.log(DNAtoRNA("TTTT"), "UUUU")
 console.log(DNAtoRNA("GCAT"), "GCAU")
 console.log(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")