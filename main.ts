bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Square)
})
bluetooth.startMagnetometerService()
bluetooth.startButtonService()
bluetooth.startLEDService()
bluetooth.startAccelerometerService()
basic.showIcon(IconNames.Square)
