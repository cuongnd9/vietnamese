interface IConverter {
  from: RegExp;
  to: string;
};

const converters: IConverter[] = [
  {
    from: /à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,
    to: 'a',
  },
  {
    from: /À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g,
    to: 'A',
  },
  {
    from: /è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,
    to: 'e',
  },
  {
    from: /È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g,
    to: 'E',
  },
  {
    from: /ì|í|ị|ỉ|ĩ/g,
    to: 'i',
  },
  {
    from: /Ì|Í|Ị|Ỉ|Ĩ/g,
    to: 'I',
  },
  {
    from: /ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,
    to: 'o',
  },
  {
    from: /Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g,
    to: 'O',
  },
  {
    from: /ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,
    to: 'u',
  },
  {
    from: /Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g,
    to: 'U',
  },
  {
    from: /ỳ|ý|ỵ|ỷ|ỹ/g,
    to: 'y',
  },
  {
    from: /Ỳ|Ý|Ỵ|Ỷ|Ỹ/g,
    to: 'Y',
  },
  {
    from: /đ/g,
    to: 'd',
  },
  {
    from: /Đ/g,
    to: 'D',
  },
];

export default function viee(text: string): string {
  for (const convert of converters) {
    text = text.replace(convert.from, convert.to);
  }

  return text;
};
