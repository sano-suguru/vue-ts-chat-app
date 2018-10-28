class User {
  constructor(
    public displayName: string = '',
  ) {}
}

class Content {
  constructor(
    public key: string,
    public name: string,
    public image: string,
    public message: string,
  ) {}
}

export { User, Content };
