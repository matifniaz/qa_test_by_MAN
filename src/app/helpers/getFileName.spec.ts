import getFileName from './getFileName';

describe('GetFileName from URL', () => {

  it('should get from url', () => {
    const url = 'https://i.picsum.photos/id/0/5000/3333.jpg'
    expect(getFileName(url)).toEqual('3333.jpg');
  });
  
  // it('should get from url', () => {
  //   const url = 'https://i.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU'
  //   expect(getFileName(url)).toEqual('3333.jpg');
  // });

});