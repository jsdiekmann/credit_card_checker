// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      let newBase = '';
      let randomIndex = Math.floor(Math.random()* 15)
      let randomBase = dna[randomIndex];
      const dnaBases = ['A', 'T', 'C', 'G'];
      newBase = dnaBases[Math.floor(Math.random()* 4)];
      while (newBase === randomBase) {
        newBase = dnaBases[Math.floor(Math.random()* 4)];  
      }
      dna[randomIndex] = newBase;
      return dna;
    },
    compareDNA(strand) {
      console.log(strand.dna);
      console.log(dna);
      let counter = 0;
      for (let i = 0; i < dna.length; i++) {
        if (strand.dna[i]===dna[i]) {
          counter++;
        }
      }
      const inCommon = (counter/dna.length) * 100;
      return console.log(`Speciman #1 and Speciman #2 have ${inCommon.toFixed(2)}% of their DNA in common!`);
    },
    willLikelySurvive() {
      let surviveCounter = 0;
      for (let i = 0; i < dna.length; i++) {
        if (dna[i]=== 'C' || dna[i]=== 'G') {
          surviveCounter++;
        }
      }
      const viable = (surviveCounter/dna.length)*100 >= 60;
      return viable;
    }
  }
}

const makeViableList = () => {
  let viableList = [];
  let counter = 1;
  while (viableList.length < 30) {
    const specimen = pAequorFactory(counter, mockUpStrand());
    if (specimen.willLikelySurvive()===true) {
      viableList.push(specimen);
    } 
    counter++;
  }
  return console.log(viableList);
}
