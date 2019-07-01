import { DoneFilterPipe } from './doneFilter.pipe';

describe('SharedPipe', () => {
  it('create an instance', () => {
    const pipe = new DoneFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
