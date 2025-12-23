export type UserProps = {
  id?: number;
  name: string;
  age: number;
  email: string;
};

export class User {
  public id?: number;
  public name: string;
  public age: number;
  public email: string;

  constructor(props: UserProps) {
    this.id = props.id;
    this.name = props.name;
    this.age = props.age;
    this.email = props.email;
  }
}
