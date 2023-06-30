import { CapitalizeStringPipe } from './capitalize-string.pipe';

describe('CapitalizeStringPipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizeStringPipe();
    expect(pipe).toBeTruthy();
  });
});
