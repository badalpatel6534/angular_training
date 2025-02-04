import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-rendering-large-data',
  standalone: true,
  imports: [
    ScrollingModule,
    NgIf,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatInputModule
  ],
  templateUrl: './rendering-large-data.component.html',
  styleUrl: './rendering-large-data.component.scss'
})
export class RenderingLargeDataComponent implements OnInit {
   displayedColumns: string[] = ['id', 'name', 'age'];

   largeDataset = Array.from({ length: 100000 }, (_, i) => ({
     id: i + 1,
     name: `User ${i + 1}`,
     age: Math.floor(Math.random() * 60) + 18,
   }));
 
   filteredTableData = [...this.largeDataset];
 
   filteredVirtualData = [...this.largeDataset];
 
   searchControl = new FormControl('');
   virtualSearchControl = new FormControl('');

   @Input() hideCDKVirtualScroll: boolean;

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe((data) => {
      this.hideCDKVirtualScroll = data['hideCDKVirtualScroll'] || false;
    });
       this.searchControl.valueChanges.pipe(debounceTime(300)).subscribe((value: any) => {
        this.filteredTableData = this.largeDataset.filter(item =>
          item.name.toLowerCase().includes(value.trim().toLowerCase())
        );
      });
  
      this.virtualSearchControl.valueChanges.pipe(debounceTime(300)).subscribe((value: any) => {
        this.filteredVirtualData = this.largeDataset.filter(item =>
          item.name.toLowerCase().includes(value.trim().toLowerCase())
        );
      });
  
  }

  ngOnInit(): void {
    console.log("Rendering Large Data Component without CDK", this.filteredTableData);
    console.log("Rendering Large Data Component with CDK", this.filteredVirtualData);
    
  }


}
