import { vietnamese } from '../src';

test('Thinid Test', () => {
  expect(vietnamese('Xin chào Việt Nam!')).toEqual('Xin chao Viet Nam!');

  expect(vietnamese('Quảng Nam là một tỉnh thuộc vùng Duyên hải Nam Trung Bộ, Việt Nam.'))
    .toEqual('Quang Nam la mot tinh thuoc vung Duyen hai Nam Trung Bo, Viet Nam.');

  expect(vietnamese('Tên tỉnh theo phát âm địa phương nghe như là "Quảng Nôm". Tên gọi Quảng Nam có nghĩa là mở rộng về phương Nam.'))
    .toEqual('Ten tinh theo phat am dia phuong nghe nhu la "Quang Nom". Ten goi Quang Nam co nghia la mo rong ve phuong Nam.');
});
