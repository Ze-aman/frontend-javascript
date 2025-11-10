// Branded interfaces for nominal typing
interface MajorCredits {
  credits: number;
  brand: 'Major';
}

interface MinorCredits {
  credits: number;
  brand: 'Minor';
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Major'
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Minor'
  };
}

// Example usage
const math: MajorCredits = { credits: 5, brand: 'Major' };
const physics: MajorCredits = { credits: 3, brand: 'Major' };

const arts: MinorCredits = { credits: 2, brand: 'Minor' };
const music: MinorCredits = { credits: 4, brand: 'Minor' };

console.log(sumMajorCredits(math, physics)); // { credits: 8, brand: 'Major' }
console.log(sumMinorCredits(arts, music));   // { credits: 6, brand: 'Minor' }
