type Convert = {
  from: RegExp;
  to: string;
};

const converters: Convert[] = [
  {
    from: /à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,
    to: 'a'
  },
  {
    from: /è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,
    to: 'e'
  },
  {
    from: /ì|í|ị|ỉ|ĩ'/g,
    to: 'i'
  },
  {
    from: /ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,
    to: 'o'
  },
  {
    from: /ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,
    to: 'u'
  },
  {
    from: /ỳ|ý|ỵ|ỷ|ỹ/g,
    to: 'y'
  },
  {
    from: /đ/g,
    to: 'd'
  }
];

export default function viee(text: string): string {
  for (let convert of converters) {
    text = text.replace(convert.from, convert.to);
  }

  return text;
}
