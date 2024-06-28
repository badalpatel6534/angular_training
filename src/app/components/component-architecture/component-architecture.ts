import { FlatTreeControl } from '@angular/cdk/tree';
import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { ActivatedRoute } from '@angular/router';
import { files } from './example-data';

/** File node data with possible child nodes. */
export interface FileNode {
  name: string;
  type: string;
  children?: FileNode[];
}

/**
 * Flattened tree node that has been created from a FileNode through the flattener. Flattened
 * nodes include level index and whether they can be expanded or not.
 */
export interface FlatTreeNode {
  name: string;
  type: string;
  level: number;
  expandable: boolean;
}

@Component({
  selector: 'app-tree',
  templateUrl: './component-architecture.html',
  styleUrl: './component-architecture.scss',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule]
})
export class ComponentArchitectureComponent {

  treeControl: FlatTreeControl<FlatTreeNode>;

  treeFlattener: MatTreeFlattener<FileNode, FlatTreeNode>;

  dataSource: MatTreeFlatDataSource<FileNode, FlatTreeNode>;

  private location = inject(Location);
  private route = inject(ActivatedRoute);
  userDetails = {} as {fName: string, lName: string, role: string};

  constructor() {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren);


      // get data from resolver
      this.route.data.subscribe((response: any) => {
        console.log('Product Fetched From Resolver:::::::::::::::', response);
      });
    
      // get data from navigationExtra
      const state = this.location.getState() as {userDetails: {fName: string, lName: string, role: string}};
      this.userDetails = state.userDetails;
      console.log("NavigationExtra UserDetails:::::::", this.userDetails);


      // get data from query params
      this.route.params.subscribe((queryParams) => {
        console.log("queryParams:::::::::", queryParams);
      })
    
    
      this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
      this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
      this.dataSource.data = files;
  }

  transformer(node: FileNode, level: number): FlatTreeNode {
    return {
      name: node.name,
      type: node.type,
      level,
      expandable: !!node.children
    };
  }

  getLevel(node: FlatTreeNode): number {
    return node.level;
  }

  isExpandable(node: FlatTreeNode): boolean {
    return node.expandable;
  }

  hasChild(index: number, node: FlatTreeNode): boolean {
    return node.expandable;
  }

  getChildren(node: FileNode): FileNode[] | null | undefined {
    return node.children;
  }
}
