import { MyCommonPipe } from './my-common-pipe.pipe';

describe('MyCommonPipePipe', () => {
  it('create an instance', () => {
    const pipe = new MyCommonPipe();
    expect(pipe).toBeTruthy();
  });
});
