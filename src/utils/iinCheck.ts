export function iinCheck(iin: string) {
  if (!iin) return false;
  if (iin.length != 12) return false;
  if (!/[0-9]{12}/.test(iin)) return false;
  //Проверяем контрольный разряд
  var b1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  var b2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2];
  var a = [];
  var controll = 0;
  for (var i = 0; i < 12; i++) {
    a[i] = parseInt(iin.substring(i, i + 1));
    if (i < 11) controll += a[i] * b1[i];
  }
  controll = controll % 11;
  if (controll == 10) {
    controll = 0;
    for (var i = 0; i < 11; i++) controll += a[i] * b2[i];
    controll = controll % 11;
  }
  if (controll != a[11]) return false;
  return true;
}
