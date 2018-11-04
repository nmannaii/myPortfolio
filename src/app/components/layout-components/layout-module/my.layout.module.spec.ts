import { MyLayoutModule } from './my.layout.module';

describe('LayoutModuleModule', () => {
  let layoutModuleModule: MyLayoutModule;

  beforeEach(() => {
    layoutModuleModule = new MyLayoutModule();
  });

  it('should create an instance', () => {
    expect(layoutModuleModule).toBeTruthy();
  });
});
