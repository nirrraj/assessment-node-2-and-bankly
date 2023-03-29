const {
  timeWord,
  checkTwelves,
  evalHour,
  evalMinute
} = require("./timeWord");

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

describe ('#checkTwelves', () =>{
  test('returns midnight', () =>{
    expect(checkTwelves("00:00")).toBe('midnight');
  });
  test('returns noon', () =>{
    expect(checkTwelves("12:00")).toBe('noon');
  });
});

describe ('#evalHour', () => {
  test('00', () =>{
    expect(evalHour('00')).toEqual(['twelve','am'])
  });
  test('08', () =>{
    expect(evalHour("08")).toEqual(["eight", "am"]);
  });
  test('14', () =>{
    expect(evalHour("14")).toEqual(["two", "pm"]);
  });
  test('21', () =>{
    expect(evalHour("21")).toEqual(["nine", "pm"]);
  });
});

describe ('#evalMinute', () => {
  test('00', () =>{
    expect(evalMinute("00")).toEqual("o’clock");
  });
  test('04', () =>{
    expect(evalMinute("04")).toEqual("oh four");
  });
  test('14', () =>{
    expect(evalMinute("14")).toEqual("fourteen");
  });
  test('21', () =>{
    expect(evalMinute("49")).toEqual("fourty nine");
  });
});

describe('#timeWord', ()=> {
  test('00:00', () => {
    expect(timeWord('00:00')).toEqual('midnight');
  });
  test('00:12', () => {
    expect(timeWord("00:12")).toEqual("twelve twelve am");
  });
  test('01:00', () => {
    expect(timeWord("01:00")).toEqual("one o’clock am");
  });
  test('06:01', () => {
    expect(timeWord("06:01")).toEqual("six oh one am");
  });
  test('06:10', () => {
    expect(timeWord("06:10")).toEqual("six ten am");
  });
  test('06:18', () => {
    expect(timeWord("06:18")).toEqual("six eighteen am");
  });
  test('06:30', () => {
    expect(timeWord("06:30")).toEqual("six thirty am");
  });
  test('10:34', () => {
    expect(timeWord("10:34")).toEqual("ten thirty four am");
  });
  test('12:00', () => {
    expect(timeWord("12:00")).toEqual("noon");
  });
  test('12:09', () => {
    expect(timeWord("12:09")).toEqual("twelve oh nine pm");
  });
  test('23:23', () => {
    expect(timeWord("23:23")).toEqual("eleven twenty three pm");
  });
});
