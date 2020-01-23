import { Component, OnInit } from '@angular/core';
import {UnitConversionChecker} from './unit-conversion-checker'
import {UnitName} from './unit-conversion-checker.lookups'
import { UnitConversionCheckerService } from './unit-conversion-checker.service';

@Component({
  selector: 'app-unit-conversion-checker-form',
  templateUrl: './unit-conversion-checker-form.component.html',
  styleUrls: ['./unit-conversion-checker-form.component.css']
})
export class UnitConversionCheckerFormComponent {

  model = new UnitConversionChecker("", 0, "", 0);
  submitted = false;
  sourceUnitNames = UnitName();
  targetUnitNames = [];
  response = "";

  constructor(private unitConversionCheckerService: UnitConversionCheckerService) { }

  onSourceUnitChange(e){
    let x = UnitName().find(unit => unit.name === this.model.sourceUnit);
    this.targetUnitNames = this.sourceUnitNames.filter( unit => unit.unitType === x.unitType )
  }

  onSubmit() { 
    this.response = ""
    this.unitConversionCheckerService.checkUnitConversion(this.model).subscribe(result => {
      this.response = result.response;
    })

  }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }


}
