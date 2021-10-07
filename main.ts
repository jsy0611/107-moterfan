// 모터선풍기 달아서 
// 가변저항 키고 닫으면 선풍기 켜지고 숫자 뜸
pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P8, pins.analogReadPin(AnalogPin.P0))
})
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
