export enum UnitType {
    Temperature,
    VolumeArea,
    VolumeContainer
}

export function UnitName() {
    let data = [
        { key: 0, name: 'kelvin', display:'Kelvin', unitType: UnitType.Temperature },
        { key: 1, name: 'celsius', display:'Celsius', unitType: UnitType.Temperature },
        { key: 2, name: 'fahrenheit', display:'Fahrenheit', unitType: UnitType.Temperature },
        { key: 3, name: 'rankine', display:'Rankine', unitType: UnitType.Temperature },

        { key: 4, name: 'liters', display:'Liters', unitType: UnitType.VolumeContainer },        
        { key: 5, name: 'tablespoons', display:'Tablespoons', unitType: UnitType.VolumeContainer },        
        { key: 6, name: 'cups', display:'Cups', unitType: UnitType.VolumeContainer },        
        { key: 7, name: 'gallons', display:'Gallons', unitType: UnitType.VolumeContainer },        
        
        { key: 8, display: 'Cubic Inches', name:'cubic-inches', unitType: UnitType.VolumeArea },        
        { key: 9, display: 'Cubic Feet', name:'cubic-feet', unitType: UnitType.VolumeArea },        
    ];

    return data;
}