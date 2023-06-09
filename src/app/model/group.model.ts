import { Child } from './child.model';

export class Group {
  constructor(
    private _id?: number,
    private _name?: string,
    private _numberOfMembers?: number,
    private _numberOfEducators?: number,
    private _numberOfChildren?: number,
    private _children?: Child[],
    private _educators?: any[]
  ) {}

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get numberOfMembers() {
    return this._numberOfMembers;
  }

  get children() {
    return this._children;
  }

  get educators() {
    return this._educators;
  }

  get numberOfChildren() {
    return this._numberOfChildren;
  }

  get numberOfEducators() {
    return this._numberOfEducators;
  }

  addChildren(list: Child[]) {
    this._children = list;
  }
}
