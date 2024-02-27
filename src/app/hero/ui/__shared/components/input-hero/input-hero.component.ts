import { Component, Input, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'w2m-input-hero',
  templateUrl:"./input-hero.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputHeroComponent,
    },
  ]
})
export class InputHeroComponent { 
  @Input() id: string                  = '';
  @Input() name: string                = '';
  @Input() label: string               = '';
  @Input() placeholder: string               = '';
  @Input() type: string                = 'text';
  @Input() delay: number               = 500;
  @Input() disabled :boolean           = false;
  @Input() invalid   :boolean          = false;
  @Input() value                       = '';
  @Input() maxLength:number            = 100;
 
  selectedOptions : any             = ''; 
  touched         : boolean         = false;
  onChange = (values: string[]) => { };
  onTouched = () => { };
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
     if (changes['value'].currentValue !== undefined) {
        this.selectedOptions = changes['value'].currentValue
      }
    } 
  }

  onSelection(event: any) {
    this.onChange(this.getSelectedValuesAsString());
  }

  writeValue(values: string = ''): void {
    if (values) {
      this.selectedOptions = values
    }else{
     this.selectedOptions = []
    }
 
    
   }
   registerOnChange(onChange: any): void {
     this.onChange = onChange;
 
   }
   registerOnTouched(onTouched: any): void {
     this.onTouched = onTouched;
 
 
   }
   setDisabledState?(disabled: boolean): void {
     this.disabled = disabled;
   }
 
   getSelectedValuesAsString(): string[] {
      return this.selectedOptions
   }
 
   markAsTouched(): void {
     if (!this.touched) {
       this.onTouched();
       this.touched = true;
     }
   }

}
