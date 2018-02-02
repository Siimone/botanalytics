import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatTableDataSource} from '@angular/material'
import {MatIconModule} from '@angular/material/icon';
import {ApiService} from '../api.service'

@Component({
  selector: 'users-activity',
  templateUrl: './users-activity.component.html',
  styleUrls: ['./users-activity.component.css'],
  encapsulation: ViewEncapsulation.None,providers: [ApiService]
})

export class UsersActivityComponent implements OnInit {

  private dataSource : MatTableDataSource<Object>
  //ELEMENT_DATA: Element[]
  ELEMENT_DATA: Object[]
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    let that = this
    this.apiService.getUsersActivity().then(
      res => {
        that.ELEMENT_DATA = res
        that.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      }
    );
  }

  displayedColumns = ['User ID', 'Actions'];
  

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

/*export interface Element {
  users: number;
  count: number;
}
*/
const ELEMENT_DATA2: Element[] = [{"users":19379515,"count":2},{"users":36625523,"count":2},{"users":48883988,"count":12},{"users":49423018,"count":1},{"users":62963157,"count":1},{"users":76785475,"count":1},{"users":83728558,"count":1},{"users":87980475,"count":2},{"users":100497447,"count":2},{"users":102719478,"count":3},{"users":102911312,"count":5},{"users":106810762,"count":4},{"users":131592191,"count":3},{"users":143824423,"count":9},{"users":148113690,"count":1},{"users":159257120,"count":6},{"users":165672389,"count":1},{"users":168693193,"count":37},{"users":172305481,"count":5},{"users":184660587,"count":4},{"users":186222364,"count":1},{"users":186786745,"count":2},{"users":188918139,"count":1},{"users":191039980,"count":2},{"users":192954971,"count":3},{"users":214430452,"count":1},{"users":253011095,"count":1},{"users":255209629,"count":26},{"users":257916870,"count":3},{"users":280863154,"count":5},{"users":309919126,"count":10},{"users":320569015,"count":2},{"users":341636681,"count":1},{"users":348382800,"count":2},{"users":348548636,"count":2},{"users":359031814,"count":1},{"users":360727705,"count":1},{"users":383944444,"count":1},{"users":389183897,"count":1},{"users":389993958,"count":3},{"users":391328940,"count":3},{"users":393634089,"count":1},{"users":405563903,"count":2},{"users":407376971,"count":2},{"users":410958876,"count":3},{"users":431895149,"count":1},{"users":432090273,"count":1},{"users":445307511,"count":1},{"users":448281694,"count":2},{"users":454588001,"count":6},{"users":468607973,"count":1},{"users":469740805,"count":2},{"users":471405772,"count":2},{"users":475092367,"count":1},{"users":498973513,"count":2}];

interface Element {
  users: number;
  count: number;
}