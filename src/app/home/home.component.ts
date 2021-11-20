import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  public permutations: String[] = []
  public input: String = ''

  generatePermutations(input: string): void {
    this.permutations = []
    while (input.length > 0) {
      let n = input.length;
      this.permute(input, 0, n - 1);
      input = input.substring(1)
    }
  }

  permute(str: string, l: number, r: number): void {
    if (l == r)
      this.permutations.push(str)
    else
    {
      for (let i = l; i <= r; i++)
      {
        str = this.swap(str, l, i);
        this.permute(str, l + 1, r);
        str = this.swap(str, l, i);
      }
    }
  }

  swap(a: string, i: number, j: number): string {
    let temp;
    let charArray = a.split("");
    temp = charArray[i] ;
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return (charArray).join("");
  }
}
