// ai-judge-relax-01 entry (Node 22, standard library only).
// Writes one original short text, written to relax the reader, to
// /output/entry.txt (or MAKEFUN_OUTPUT_DIR outside the grader).
// The text is fixed — no randomness, no input — so both grader runs
// write the same bytes. Blank lines are slow beats between sentences.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'After six, the woman in the button shop stays on a little while, sorting.',
  '',
  'She tips the tin out onto the counter — bone, horn, mother-of-pearl — and the buttons settle with a faint ticking, each one finding its own small place. She picks one up, turns it toward the lamp, and sets it in its row. Then another. Then another.',
  '',
  'The street outside grows quiet, one shopfront at a time. A bicycle passes. A cat crosses the warm pavement and is gone.',
  '',
  'Inside, the rows lengthen in the lamplight, pale and dark by turns, and the tin grows lighter in her hand. There is nowhere else the evening needs to be.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
