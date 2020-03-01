export const toRna = dna => [...dna].map(nucleotide => RNADNAMAP[nucleotide]).join('');

const RNADNAMAP = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};
