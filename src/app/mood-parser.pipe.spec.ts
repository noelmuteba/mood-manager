import { MoodParserPipe } from './mood-parser.pipe';

describe('MoodParserPipe', () => {
  it('create an instance', () => {
    const pipe = new MoodParserPipe();
    expect(pipe).toBeTruthy();
  });
});
